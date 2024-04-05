<template>
  <div class="offersSlider">
    <Container>
      <ContainerBlock>
        <div class="offersSlider__container">
          <h2 class="offersSlider__container__title">
            Специальные выгоды
            <span>для наших гостей</span>
          </h2>
          <div class="offersSlider__container__sliderContainer">
            <div class="offersSlider__container__sliderContainer__infoBlock">
              <span class="offersSlider__container__sliderContainer__infoBlock__description">
                Насладитесь неповторимым комфортом и выгодными условиями проживания, созданными специально для вас.
              </span>
              <div class="offersSlider__container__sliderContainer__infoBlock__navigationBlock">
                <button
                  class="offersSlider__container__sliderContainer__infoBlock__navigationBlock__button left"
                  ref="swiperPrev"
                >
                  <IconComponent
                    name="arrow_left"
                    class="offersSlider__container__sliderContainer__infoBlock__navigationBlock__button__icon"
                  />
                </button>
                <div class="offersSlider__container__sliderContainer__infoBlock__navigationBlock__numberBlock">
                  {{ activeIndex }}
                  <span class="delimiter">/</span>
                  <span class="all">{{ formatingNumber(allIndex) }}</span>
                </div>
                <button
                  class="offersSlider__container__sliderContainer__infoBlock__navigationBlock__button right"
                  ref="swiperNext"
                >
                  <IconComponent
                    name="arrow_right"
                    class="offersSlider__container__sliderContainer__infoBlock__navigationBlock__button__icon"
                  />
                </button>
              </div>
            </div>
            <div class="offersSlider__container__sliderContainer__slider">
              <Swiper
                :slidesPerView="'auto'"
                :spaceBetween="0"
                :modules="[SwiperNavigation]"
                :navigation="{ prevEl: swiperPrev, nextEl: swiperNext, disabledClass: 'disable' }"
                @activeIndexChange="changeIndexSlide"
                @swiper="onSwiper"
              >
                <SwiperSlide
                  v-for="(item, index) in slids"
                  :key="index"
                  class="offersSlider__container__sliderContainer__slider__slideBlock"
                >
                  <div v-if="item.title" class="offersSlider__container__sliderContainer__slider__slideBlock__slide">
                    <div class="offersSlider__container__sliderContainer__slider__slideBlock__slide__imageBlock">
                      <span
                        class="offersSlider__container__sliderContainer__slider__slideBlock__slide__imageBlock__number"
                      >
                        {{ formatingNumber(index + 1) }}
                      </span>
                      <img
                        :src="item.img"
                        :alt="item.title"
                        class="offersSlider__container__sliderContainer__slider__slideBlock__slide__imageBlock__image"
                      />
                    </div>
                    <div class="offersSlider__container__sliderContainer__slider__slideBlock__slide__infoBlock">
                      <span
                        class="offersSlider__container__sliderContainer__slider__slideBlock__slide__infoBlock__markText"
                      >
                        {{ item.markText }}
                      </span>
                      <span
                        class="offersSlider__container__sliderContainer__slider__slideBlock__slide__infoBlock__title"
                      >
                        {{ item.title }}
                      </span>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </ContainerBlock>
    </Container>
  </div>
</template>

<script setup lang="ts">
  import Container from './Container.vue';
  import ContainerBlock from './ContainerBlock.vue';
  import IconComponent from './IconComponent.vue';
  import { SwiperNavigation } from '#imports';
  import type { Swiper } from '../node_modules/swiper/types/index.d.ts';
  import type { IoffersSlide } from '~/types/OffersSlider';

  const swiperNext = ref<HTMLElement | null>(null);
  const swiperPrev = ref<HTMLElement | null>(null);

  const activeIndex = ref<number | string>('01');

  const swiperRef = ref<Swiper>();

  function onSwiper(swiper: Swiper) {
    swiperRef.value = swiper;
  }

  const { slids } = defineProps({
    slids: {
      type: Array<IoffersSlide>,
      default: () => [
        {
          title: 'Раннее бронирование',
          img: '/_nuxt/assets/images/DSC_3524.jpeg',
          markText: 'Скидка 20%',
        },
        {
          title: 'Дарим подарки!',
          img: '/_nuxt/assets/images/DSC_3527.jpeg',
          markText: 'Экскурсия и подарки',
        },
        {
          title: 'Ура! Открытие!',
          img: '/_nuxt/assets/images/DSC_3224.jpeg',
          markText: 'Сертификат',
        },
        {
          title: 'Дарим подарки!',
          img: '/_nuxt/assets/images/DSC_3527.jpeg',
          markText: 'Экскурсия и подарки',
        },
        {
          title: 'Дарим подарки!',
          img: '/_nuxt/assets/images/DSC_3527.jpeg',
          markText: 'Экскурсия и подарки',
        },
        {
          title: 'Дарим подарки!',
          img: '/_nuxt/assets/images/DSC_3527.jpeg',
          markText: 'Экскурсия и подарки',
        },
        {
          title: 'Дарим подарки!',
          img: '/_nuxt/assets/images/DSC_3527.jpeg',
          markText: 'Экскурсия и подарки',
        },
        {
          title: 'Дарим подарки!',
          img: '/_nuxt/assets/images/DSC_3527.jpeg',
          markText: 'Экскурсия и подарки',
        },
        {
          title: 'Дарим подарки!',
          img: '/_nuxt/assets/images/DSC_3527.jpeg',
          markText: 'Экскурсия и подарки',
        },
        {
          title: 'Дарим подарки!',
          img: '/_nuxt/assets/images/DSC_3527.jpeg',
          markText: 'Экскурсия и подарки',
        },
        {
          title: 'Дарим подарки!',
          img: '/_nuxt/assets/images/DSC_3527.jpeg',
          markText: 'Экскурсия и подарки',
        },
        {
          title: 'Дарим подарки!',
          img: '/_nuxt/assets/images/DSC_3527.jpeg',
          markText: 'Экскурсия и подарки',
        },
      ],
    },
  });

  const allIndex = computed(() => Math.round(slids.length - 2.5));

  function changeIndexSlide(data: Swiper) {
    if (data.activeIndex + 1 == allIndex.value) {
      swiperRef.value?.slideNext();
    }

    activeIndex.value = formatingNumber(data.activeIndex + 1);
  }

  function formatingNumber(number: number): string | number {
    return number > 9 ? number : `0${number}`;
  }
</script>

<style lang="scss" scoped>
  .offersSlider {
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
      }

      &__sliderContainer {
        display: flex;
        gap: 190px;
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
              font-family: Playfair Display;
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
          &__slideBlock {
            width: 415px;
            margin: 0 20px 0 0;
            display: flex;
            &__slide {
              display: flex;
              flex-direction: column;
              padding: 30px;
              background-color: $milk;
              height: 420px;
              width: 415px;
              &__imageBlock {
                display: flex;
                justify-content: space-between;
                margin: 0 0 90px 0;
                &__number {
                  font-family: Manrope;
                  font-size: 20px;
                  font-weight: 500;
                  line-height: 110%;
                }
                &__image {
                  width: 200px;
                  height: 200px;
                  object-fit: cover;
                }
              }
              &__infoBlock {
                display: flex;
                flex-direction: column;

                &__markText {
                  font-family: Manrope;
                  font-size: 20px;
                  font-weight: 500;
                  line-height: 110%;
                  color: $green;
                  margin: 0 0 5px 0;
                }
                &__title {
                  font-family: Playfair Display;
                  font-size: 35px;
                  font-weight: 500;
                  line-height: 110%;
                  text-transform: uppercase;
                  color: $black;
                }
              }
            }
          }
        }
      }
    }
  }
</style>

<style lang="scss">
  .offersSlider {
    .offersSlider__container__sliderContainer__infoBlock__navigationBlock__button {
      &__icon {
        svg {
          path {
            fill: $black;
          }
        }
      }

      &.disable {
        .offersSlider__container__sliderContainer__infoBlock__navigationBlock__button__icon {
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
