<template>
  <div class="markBlock">
    <span class="markBlock__title first" v-if="firstTitle">{{ firstTitle }}</span>
    <span class="markBlock__title second" v-if="secondTitle">{{ secondTitle }}</span>
    <span class="markBlock__title third" v-if="thirdTitle">{{ thirdTitle }}</span>
  </div>
</template>

<script lang="ts" setup>
  const { firstTitle, secondTitle, thirdTitle } = defineProps({
    firstTitle: {
      type: String,
      default: '',
    },
    secondTitle: {
      type: String,
      default: '',
    },
    thirdTitle: {
      type: String,
      default: '',
    },
  });
</script>

<style lang="scss" scoped>
  .markBlock {
    width: 100%;
    display: flex;
    align-items: center;

    &__title {
      color: $gray;
      font-family: 'Playfair Display';
      font-size: 25px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      &.first {
      }
      &.second {
        margin: 0 0 0 528px;
      }
      &.third {
        margin: 0 0 0 auto;
      }
    }
  }
</style>
