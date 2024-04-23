<template>
  <div class="aboutRoom">
    <h2 class="aboutRoom__title" v-if="data?.title" v-html="data.title" />
    <div class="aboutRoom__textBlock">
      <span class="aboutRoom__textBlock__text first" v-if="data?.firstText" v-html="data.firstText" />
      <span class="aboutRoom__textBlock__text second" v-if="data?.secondText" v-html="data.secondText" />
    </div>
  </div>
</template>

<script lang="ts" setup>
  import type { IaboutRoom } from '~/types/Room';

  const { data } = defineProps({
    data: {
      type: Object as () => IaboutRoom,
      default: () => {},
    },
  });
</script>

<style lang="scss" scoped>
  .aboutRoom {
    width: 100%;
    display: flex;
    flex-direction: column;
    &__title {
      color: $black;
      font-family: 'Playfair Display';
      font-size: 60px;
      font-style: normal;
      font-weight: 400;
      line-height: 110%;
      margin: 0 0 50px 0;
      text-align: center;

      &:deep() {
        span {
          color: $green;
        }
      }
    }

    &__textBlock {
      display: flex;
      align-self: center;
      gap: 20px;
      max-width: 445px;

      &__text {
        color: $black;
        font-family: 'Manrope';
        font-size: 22px;
        font-style: normal;
        font-weight: 400;
        line-height: 110%;
        max-width: 445px;
        min-width: 445px;
      }
    }
  }
</style>
