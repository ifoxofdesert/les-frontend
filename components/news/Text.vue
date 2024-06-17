<template>
  <div class="text" v-if="text" v-html="text" />
  <div class="text" v-else>
    <slot />
  </div>
</template>

<script setup lang="ts">
  const { text } = defineProps({
    text: {
      type: String,
      default: '',
    },
  });
</script>

<style lang="scss" scoped>
  .text {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: $black;
    font-family: Manrope;

    &:deep() {
      h1,
      h2,
      h3,
      span,
      strong,
      b,
      ul,
      ol,
      p {
        max-width: 755px;
        width: 100%;
      }

      h1,
      h2,
      h3 {
        font-family: 'Playfair Display';
        font-size: 50px;
        font-weight: 500;
        line-height: 120%;
        margin: 0 0 30px 0;

        @media (max-width: 768px) {
          font-size: 42px;
          margin: 0 0 25px 0;
        }

        @media (max-width: 550px) {
          font-size: 30px;
          margin: 0 0 22px 0;
        }
      }

      span,
      strong,
      b,
      ul,
      ol,
      p {
        font-family: Manrope;
        font-size: 22px;
        font-weight: 400;
        line-height: 120%;

        @media (max-width: 550px) {
          font-size: 16px;
        }
      }

      ul {
        display: flex;
        flex-direction: column;
        gap: 11px;

        li {
          &::marker {
            color: $lightGreen;
          }
        }
      }

      ol {
        display: flex;
        flex-direction: column;
        gap: 13px;
        list-style: decimal-leading-zero;
        padding: 0;
        list-style-position: inside;

        li {
          &::marker {
            color: $lightGreen;
          }
        }
      }

      div {
        margin: 0 0 30px 0;

        @media (max-width: 768px) {
          margin: 0 0 20px 0;
        }
      }

      img {
        margin: 0 0 20px 0;
        object-fit: cover;
        height: auto;
      }
    }

    &.infoPage {
      align-items: flex-start;
      &:deep() {
        h1,
        h2,
        h3,
        span,
        strong,
        b,
        ul,
        ol,
        p {
          max-width: 100%;
        }

        h1,
        h2,
        h3 {
          font-size: 30px;
          margin: 0 0 25px 0;

          @media (max-width: 768px) {
            font-size: 26px;
          }

          @media (max-width: 550px) {
            font-size: 22px;
            margin: 0 0 22px 0;
          }
        }

        span,
        strong,
        b,
        ul,
        ol,
        p {
          span {
            color: $gray;
          }
        }

        ul {
          gap: 15px;

          li {
            &::marker {
              color: $gray;
            }
          }
        }

        ol {
          gap: 15px;

          li {
            &::marker {
              color: $gray;
            }
          }
        }

        div {
          margin: 0 0 50px 0;
          @media (max-width: 768px) {
            margin: 0 0 20px 0;
          }
        }

        .gap-10 {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .mb-15 {
          margin: 0 0 15px 0;
        }

        .mb-0 {
          margin: 0 0 15px 0;
        }
      }
    }
  }
</style>
