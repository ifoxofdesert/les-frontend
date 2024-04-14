<template>
  <div class="text" v-if="text" v-html="text" />
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
    margin: 0 0 150px 0;

    &:deep() {
      h1,
      h2,
      h3,
      span,
      strong,
      b,
      ul,
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
      }

      span,
      strong,
      b,
      ul,
      p {
        font-family: Manrope;
        font-size: 22px;
        font-weight: 400;
        line-height: 120%;
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

      div {
        margin: 0 0 30px 0;
      }

      img {
        margin: 0 0 20px 0;
        object-fit: cover;
      }
    }
  }
</style>
