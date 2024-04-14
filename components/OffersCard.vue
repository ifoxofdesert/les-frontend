<template>
  <div v-if="content.title" class="offersCard">
    <div class="offersCard__imageBlock">
      <span class="offersCard__imageBlock__number">
        {{ formatingNumber(index + 1) }}
      </span>
      <img :src="content.img" :alt="content.title" class="offersCard__imageBlock__image" />
    </div>
    <div class="offersCard__infoBlock">
      <span class="offersCard__infoBlock__markText">
        {{ content.markText }}
      </span>
      <span class="offersCard__infoBlock__title">
        {{ content.title }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
  import type { IoffersSlide } from '~/types/OffersSlider';

  const { content, index } = defineProps({
    content: {
      type: Object as () => IoffersSlide,
      default: {},
    },
    index: {
      type: Number,
      default: 1,
    },
  });

  const { formatingNumber } = useFormating();
</script>

<style lang="scss" scoped>
  .offersCard {
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
</style>
