<template>
  <div id="app">
    <NuxtLayout id="layout">
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
  function noScroll() {
    (document.querySelector('html') as HTMLHtmlElement).style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';
  }

  function onScroll() {
    (document.querySelector('html') as HTMLHtmlElement).style.overflow = '';
    document.body.style.overflow = '';
  }

  provide('noScroll', noScroll);
  provide('onScroll', onScroll);
</script>
