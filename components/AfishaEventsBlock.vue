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
                    class="afishaEventsBlock__container__afishaBlock__othersPosters__poster__image"
                  />
                  <div class="afishaEventsBlock__container__afishaBlock__othersPosters__poster__infoBlock">
                    <div class="afishaEventsBlock__container__afishaBlock__othersPosters__poster__infoBlock__dateBlock">
                      <span
                        class="afishaEventsBlock__container__afishaBlock__othersPosters__poster__infoBlock__dateBlock__date"
                      >
                        {{ item.date }}
                      </span>
                      <span
                        class="afishaEventsBlock__container__afishaBlock__othersPosters__poster__infoBlock__dateBlock__position"
                      >
                        {{ item.position }}
                      </span>
                    </div>
                    <span class="afishaEventsBlock__container__afishaBlock__othersPosters__poster__infoBlock__title">
                      {{ item.title }}
                    </span>
                    <span
                      class="afishaEventsBlock__container__afishaBlock__othersPosters__poster__infoBlock__description"
                    >
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
  const content = [
    {
      img: '/_nuxt/assets/images/1.jpeg',
      date: '1 марта / 10:00',
      position: 'Актовый зал в корпусе Кедр',
      title: 'Открытие отеля',
      description:
        'Добро пожаловать в отель нового поколения, где роскошь встречает современные удобства. Откройте двери в мир элегантности и уюта, где каждая деталь создана для вашего комфорта и наслаждения.',
      link: '#',
      main: true,
    },
    {
      img: '/_nuxt/assets/images/1-1.jpeg',
      date: '10 марта / 15:00',
      position: 'Парковая зона',
      title: 'Открытие нового корпуса',
      description:
        'Добро пожаловать в отель нового поколения, где роскошь встречает современные удобства. Откройте двери в мир элегантности и уюта, где каждая деталь создана для вашего комфорта и наслаждения.',
      link: '#',
      main: false,
    },
    {
      img: '/_nuxt/assets/images/1-2.jpeg',
      date: '24 апреля 2024г.',
      position: 'Интересное',
      title: 'Высота горы Ай-Петри',
      description:
        'Добро пожаловать в отель нового поколения, где роскошь встречает современные удобства. Откройте двери в мир элегантности и уюта, где каждая деталь создана для вашего комфорта и наслаждения.',
      link: '#',
      main: false,
    },
    {
      img: '/_nuxt/assets/images/1-3.jpeg',
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

<style lang="scss" scoped>
  .afishaEventsBlock {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 0 0 125px 0;
    &__container {
      width: 100%;
      display: flex;
      flex-direction: column;
      &__title {
        display: flex;
        flex-direction: column;
        font-family: 'Playfair Display';
        font-size: 90px;
        font-weight: 500;
        line-height: 120px;
        text-transform: uppercase;
        color: $black;
        margin: 0 0 0 311px;
        span {
          margin: 0 0 0 307px;
        }
      }

      &__description {
        margin: 0 0 0 620px;
        font-family: 'Manrope';
        font-size: 22px;
        font-weight: 300;
        line-height: 110%;
        color: $gray;
        max-width: 598px;
      }

      &__afishaBlock {
        display: flex;
        width: 100%;
        gap: 20px;
        margin: 60px 0 40px 0;
        &__mainBlock {
          background-color: $milk;
          padding: 25px 30px;
          max-width: 1005px;
          width: 100%;

          &__image {
            width: 100%;
            object-fit: cover;
            height: 538px;
            margin: 0 0 15px 0;
          }

          &__infoBlock {
            display: flex;
            flex-direction: column;
            width: 100%;
            &__dateBlock {
              display: flex;
              width: 100%;
              margin: 0 0 25px 0;
              &__date {
                font-family: 'Manrope';
                font-size: 22px;
                font-weight: 400;
                line-height: 110%;
                color: $green;
              }

              &__position {
                margin: 0 0 0 auto;
                font-family: 'Manrope';
                font-size: 22px;
                font-weight: 400;
                line-height: 110%;
                color: $green;
              }
            }

            &__title {
              margin: 0 0 15px 0;
              font-family: 'Manrope';
              font-size: 40px;
              font-weight: 300;
              line-height: 110%;
              color: $black;
            }

            &__description {
              color: $gray;
              font-family: 'Manrope';
              font-size: 22px;
              font-weight: 400;
              line-height: 120%;
            }
          }
        }

        &__othersPosters {
          display: flex;
          flex-direction: column;
          width: 100%;
          max-width: 755px;
          gap: 20px;
          &__poster {
            max-width: 705px;
            width: 100%;
            height: 200px;
            padding: 25px;
            background-color: $milk;
            display: flex;
            gap: 20px;

            &__image {
              max-width: 265px;
              width: 100%;
              height: 200px;
              object-fit: cover;
            }

            &__infoBlock {
              max-width: 420px;
              width: 100%;
              display: flex;
              flex-direction: column;

              &__dateBlock {
                display: flex;
                width: 100%;
                height: 100%;
                &__date {
                  font-family: 'Manrope';
                  font-size: 18px;
                  font-weight: 400;
                  line-height: 110%;
                  color: $green;
                }

                &__position {
                  margin: 0 0 0 auto;
                  font-family: 'Manrope';
                  font-size: 18px;
                  font-weight: 400;
                  line-height: 110%;
                  color: $gray;
                }
              }

              &__title {
                margin: 0 0 10px 0;
                font-family: 'Manrope';
                font-size: 30px;
                font-weight: 400;
                line-height: 110%;
                color: $black;
              }

              &__description {
                color: $gray;
                font-family: 'Manrope';
                font-size: 18px;
                font-weight: 400;
                line-height: 120%;
              }
            }
          }
        }
      }
    }
  }
</style>

afishaEventsBlock__container__button

<style lang="scss">
  .afishaEventsBlock {
    .afishaEventsBlock__container {
      &__button {
        svg {
          path {
            fill: $whitesmoke;
          }
        }
      }
    }
  }
</style>
