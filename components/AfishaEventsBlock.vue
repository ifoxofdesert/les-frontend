<template>
  <div class="afishaEventsBlock">
    <Container>
      <ContainerBlock>
        <div class="afishaEventsBlock__container">
          <h2 class="afishaEventsBlock__container__title">
            Афиша мероприятий
            <span>и новостей</span>
          </h2>
          <span class="afishaEventsBlock__container__description">
            Узнайте о наших мероприятиях, развлечениях и экскурсиях заранее. Погрузитесь в мир разнообразия и откройте
            для себя уникальные возможности для получения захватывающих впечатлений.
          </span>

          <div class="afishaEventsBlock__container__afishaBlock">
            <div class="afishaEventsBlock__container__afishaBlock__mainBlock">
              <img
                :src="mainBlock?.img"
                :alt="mainBlock?.title"
                class="afishaEventsBlock__container__afishaBlock__mainBlock__image"
              />
              <div class="afishaEventsBlock__container__afishaBlock__mainBlock__infoBlock">
                <div class="afishaEventsBlock__container__afishaBlock__mainBlock__infoBlock__dateBlock">
                  <span class="afishaEventsBlock__container__afishaBlock__mainBlock__infoBlock__dateBlock__date">
                    {{ mainBlock?.date }}
                  </span>
                  <span class="afishaEventsBlock__container__afishaBlock__mainBlock__infoBlock__dateBlock__position">
                    {{ mainBlock?.position }}
                  </span>
                </div>
                <span class="afishaEventsBlock__container__afishaBlock__mainBlock__infoBlock__title">
                  {{ mainBlock?.title }}
                </span>
                <span class="afishaEventsBlock__container__afishaBlock__mainBlock__infoBlock__description">
                  {{ mainBlock?.description }}
                </span>
              </div>
            </div>

            <div class="afishaEventsBlock__container__afishaBlock__othersPosters">
              <template v-for="(item, index) in content">
                <div
                  class="afishaEventsBlock__container__afishaBlock__othersPosters__poster"
                  v-if="!item.main"
                  :key="index"
                >
                  <img
                    :src="item.img"
                    :alt="item.title"
                    class="afishaEventsBlock__container__afishaBlock__othersPosters__image"
                  />
                  <div class="afishaEventsBlock__container__afishaBlock__othersPosters__infoBlock">
                    <div class="afishaEventsBlock__container__afishaBlock__othersPosters__infoBlock__dateBlock">
                      <span
                        class="afishaEventsBlock__container__afishaBlock__othersPosters__infoBlock__dateBlock__date"
                      >
                        {{ item.date }}
                      </span>
                      <span
                        class="afishaEventsBlock__container__afishaBlock__othersPosters__infoBlock__dateBlock__position"
                      >
                        {{ item.position }}
                      </span>
                    </div>
                    <span class="afishaEventsBlock__container__afishaBlock__othersPosters__infoBlock__title">
                      {{ item.title }}
                    </span>
                    <span class="afishaEventsBlock__container__afishaBlock__othersPosters__infoBlock__description">
                      {{ item.description }}
                    </span>
                  </div>
                </div>
              </template>
            </div>
          </div>
          <Button class="afishaEventsBlock__container__button" mod="green" type="button">
            Посмотреть все новости
            <IconComponent name="arrow_right" />
          </Button>
        </div>
      </ContainerBlock>
    </Container>
  </div>
</template>

<script setup lang="ts">
  import Container from './Container.vue';
  import ContainerBlock from './ContainerBlock.vue';
  import IconComponent from './IconComponent.vue';
  import Button from './Button.vue';

  const content = [
    {
      img: 'assets/images/1.jpeg',
      date: '1 марта / 10:00',
      position: 'Актовый зал в корпусе Кедр',
      title: 'Открытие отеля',
      description:
        'Добро пожаловать в отель нового поколения, где роскошь встречает современные удобства. Откройте двери в мир элегантности и уюта, где каждая деталь создана для вашего комфорта и наслаждения.',
      link: '#',
      main: true,
    },
    {
      img: 'assets/images/1-1.jpeg',
      date: '10 марта / 15:00',
      position: 'Парковая зона',
      title: 'Открытие нового корпуса',
      description:
        'Добро пожаловать в отель нового поколения, где роскошь встречает современные удобства. Откройте двери в мир элегантности и уюта, где каждая деталь создана для вашего комфорта и наслаждения.',
      link: '#',
      main: false,
    },
    {
      img: 'assets/images/1-2.jpeg',
      date: '24 апреля 2024г.',
      position: 'Интересное',
      title: 'Высота горы Ай-Петри',
      description:
        'Добро пожаловать в отель нового поколения, где роскошь встречает современные удобства. Откройте двери в мир элегантности и уюта, где каждая деталь создана для вашего комфорта и наслаждения.',
      link: '#',
      main: false,
    },
    {
      img: 'assets/images/1-3.jpeg',
      date: '15 июня 2024г.',
      position: 'Крым',
      title: 'Отдых в Крыму зимой',
      description:
        'Добро пожаловать в отель нового поколения, где роскошь встречает современные удобства. Откройте двери в мир элегантности и уюта, где каждая деталь создана для вашего комфорта и наслаждения.',
      link: '#',
      main: false,
    },
  ];

  const mainBlock = computed(() => content.find((item) => item.main));
</script>
