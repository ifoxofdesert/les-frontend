<template>
  <div class="sliderBlock">
    <div class="sliderBlock__navigationBlock">
      <button class="sliderBlock__navigationBlock__button left" ref="swiperPrev">
        <IconComponent name="arrow_left" class="sliderBlock__navigationBlock__button__icon" />
      </button>
      <div class="sliderBlock__navigationBlock__numberBlock">
        {{ activeIndex }}
        <span class="delimiter">/</span>
        <span class="all">{{ formatingNumber(allIndex) }}</span>
      </div>
      <button class="sliderBlock__navigationBlock__button right" ref="swiperNext">
        <IconComponent name="arrow_right" class="sliderBlock__navigationBlock__button__icon" />
      </button>
    </div>

    <div class="sliderBlock__slide">
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
</template>

<script lang="ts" setup>
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

<style lang="scss" scoped></style>
