<template>
  <NuxtLink :to="`/events/page-${content.slug}`" v-if="content.title" class="offersCard">
    <div class="offersCard__imageBlock">
      <span class="offersCard__imageBlock__number">
        {{ formatingNumber(index + 1) }}
      </span>
      <img
        :src="useImage(content?.img?.src)"
        :alt="content?.img?.alt || content.title"
        class="offersCard__imageBlock__image"
      />
    </div>
    <div class="offersCard__infoBlock">
      <span class="offersCard__infoBlock__markText">
        {{ content.markText }}
      </span>
      <span class="offersCard__infoBlock__title">
        {{ content.title }}
      </span>
    </div>
  </NuxtLink>
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
    text-decoration: none;
    &__imageBlock {
      display: flex;
      justify-content: space-between;
      margin: 0 0 90px 0;
      &__number {
        font-family: Manrope;
        font-size: 20px;
        font-weight: 500;
        line-height: 110%;
        color: $black;
      }
      &__image {
        width: 200px;
        height: 200px;
        object-fit: cover;
      }

      @media (max-width: 550px) {
        margin: 0 0 10px 0;
      }
    }
    &__infoBlock {
      display: flex;
      flex-direction: column;
      margin: auto 0 0 0;

      &__markText {
        font-family: Manrope;
        font-size: 20px;
        font-weight: 500;
        line-height: 110%;
        color: $green;
        margin: 0 0 5px 0;

        @media (max-width: 550px) {
          font-size: 18px;
        }
      }
      &__title {
        font-family: Playfair Display;
        font-size: 35px;
        font-weight: 500;
        line-height: 110%;
        text-transform: uppercase;
        color: $black;

        @media (max-width: 550px) {
          font-size: 25px;
        }
      }
    }

    @media (max-width: 550px) {
      width: 315px;
      height: 325px;
      padding: 15px;
    }
  }
</style>
