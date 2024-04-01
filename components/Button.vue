<template>
  <NuxtLink :to="src" v-if="type === 'internal'" class="button">
    <slot />
  </NuxtLink>
  <a :href="src" :target="target" v-else-if="type === 'external'" class="button">
    <slot />
  </a>

  <button v-else-if="type === 'button'" type="button" class="button">
    <slot />
  </button>
</template>

<script setup lang="ts">
  const { mod, src, target, type } = defineProps({
    mod: {
      type: String,
      default: '',
    },

    src: {
      type: String,
      default: '',
    },

    target: {
      type: String,
      default: '',
    },

    type: {
      type: String,
      default: 'internal',
    },
  });
</script>
