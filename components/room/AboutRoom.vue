<template>
  <div class="aboutRoom">
    <h2 class="aboutRoom__title" v-if="data?.title">{{ data.title }}</h2>
    <div class="aboutRoom__textBlock">
      <span class="aboutRoom__textBlock__text first" v-if="data?.firstText">{{ data.firstText }}</span>
      <span class="aboutRoom__textBlock__text second" v-if="data?.secondText">{{ data.secondText }}</span>
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

<style lang="scss" scoped></style>
