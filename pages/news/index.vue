<template>
  <div class="newsIndex">
    <TextMainBlock />
    <FilterTagDate :tags="filterTags" @selectTag="selectTag" />
    <Container>
      <ContainerBlock>
        <div class="newsIndex__cardblock">
          <CardEvent v-for="(item, index) in cardFilterData" :key="index" :card="item" />
        </div>
        <Button class="newsIndex__nextPage" type="button" mod="green">
          Загрузить еще
          <IconComponent name="arrow_right" class="newsIndex__nextPage__icon" />
        </Button>
      </ContainerBlock>
    </Container>
  </div>
</template>

<script lang="ts" setup>
  import type { Itags } from '~/types/FilterTagDate';

  const filterTags = ref<Itags[]>([
    {
      name: 'Все',
      tag: 'all',
      active: true,
    },
    {
      name: 'Мероприятия',
      tag: 'events',
      active: false,
    },
    {
      name: 'Новости',
      tag: 'news',
      active: false,
    },
  ]);

  const filterOptions = ref({
    tag: 'all',
    date: '',
  });

  const { $getNews } = useNuxtApp();

  function selectTag(index: number, tag: Itags) {
    filterTags.value.forEach((item) => {
      if (tag !== item) {
        item.active = false;
      }
    });
    filterTags.value[index].active = true;
    filterOptions.value.tag = filterTags.value[index].tag;
  }

  const card = ref(await $getNews());

  const cardFilterData = computed(() => {
    return card.value.filter((item) => {
      if (filterOptions.value.date && filterOptions.value?.tag) {
        return item.date == filterOptions.value.date && item.type == filterOptions.value.tag;
      } else if (filterOptions.value?.tag && filterOptions.value?.tag != 'all') {
        return item.type == filterOptions.value.tag;
      } else if (filterOptions.value.date) {
        return item.date == filterOptions.value.date;
      } else {
        return true;
      }
    });
  });
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
