<template>
  <NuxtLink :to="src" v-if="type === 'internal'" class="button" :class="`button__${mod || ''}`">
    <slot />
  </NuxtLink>
  <a :href="src" :target="target" v-else-if="type === 'external'" class="button" :class="`button__${mod || ''}`">
    <slot />
  </a>

  <button v-else-if="type === 'button'" type="button" class="button" :class="`button__${mod || ''}`">
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

<style lang="scss" scoped>
  .button {
    padding: 20px 40px 20px 40px;
    border-radius: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    outline: none;
    border: none;
    font-size: 25px;
    font-weight: 400;
    line-height: 110%;
    font-family: 'Manrope';
    &__white {
      background-color: $whitesmoke;
    }
  }
</style>
