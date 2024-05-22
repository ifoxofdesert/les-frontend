<template>
  <NuxtLink :to="`/events/page-${card.slug}`" class="cardEvent">
    <img v-if="card.image?.src" :src="useImage(card.image.src)" :alt="card.image.alt" class="cardEvent__image" />

    <div class="cardEvent__infoBlock">
      <div class="cardEvent__infoBlock__dateBlock">
        <span class="cardEvent__infoBlock__dateBlock__date" v-if="card?.date">{{ formatingDateTime(card.date) }}</span>
        <span class="cardEvent__infoBlock__dateBlock__position" v-if="card?.position">{{ card.position }}</span>
      </div>

      <div class="cardEvent__infoBlock__textBlock">
        <h2 class="cardEvent__infoBlock__textBlock__title" v-if="card?.title">{{ card.title }}</h2>
        <p class="cardEvent__infoBlock__textBlock__description" v-if="card?.description">{{ card.description }}</p>
      </div>
    </div>
  </NuxtLink>
</template>

<script lang="ts" setup>
  import type { Icard } from '~/types/News.d.ts';
  const { card } = defineProps({
    card: {
      type: Object as () => Icard,
      default: () => ({}),
    },
  });

  const { formatingDateTime } = useFormating();
</script>

<style lang="scss" scoped>
  .cardEvent {
    display: flex;
    flex-direction: column;
    max-width: 440px;
    flex: 24%;
    padding: 20px 25px 25px 25px;
    box-sizing: border-box;
    background-color: $milk;
    text-decoration: none;
    &__image {
      width: 100%;
      min-height: 300px;
      max-height: 300px;
      object-fit: cover;
      margin: 0 0 15px 0;

      @media (max-width: 768px) {
        min-height: 190px;
        max-height: 190px;
      }

      @media (max-width: 550px) {
        min-height: 155px;
        max-height: 155px;
        margin: 0 0 10px 0;
      }
    }

    &__infoBlock {
      display: flex;
      flex-direction: column;
      width: 100%;
      gap: 54px;
      height: 100%;
      &__dateBlock {
        display: flex;
        height: 40px;
        &__date {
          font-family: Manrope;
          font-size: 18px;
          font-weight: 400;
          line-height: 110%;
          color: $green;

          @media (max-width: 1024px) {
            font-size: 14px;
          }
        }

        &__position {
          font-family: Manrope;
          font-size: 18px;
          font-weight: 400;
          line-height: 110%;
          color: $gray;
          max-width: 183px;
          margin: 0 0 0 auto;
          text-align: right;

          @media (max-width: 1024px) {
            font-size: 14px;
            max-width: 150px;
          }
        }
      }

      &__textBlock {
        display: flex;
        flex-direction: column;
        width: 100%;
        gap: 15px;
        margin: auto 0 0 0;
        &__title {
          font-family: Manrope;
          font-size: 30px;
          font-weight: 400;
          line-height: 110%;
          color: $black;

          @media (max-width: 1024px) {
            font-size: 22px;
          }
        }

        &__description {
          font-family: Manrope;
          font-size: 18px;
          font-weight: 400;
          line-height: 120%;
          color: $gray;
          overflow: hidden;
          display: -webkit-box;
          -webkit-line-clamp: 4;
          line-clamp: 4;
          -webkit-box-orient: vertical;

          @media (max-width: 1024px) {
            font-size: 16px;
          }
        }
      }

      @media (max-width: 1024px) {
        gap: 10px;
      }
    }

    @media (max-width: 1024px) {
      padding: 15px;
      max-width: 300px;
    }
  }
</style>
