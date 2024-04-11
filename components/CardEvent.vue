<template>
  <NuxtLink :to="card.url" class="cardEvent">
    <img v-if="card.image?.src" :src="card.image.src" :alt="card.image.alt" class="cardEvent__image" />

    <div class="cardEvent__infoBlock">
      <div class="cardEvent__infoBlock__dateBlock">
        <span class="cardEvent__infoBlock__dateBlock__date" v-if="card?.date">{{ getDate }}</span>
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
  import type { Icard } from '~/types/CardEvent.d.ts';
  const { card } = defineProps({
    card: {
      type: Object as () => Icard,
      default: () => ({}),
    },
  });

  const getDate = computed(() => {
    if (card.date) {
      const date = new Date(Date.parse(card.date)).toLocaleString('ru', {
        timeZone: 'Europe/Moscow',
        month: 'long',
        day: 'numeric',
      });

      const time = /:/.test(card.date)
        ? `в ${new Date(Date.parse(card.date)).toLocaleString('ru', {
            timeZone: 'Europe/Moscow',
            hour: 'numeric',
            minute: 'numeric',
          })}`
        : '';

      return `${date} ${time}`;
    } else {
      return '';
    }
  });
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
    &__image {
      width: 100%;
      height: 300px;
      object-fit: cover;
      margin: 0 0 15px 0;
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
        }
      }
    }
  }
</style>
