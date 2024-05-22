<template>
  <div class="welcomeBlock">
    <h2 class="welcomeBlock__title" v-if="data?.title || data?.secondTitle">
      <span class="welcomeBlock__title__left" v-if="data?.title" v-html="data.title" />
      <span class="welcomeBlock__title__right" v-if="data?.secondTitle" v-html="data.secondTitle" />
    </h2>

    <div class="welcomeBlock__textBlock">
      <span class="welcomeBlock__textBlock__initialLetter" v-if="data?.initialLetter">{{ data.initialLetter }}</span>
      <span class="welcomeBlock__textBlock__text" v-if="data?.text" v-html="data.text" />
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

<style lang="scss" scoped>
  .welcomeBlock {
    &__title {
      font-family: 'Playfair Display';
      font-size: 153px;
      font-weight: 400;
      line-height: 100%;
      text-transform: uppercase;
      color: $black;
      margin: 0 0 120px 0;

      &__left {
        text-align: left;
        display: block;
        margin: 0 0 10px 0;

        &:deep() {
          span {
            color: $green;
          }
        }

        @media (max-width: 1200px) {
          display: contents;
        }
      }

      &__right {
        text-align: right;
        display: block;

        &:deep() {
          span {
            color: $green;
          }
        }

        @media (max-width: 1200px) {
          text-align: left;
          display: contents;
        }
      }
      &:deep() {
        br {
          @media (max-width: 1200px) {
            display: none;
          }
        }
      }

      @media (max-width: 1440px) {
        font-size: 120px;
        margin: 0 0 90px 0;
      }

      @media (max-width: 1200px) {
        font-size: 90px;
      }

      @media (max-width: 1024px) {
        font-size: 60px;
        margin: 0 0 45px 0;
      }

      @media (max-width: 768px) {
        font-size: 45px;
      }

      @media (max-width: 550px) {
        font-size: 30px;
        margin: 0 0 30px 0;
      }
    }

    &__textBlock {
      margin: 0 auto;
      width: 100%;
      max-width: 500px;

      &__initialLetter {
        float: left;
        font-family: 'Playfair Display';
        font-size: 90px;
        font-weight: 400;
        line-height: 80%;
        color: $green;

        @media (max-width: 768px) {
          font-size: 62px;
        }

        @media (max-width: 550px) {
          font-size: 42px;
        }
      }

      &__text {
        font-family: Manrope;
        font-size: 23px;
        font-weight: 400;
        line-height: 110%;
        margin: 0 0 30px 0;
        display: block;
        color: $black;

        @media (max-width: 768px) {
          font-size: 20px;
        }

        @media (max-width: 550px) {
          font-size: 18px;
          margin: 0 0 15px 0;
        }
      }

      &__markTextBlock {
        display: flex;
        flex-direction: column;
        &__markText {
          font-family: Manrope;
          font-size: 20px;
          font-weight: 300;
          line-height: 110%;
          color: $gray;

          @media (max-width: 550px) {
            font-size: 16px;
          }
        }

        &__subText {
          font-family: 'Playfair Display';
          font-style: italic;
          font-size: 25px;
          font-weight: 400;
          line-height: 110%;
          color: $black;

          @media (max-width: 768px) {
            font-size: 22px;
          }
        }
      }

      &:deep() {
        br {
          @media (max-width: 1200px) {
            display: none;
          }
        }
      }

      @media (max-width: 1200px) {
        margin: 0;
        max-width: 100%;
      }
    }
  }
</style>
