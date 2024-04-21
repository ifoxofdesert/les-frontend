<template>
  <div class="welcomeBlock">
    <h2 class="welcomeBlock__title" v-if="data?.title || data?.secondTitle">
      <span class="welcomeBlock__title__left" v-if="data?.title">{{ data.title }}</span>
      <span class="welcomeBlock__title__right" v-if="data?.secondTitle">{{ data.secondTitle }}</span>
    </h2>

    <div class="welcomeBlock__textBlock">
      <span class="welcomeBlock__textBlock__initialLetter" v-if="data?.initialLetter">{{ data.initialLetter }}</span>
      <span class="welcomeBlock__textBlock__text" v-if="data?.text">{{ data.text }}</span>
      <div class="welcomeBlock__textBlock__markTextBlock" v-if="data?.text">
        <span class="welcomeBlock__textBlock__markTextBlock__markText" v-if="data.markText">{{ data.markText }}</span>
        <div class="welcomeBlock__textBlock__markTextBlock__subText" v-if="data?.subText">{{ data.subText }}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import type { IroomWelcome } from '~/types/Room';

  const { data } = defineProps({
    data: {
      type: Object as () => IroomWelcome,
      default: () => {},
    },
  });
</script>

<style lang="scss" scoped></style>
