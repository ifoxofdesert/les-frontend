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

  const iconCache = useState('iconCache', () => ({}));

  const nameRef = ref(name);

  async function load() {
    if (!iconCache.value[name]) {
      try {
        const { data: iconData } = await useFetch(`http://localhost:3023/_nuxt/assets/images/icons/${name}.svg`, {
          responseType: 'json',
          cache: 'no-cache',
          method: 'GET',
        });

        iconCache.value[name] = iconData.value;
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
