<template>
  <div class="sliderAndText">
    <Container>
      <ContainerBlock>
        <div class="sliderAndText__container">
          <h2 class="sliderAndText__container__title" v-if="title || secondTitle">
            {{ title }}
            <span v-if="secondTitle">{{ secondTitle }}</span>
          </h2>
          <span
            class="sliderAndText__container__sliderContainer__infoBlock__description"
            v-if="description && viewport.isLessThan('is_1200')"
          >
            {{ description }}
          </span>
          <div class="sliderAndText__container__sliderContainer">
            <div
              class="sliderAndText__container__sliderContainer__infoBlock"
              v-if="viewport.isGreaterOrEquals('is_1200')"
            >
              <span class="sliderAndText__container__sliderContainer__infoBlock__description" v-if="description">
                {{ description }}
              </span>
              <div class="sliderAndText__container__sliderContainer__infoBlock__navigationBlock" v-if="allIndex > 1">
                <button
                  class="sliderAndText__container__sliderContainer__infoBlock__navigationBlock__button left"
                  ref="swiperPrev"
                >
                  <IconComponent
                    name="arrow_left"
                    class="sliderAndText__container__sliderContainer__infoBlock__navigationBlock__button__icon"
                  />
                </button>
                <div class="sliderAndText__container__sliderContainer__infoBlock__navigationBlock__numberBlock">
                  {{ activeIndex }}
                  <span class="delimiter">/</span>
                  <span class="all">{{ formatingNumber(allIndex) }}</span>
                </div>
                <button
                  class="sliderAndText__container__sliderContainer__infoBlock__navigationBlock__button right"
                  ref="swiperNext"
                >
                  <IconComponent
                    name="arrow_right"
                    class="sliderAndText__container__sliderContainer__infoBlock__navigationBlock__button__icon"
                  />
                </button>
              </div>
            </div>
            <div class="sliderAndText__container__sliderContainer__slider">
              <Swiper
                :slidesPerView="'auto'"
                :spaceBetween="0"
                :modules="[SwiperNavigation]"
                :navigation="{ prevEl: swiperPrev, nextEl: swiperNext, disabledClass: 'disable' }"
                @activeIndexChange="changeIndexSlide"
                @swiper="onSwiper"
              >
                <slot />
              </Swiper>
            </div>
          </div>
        </div>
      </ContainerBlock>
    </Container>
  </div>
</template>

<script setup lang="ts">
  import type { Swiper } from 'swiper/types';

  const { numberSlides, title, secondTitle, description, fixNumberSlides } = defineProps({
    numberSlides: {
      type: Number,
      default: 3,
    },

    title: {
      type: String,
      default: '',
    },
    secondTitle: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
    // Нужно чтобы правильно посчитать слайды. Свайпер иногда не считает последний слайд и это вызывает недокрут
    fixNumberSlides: {
      type: Number,
      default: 1,
    },
  });

  const { formatingNumber } = useFormating();

  const viewport = useViewport();

  const swiperNext = ref<HTMLElement | null>(null);
  const swiperPrev = ref<HTMLElement | null>(null);

  const activeIndex = ref<number | string>('01');

  const swiperRef = ref<Swiper>();

  function onSwiper(swiper: Swiper) {
    swiperRef.value = swiper;
  }

  const allIndex = computed(() => Math.round(numberSlides - fixNumberSlides));

  function changeIndexSlide(data: Swiper) {
    if (data.activeIndex + 1 == allIndex.value && viewport.isGreaterOrEquals('is_1200')) {
      swiperRef.value?.slideNext();
    }

    activeIndex.value = formatingNumber(data.activeIndex + 1);
  }
</script>

<style lang="scss" scoped>
  .sliderAndText {
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 0 0 75px 0;
    margin: 0 0 75px 0;
    &__container {
      display: flex;
      flex-direction: column;
      &__title {
        margin: 0 0 70px 150px;
        font-family: 'Playfair Display';
        font-size: 90px;
        font-weight: 500;
        line-height: 100px;
        text-transform: uppercase;
        display: flex;
        flex-direction: column;

        span {
          margin: 0 0 0 470px;
        }

        @media (max-width: 1550px) {
          font-size: 80px;
          margin: 0 0 70px 0;
          float: left;
          display: block;

          span {
            margin: 0 0 0 0;
          }
        }

        @media (max-width: 1200px) {
          font-size: 62px;
          margin: 0 0 20px 0;
          line-height: 120%;
        }

        @media (max-width: 768px) {
          font-size: 42px;
        }
        @media (max-width: 550px) {
          font-size: 30px;
        }
      }

      &__sliderContainer {
        display: flex;
        gap: 200px;
        &__infoBlock {
          min-width: 428px;
          width: 428px;
          display: flex;
          flex-direction: column;
          &__description {
            font-family: 'Manrope';
            font-size: 22px;
            font-weight: 300;
            line-height: 110%;

            @media (max-width: 1200px) {
              margin: 0 0 40px 0;
            }

            @media (max-width: 768px) {
              font-size: 20px;
            }
            @media (max-width: 550px) {
              font-size: 18px;
            }
          }

          &__navigationBlock {
            margin: auto 0 0 0;
            display: flex;
            align-items: center;
            gap: 15px;
            &__button {
              &__icon {
                svg {
                  fill: #000;
                }
              }
            }

            &__numberBlock {
              display: flex;
              align-items: center;
              font-family: 'Playfair Display';
              font-size: 45px;
              font-weight: 400;
              line-height: 110%;
              .delimiter {
                font-size: 40px;
              }
              .all {
                font-size: 30px;
              }
            }
          }
        }

        &__slider {
          overflow: hidden;
        }
      }
    }

    @media (max-width: 1200px) {
      padding: 0;
      margin: 0 0 120px 0;
    }

    @media (max-width: 550px) {
      margin: 0 0 50px 0;
    }
  }
</style>

<style lang="scss">
  .sliderAndText {
    .sliderAndText__container__sliderContainer__infoBlock__navigationBlock__button {
      &__icon {
        svg {
          path {
            fill: $black;
          }
        }
      }

      &.disable {
        .sliderAndText__container__sliderContainer__infoBlock__navigationBlock__button__icon {
          svg {
            path {
              fill: $gray;
            }
          }
        }
      }
    }
  }
</style>
