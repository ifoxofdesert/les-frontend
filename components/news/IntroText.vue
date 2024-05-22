<template>
  <div class="introText" v-if="markText || text">
    <div class="introText__markBlock">
      <span class="introText__markBlock__text" v-if="markText" v-html="markText" />
    </div>
    <div class="introText__textBlock">
      <span class="introText__textBlock__text" v-if="text" v-html="text" />
    </div>
  </div>
</template>

<script setup lang="ts">
  const { markText, text } = defineProps({
    markText: {
      type: String,
      default: '',
    },
    text: {
      type: String,
      default: '',
    },
  });
</script>

<style lang="scss" scoped>
  .introText {
    width: 100%;
    display: flex;
    position: relative;
    margin: 0 0 50px 0;
    &__markBlock {
      display: flex;
      flex-direction: column;
      position: absolute;
      top: 0;
      &__text {
        font-family: Manrope;
        font-size: 20px;
        font-weight: 300;
        line-height: 110%;
        color: $gray;

        @media (max-width: 1300px) {
          max-width: 755px;
          width: 100%;
          margin: 0 auto;
        }

        @media (max-width: 768px) {
          font-size: 18px;
        }

        @media (max-width: 550px) {
          font-size: 14px;
        }
      }

      @media (max-width: 1300px) {
        position: static;
      }
    }

    &__textBlock {
      max-width: 755px;
      width: 100%;
      margin: 0 auto;
      &__text {
        font-family: 'Playfair Display';
        font-size: 30px;
        font-weight: 400;
        line-height: 120%;
        color: $black;

        @media (max-width: 768px) {
          font-size: 24px;
        }

        @media (max-width: 550px) {
          font-size: 22px;
        }
      }
    }

    @media (max-width: 1300px) {
      flex-direction: column;
      gap: 10px;
    }
  }
</style>
