<template>
  <div class="newsIndex">
    <TextMainBlock :title="content?.title" :description="content?.description" />
    <FilterTagDate :tags="tags" @selectTag="selectTag" />
    <Container>
      <ContainerBlock>
        <div class="newsIndex__cardblock">
          <CardEvent v-for="(item, index) in cardData?.result" :key="`${item.slug}_${index}`" :card="item" />
        </div>
        <Button
          class="newsIndex__nextPage"
          type="button"
          mod="green"
          v-if="
            cardData?.pagination?.pageCount &&
            cardData.pagination.pageCount > 1 &&
            cardData?.pagination?.page < cardData.pagination.pageCount
          "
          @click="loadNextPage"
        >
          Загрузить еще
          <IconComponent name="arrow_right" class="newsIndex__nextPage__icon" />
        </Button>
      </ContainerBlock>
    </Container>
  </div>
</template>

<script lang="ts" setup>
  import type { Itags } from '~/types/FilterTagDate';
  import type { Ipage } from '~/types/General';
  import type { Icard } from '~/types/News';

  const { getNewsListingPage, getTags, getPreviewsNews } = useApi();

  const route = useRoute();
  const router = useRouter();

  const queryPage = ref(JSON.parse(JSON.stringify(route.query)));

  const content = ref(await getNewsListingPage());

  const filterTags = computed(() => {
    if (route.params?.slug) {
      return route.params?.slug as string;
    } else if (content.value?.defaultFilter) {
      return content.value.defaultFilter;
    } else {
      return 'all';
    }
  });

  const filterQuery = computed(() => {
    if (filterTags.value != 'all') {
      return { pageNews: { type: { tag: { $eq: filterTags.value } } } };
    } else {
      return undefined;
    }
  });

  const tags = ref([{ name: 'Все', tag: 'all' }, ...((await getTags()) || [])]);
  tags.value.forEach((tag) => {
    tag.active = false;
    if (tag.tag == filterTags.value) {
      tag.active = true;
    }
  });

  const cardData = ref<Ipage<Icard[]> | null>(null);

  async function loadNews() {
    cardData.value = await getPreviewsNews({
      populate: 'deep',
      pageSize: 4,
      page: Number(route?.query?.page) || 1,
      filters: filterQuery.value,
    });
  }

  await loadNews();

  function selectTag(index: number, tag: Itags) {
    tags.value.forEach((item) => {
      if (tag !== item) {
        item.active = false;
      }
    });
    tags.value[index].active = true;
    queryPage.value.page = undefined;
    router.push({
      path: `/events/${tag.tag != 'all' ? `${tag.tag}/` : ''}`,
      query: queryPage.value,
    });
  }

  async function loadNextPage() {
    if (cardData.value && Number(queryPage.value.page || 0) < cardData.value.pagination.pageCount) {
      if (route?.query?.page) {
        queryPage.value.page = Number(route?.query?.page) + 1;
        router.replace({
          query: queryPage.value,
        });
      } else {
        queryPage.value.page = 2;
        router.replace({
          query: queryPage.value,
        });
      }

      const data = await getPreviewsNews({
        populate: 'deep',
        pageSize: 4,
        page: Number(queryPage.value.page) || 1,
        filters: filterQuery.value,
      });

      if (data?.result?.length) {
        cardData.value?.result.push(...data.result);
      }

      if (cardData?.value?.pagination && data?.pagination) {
        cardData.value.pagination = data.pagination;
      }
    }
  }

  if (!cardData?.value?.result?.length) {
    showError({ statusCode: 404, fatal: true });
  }

  watch(
    () => route.query?.tags,
    async () => {
      await loadNews();
    }
  );
</script>

<style lang="scss" scoped>
  .newsIndex {
    margin: 0 0 150px 0;
    &__cardblock {
      width: 100%;
      display: flex;
      gap: 20px;
      flex-wrap: wrap;
      margin: 0 0 60px 0;
    }

    &__nextPage {
      width: 100%;
      margin: 0 0 1px 0;
      &__icon {
      }
    }
  }
</style>

<style lang="scss">
  .newsIndex {
    margin: 0 0 150px 0;

    &__nextPage {
      &__icon {
        path {
          fill: $whitesmoke;
        }
      }
    }
  }
</style>
