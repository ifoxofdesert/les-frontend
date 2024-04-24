<template>
  <div :class="['icon', mod ? `icon--${mod}` : '']" v-html="svgContent" />
</template>

<script setup>
  const { name, mod } = defineProps({
    name: {
      type: String,
      required: true,
      default: '',
    },
    mod: {
      type: String,
      validator(value) {
        return ['right'].includes(value);
      },
    },
  });

  const config = useRuntimeConfig();

  const iconCache = useState('iconCache', () => ({}));

  const nameRef = ref(name);

  async function load() {
    if (!iconCache.value[name]) {
      try {
        const icon = await import(`~/assets/images/icons/${name}.svg?raw`);
        iconCache.value[name] = icon.default;
      } catch (e) {
        iconCache.value[name] = '';
      }
    }
  }

  await load();

  watch(nameRef, async () => {
    await load();
  });

  const svgContent = computed(() => {
    return iconCache.value[name] || '';
  });
</script>

<style scoped lang="scss">
  .icon {
    display: flex;
  }
</style>
