<template>
  <div id="app">
    <NuxtLayout id="layout">
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
  import type { Igeneral } from './types/General';

  const dataGeneral = useState<Igeneral>('dataGeneral', () => ({}));

  const { getGeneral } = useApi();

  if (!Object.keys(dataGeneral.value).length) {
    dataGeneral.value = (await getGeneral()) || {};
  }

  function noScroll() {
    (document.querySelector('html') as HTMLHtmlElement).style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';
  }

  function onScroll() {
    (document.querySelector('html') as HTMLHtmlElement).style.overflow = '';
    document.body.style.overflow = '';
  }

  useListen('scroll:no', () => noScroll());
  useListen('scroll:on', () => onScroll());
</script>
