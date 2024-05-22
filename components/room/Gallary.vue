<template>
  <div class="gallaryBlock">
    <h2 class="gallaryBlock__title" v-if="title" v-html="title" />
    <span class="gallaryBlock__description" v-if="description" v-html="description" />
    <div class="gallaryBlock__sliderBlock">
      <RoomSlider
        :numberSlides="numberSlides"
        :fixNumberSlides="fixNumberSlides"
        :spaceBetween="spaceBetween"
        :slidesPerView="slidesPerView"
        :breakpoints="breakpoints"
      >
        <slot />
      </RoomSlider>
    </div>
  </div>
</template>

<script lang="ts" setup>
  const { title, description, numberSlides, fixNumberSlides, spaceBetween, slidesPerView, breakpoints } = defineProps({
    title: {
      type: String,
      default: '',
    },

    description: {
      type: String,
      default: '',
    },

    numberSlides: {
      type: Number,
      default: 3,
    },

    fixNumberSlides: {
      type: Number,
      default: 3,
    },

    spaceBetween: {
      type: Number,
      default: 20,
    },

    slidesPerView: {
      type: [String as () => 'auto', Number],
      default: 4,
    },

    breakpoints: {
      type: Object,
      default: {},
    },
  });
</script>

<style lang="scss" scoped>
  .gallaryBlock {
    &__title {
      color: $black;
      font-family: 'Playfair Display';
      font-size: 100px;
      font-weight: 500;
      line-height: 100%;
      text-transform: uppercase;
      margin: 0 0 30px 0;
      text-align: center;

      @media (max-width: 1550px) {
        font-size: 80px;
        margin: 0 0 20px 0;
        float: left;
        display: block;
        text-align: left;
        line-height: 120%;
      }

      @media (max-width: 1200px) {
        font-size: 62px;
        line-height: 100%;
      }

      @media (max-width: 1024px) {
        font-size: 45px;
      }

      @media (max-width: 768px) {
        font-size: 42px;
      }

      @media (max-width: 550px) {
        font-size: 30px;
      }
    }
    &__description {
      color: $gray;
      font-family: Manrope;
      font-size: 22px;
      font-style: normal;
      font-weight: 300;
      line-height: 110%;
      max-width: 580px;
      width: 100%;
      margin: 0 auto 10px auto;
      display: flex;
      flex-direction: column;

      @media (max-width: 1550px) {
        margin: 0;
      }

      @media (max-width: 768px) {
        font-size: 20px;
      }
    }
    &__sliderBlock {
      width: 100%;

      @media (max-width: 1200px) {
        margin: 40px 0 0 0;
      }
    }

    &:deep() {
      .swiper {
        overflow: visible !important;

        &-initialized {
          .gallaryBlock__sliderBlock__slide {
            margin: 0;
          }
        }
      }
    }
  }
</style>
