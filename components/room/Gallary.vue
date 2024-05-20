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
      >
        <slot />
      </RoomSlider>
    </div>
  </div>
</template>

<script lang="ts" setup>
  const { title, description, numberSlides, fixNumberSlides, spaceBetween, slidesPerView } = defineProps({
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
    }
    &__sliderBlock {
      width: 100%;
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
