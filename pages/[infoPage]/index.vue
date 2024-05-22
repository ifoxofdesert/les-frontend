<template>
  <div class="contacts" v-if="content">
    <Container>
      <ContainerBlock>
        <InfoPagesMenuSlider v-if="menu?.length" :buttons="menu" class="contacts__menuBlock" />
        <InfoPagesStructureBlock :title="content.title" :lastUpdate="content.lastUpdate">
          <NewsText :text="content.text" class="infoPage" />
        </InfoPagesStructureBlock>
      </ContainerBlock>
    </Container>
  </div>
</template>

<script lang="ts" setup>
  const { getInfoPage, getInfoPageMenu } = useApi();

  const route = useRoute();

  const getSlug = computed(() => route?.params['infoPage'] as string);

  const content = ref(
    await getInfoPage({
      populate: 'deep',
      filters: { slug: { $eq: getSlug.value } },
    })
  );

  const menu = ref(await getInfoPageMenu());

  if (!content.value?.slug) {
    showError({ statusCode: 404, fatal: true });
  }

  useHead({
    title: content.value?.pagetitle || '',
    meta: [
      {
        property: 'og:description',
        content: content.value?.pageDescription || '',
      },
      {
        name: 'description',
        content: content.value?.pageDescription || '',
      },
    ],
  });
</script>

<style lang="scss" scoped>
  .contacts {
    margin: 180px 0 0 0;

    &__menuBlock {
      margin: 0 0 70px 0;
      @media (max-width: 768px) {
        margin: 0 0 50px 0;
      }
    }

    @media (max-width: 1024px) {
      margin: 130px 0 0 0;
    }

    @media (max-width: 768px) {
      margin: 120px 0 0 0;
    }
  }
</style>
