<template>
  <img class="fullImage" :src="useImage(image.src)" :alt="image.alt" />
</template>

<script setup lang="ts">
  import type { Iimage } from '~/types/General';

  const { image } = defineProps({
    image: {
      type: Object as () => Iimage,
      default: {},
    },
  });
</script>

<style lang="scss" scoped>
  .fullImage {
    width: 100%;
    object-fit: cover;
    max-height: 800px;
    height: 100%;
    margin: 0 0 50px 0;
  }
</style>
