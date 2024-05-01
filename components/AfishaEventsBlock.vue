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

          <div class="afishaEventsBlock__container__afishaBlock" v-if="viewport.isGreaterOrEquals('is_1450')">
            <div class="afishaEventsBlock__container__afishaBlock__mainBlock" v-if="mainBlock?.title">
              <img
                v-if="mainBlock?.image?.src"
                :src="mainBlock.image.src"
                :alt="mainBlock.image.alt || mainBlock?.title"
                class="afishaEventsBlock__container__afishaBlock__mainBlock__image"
              />
              <div class="afishaEventsBlock__container__afishaBlock__mainBlock__infoBlock">
                <div class="afishaEventsBlock__container__afishaBlock__mainBlock__infoBlock__dateBlock">
                  <span
                    class="afishaEventsBlock__container__afishaBlock__mainBlock__infoBlock__dateBlock__date"
                    v-if="mainBlock?.date"
                  >
                    {{ formatingDateTime(mainBlock.date) }}
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

            <div
              class="afishaEventsBlock__container__afishaBlock__othersPosters"
              :class="{ jc_sb: content.length > 2 }"
            >
              <template v-for="(item, index) in content">
                <div
                  class="afishaEventsBlock__container__afishaBlock__othersPosters__poster"
                  v-if="item != mainBlock"
                  :key="index"
                >
                  <img
                    :src="item.image?.src"
                    :alt="item.image?.alt || item.title"
                    class="afishaEventsBlock__container__afishaBlock__othersPosters__poster__image"
                  />
                  <div class="afishaEventsBlock__container__afishaBlock__othersPosters__poster__infoBlock">
                    <div class="afishaEventsBlock__container__afishaBlock__othersPosters__poster__infoBlock__dateBlock">
                      <span
                        class="afishaEventsBlock__container__afishaBlock__othersPosters__poster__infoBlock__dateBlock__date"
                        v-if="item?.date"
                      >
                        {{ formatingDateTime(item.date) }}
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
          <div class="afishaEventsBlock__container__afishaMobileBlock" v-if="viewport.isLessThan('is_1450')">
            <Swiper
              class="afishaEventsBlock__container__afishaMobileBlock__slider"
              :slidesPerView="'auto'"
              :spaceBetween="15"
            >
              <SwiperSlide
                v-for="(item, index) in content"
                :key="index"
                class="afishaEventsBlock__container__afishaMobileBlock__slider__slide"
              >
                <CardEvent :card="item" />
              </SwiperSlide>
            </Swiper>
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
  import type { Icard } from '~/types/News.d.ts';
  const { content } = defineProps({
    content: {
      type: Array as () => Icard[],
      default: () => [],
    },
  });

  console.log(content);

  const { formatingDateTime } = useFormating();

  const viewport = useViewport();

  const mainBlock = computed(() => {
    if (content.length) {
      const isMain = content.find((item) => item.main);
      if (!isMain?.title) {
        return content.slice(0, 1)[0];
      } else {
        return isMain;
      }
    }
  });
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

        @media (max-width: 1550px) {
          font-size: 80px;
          margin: 0 0 20px 0;
          float: left;
          display: block;
          line-height: 120%;

          span {
            margin: 0;
          }
        }

        @media (max-width: 1200px) {
          font-size: 62px;
          line-height: 100%;
        }

        @media (max-width: 768px) {
          font-size: 42px;
        }

        @media (max-width: 550px) {
          font-size: 30px;
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

        @media (max-width: 1550px) {
          margin: 0;
        }

        @media (max-width: 768px) {
          font-size: 20px;
        }
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
            min-height: 200px;
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

            @media (max-width: 1650px) {
              box-sizing: border-box;
            }
          }

          &.jc_sb {
            justify-content: space-between;
          }
        }

        @media (max-width: 1449px) {
          display: none;
        }
      }
      &__afishaMobileBlock {
        display: none;
        margin: 40px 0 20px 0;

        &__slider {
          overflow: visible;

          &__slide {
            height: auto;
            margin: 0 15px 0 0;
            width: auto;
          }
        }

        @media (max-width: 1449px) {
          display: block;
        }
      }
    }
  }
</style>

<style lang="scss">
  .afishaEventsBlock {
    .afishaEventsBlock__container {
      &__button {
        svg {
          path {
            fill: $whitesmoke;
          }
        }

        &:hover {
          svg {
            path {
              fill: $black;
            }
          }
        }
      }
    }
  }
</style>
