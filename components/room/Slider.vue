<template>
  <div class="sliderBlock">
    <div class="sliderBlock__navigationBlock">
      <button class="sliderBlock__navigationBlock__button left" ref="swiperPrev" v-if="allIndex > 1">
        <IconComponent name="arrow_left" class="sliderBlock__navigationBlock__button__icon" />
      </button>
      <div class="sliderBlock__navigationBlock__numberBlock" v-if="allIndex > 1">
        {{ activeIndex }}
        <span class="delimiter">/</span>
        <span class="all">{{ formatingNumber(allIndex) }}</span>
      </div>
      <button class="sliderBlock__navigationBlock__button right" ref="swiperNext" v-if="allIndex > 1">
        <IconComponent name="arrow_right" class="sliderBlock__navigationBlock__button__icon" />
      </button>
    </div>

    <div class="sliderBlock__slide">
      <Swiper
        :roundLengths="true"
        :slidesPerView="slidesPerView"
        :spaceBetween="spaceBetween"
        :modules="[SwiperNavigation]"
        :navigation="{ prevEl: swiperPrev, nextEl: swiperNext, disabledClass: 'disable' }"
        @activeIndexChange="changeIndexSlide"
        @swiper="onSwiper"
      >
        <slot />
      </Swiper>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import type { Swiper } from 'swiper/types';

  const { numberSlides, fixNumberSlides, spaceBetween, slidesPerView } = defineProps({
    numberSlides: {
      type: Number,
      default: 3,
    },

    spaceBetween: {
      type: Number,
      default: 0,
    },

    // Нужно чтобы правильно посчитать слайды. Свайпер иногда не считает последний слайд и это вызывает недокрут
    fixNumberSlides: {
      type: Number,
      default: 1,
    },

    slidesPerView: {
      type: [String as () => 'auto', Number],
      default: 4,
    },
  });

  const { formatingNumber } = useFormating();

  const swiperNext = ref<HTMLElement | null>(null);
  const swiperPrev = ref<HTMLElement | null>(null);

  const activeIndex = ref<number | string>('01');

  const swiperRef = ref<Swiper>();

  function onSwiper(swiper: Swiper) {
    swiperRef.value = swiper;
  }

  const allIndex = computed(() => Math.round(numberSlides - fixNumberSlides));

  function changeIndexSlide(data: Swiper) {
    if (data.activeIndex + 1 == allIndex.value) {
      swiperRef.value?.slideNext();
    }

    activeIndex.value = formatingNumber(data.activeIndex + 1);
  }
</script>

<style lang="scss" scoped>
  .sliderBlock {
    &__navigationBlock {
      margin: 0 0 60px 620px;
      display: flex;
      align-items: center;
      gap: 15px;
      &__button {
        &__icon {
          &:deep() {
            svg {
              path {
                fill: #000;
              }
            }
          }
        }

        &.disable {
          .sliderBlock__navigationBlock__button__icon {
            &:deep() {
              svg {
                path {
                  fill: $gray;
                }
              }
            }
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
</style>
