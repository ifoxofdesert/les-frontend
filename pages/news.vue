<template>
  <div class="news">
    <TextMainBlock />
    <FilterTagDate :tags="filterTags" @selectTag="selectTag" />
    <Container>
      <ContainerBlock>
        <div class="news__cardblock">
          <CardEvent v-for="(item, index) in cardFilterData" :key="index" :card="item" />
        </div>
        <Button class="news__nextPage" type="button" mod="green">
          Загрузить еще
          <IconComponent name="arrow_right" class="news__nextPage__icon" />
        </Button>
      </ContainerBlock>
    </Container>
  </div>
</template>

<script lang="ts" setup>
  import type { Icard } from '~/types/CardEvent';
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

  function selectTag(index: number, tag: Itags) {
    filterTags.value.forEach((item) => {
      if (tag !== item) {
        item.active = false;
      }
    });
    filterTags.value[index].active = true;
    filterOptions.value.tag = filterTags.value[index].tag;
  }

  const card: Icard[] = [
    {
      image: {
        src: '/_nuxt/assets/images/1news.jpg',
        alt: 'Изображение 1',
      },
      date: '2024.03.01 10:00',
      position: 'Актовый зал в корпусе Кедр',
      title: 'Открытие отеля',
      description:
        'Добро пожаловать в отель нового поколения, где роскошь встречает современные удобства. Откройте двери в мир элегантности и уюта, где каждая деталь создана для вашего комфорта и наслаждения.',
      type: 'news',
    },
    {
      image: {
        src: '/_nuxt/assets/images/2news.jpg',
        alt: 'Изображение 2',
      },
      date: '2024.03.10 15:00',
      position: 'Парковая зона',
      title: 'Открытие нового корпуса',
      description:
        'Добро пожаловать в отель нового поколения, где роскошь встречает современные удобства. Откройте двери в мир элегантности и уюта, где каждая деталь создана для вашего комфорта и наслаждения.',
      type: 'events',
    },
    {
      image: {
        src: '/_nuxt/assets/images/3news.jpg',
        alt: 'Изображение 3',
      },
      date: '2024.04.24',
      position: 'Интересное',
      title: 'Высота горы Ай-Петри',
      description:
        'Добро пожаловать в отель нового поколения, где роскошь встречает современные удобства. Откройте двери в мир элегантности и уюта, где каждая деталь создана для вашего комфорта и наслаждения.',
      type: 'news',
    },
    {
      image: {
        src: '/_nuxt/assets/images/4news.jpg',
        alt: 'Изображение 4',
      },
      date: '2024.06.15',
      position: 'Крым',
      title: 'Отдых в Крыму зимой',
      description:
        'Добро пожаловать в отель нового поколения, где роскошь встречает современные удобства. Откройте двери в мир элегантности и уюта, где каждая деталь создана для вашего комфорта и наслаждения.',
      type: 'events',
    },

    {
      image: {
        src: '/_nuxt/assets/images/1news.jpg',
        alt: 'Изображение 1',
      },
      date: '2024.03.01 10:00',
      position: 'Актовый зал в корпусе Кедр',
      title: 'Открытие отеля',
      description:
        'Добро пожаловать в отель нового поколения, где роскошь встречает современные удобства. Откройте двери в мир элегантности и уюта, где каждая деталь создана для вашего комфорта и наслаждения.',
      type: 'news',
    },
    {
      image: {
        src: '/_nuxt/assets/images/2news.jpg',
        alt: 'Изображение 2',
      },
      date: '2024.03.10 15:00',
      position: 'Парковая зона',
      title: 'Открытие нового корпуса',
      description:
        'Добро пожаловать в отель нового поколения, где роскошь встречает современные удобства. Откройте двери в мир элегантности и уюта, где каждая деталь создана для вашего комфорта и наслаждения.',
      type: 'events',
    },
    {
      image: {
        src: '/_nuxt/assets/images/3news.jpg',
        alt: 'Изображение 3',
      },
      date: '2024.04.24',
      position: 'Интересное',
      title: 'Высота горы Ай-Петри',
      description:
        'Добро пожаловать в отель нового поколения, где роскошь встречает современные удобства. Откройте двери в мир элегантности и уюта, где каждая деталь создана для вашего комфорта и наслаждения.',
      type: 'news',
    },
    {
      image: {
        src: '/_nuxt/assets/images/4news.jpg',
        alt: 'Изображение 4',
      },
      date: '2024.06.15',
      position: 'Крым',
      title: 'Отдых в Крыму зимой',
      description:
        'Добро пожаловать в отель нового поколения, где роскошь встречает современные удобства. Откройте двери в мир элегантности и уюта, где каждая деталь создана для вашего комфорта и наслаждения.',
      type: 'events',
    },

    {
      image: {
        src: '/_nuxt/assets/images/1news.jpg',
        alt: 'Изображение 1',
      },
      date: '2024.03.01 10:00',
      position: 'Актовый зал в корпусе Кедр',
      title: 'Открытие отеля',
      description:
        'Добро пожаловать в отель нового поколения, где роскошь встречает современные удобства. Откройте двери в мир элегантности и уюта, где каждая деталь создана для вашего комфорта и наслаждения.',
      type: 'news',
    },
    {
      image: {
        src: '/_nuxt/assets/images/2news.jpg',
        alt: 'Изображение 2',
      },
      date: '2024.03.10 15:00',
      position: 'Парковая зона',
      title: 'Открытие нового корпуса',
      description:
        'Добро пожаловать в отель нового поколения, где роскошь встречает современные удобства. Откройте двери в мир элегантности и уюта, где каждая деталь создана для вашего комфорта и наслаждения.',
      type: 'events',
    },
    {
      image: {
        src: '/_nuxt/assets/images/3news.jpg',
        alt: 'Изображение 3',
      },
      date: '2024.04.24',
      position: 'Интересное',
      title: 'Высота горы Ай-Петри',
      description:
        'Добро пожаловать в отель нового поколения, где роскошь встречает современные удобства. Откройте двери в мир элегантности и уюта, где каждая деталь создана для вашего комфорта и наслаждения.',
      type: 'news',
    },
    {
      image: {
        src: '/_nuxt/assets/images/4news.jpg',
        alt: 'Изображение 4',
      },
      date: '2024.06.15',
      position: 'Крым',
      title: 'Отдых в Крыму зимой',
      description:
        'Добро пожаловать в отель нового поколения, где роскошь встречает современные удобства. Откройте двери в мир элегантности и уюта, где каждая деталь создана для вашего комфорта и наслаждения.',
      type: 'events',
    },
  ];

  const cardFilterData = computed(() => {
    return card.filter((item) => {
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
  .news {
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
  .news {
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
