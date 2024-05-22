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
        @media (max-width: 1200px) {
          margin: 0;
        }
      }
      &.third {
        margin: 0 0 0 auto;
        @media (max-width: 1200px) {
          margin: 0;
        }
      }

      @media (max-width: 768px) {
        font-size: 22px;
      }

      @media (max-width: 550px) {
        font-size: 16px;
      }
    }

    @media (max-width: 1200px) {
      justify-content: space-between;
    }
  }
</style>
