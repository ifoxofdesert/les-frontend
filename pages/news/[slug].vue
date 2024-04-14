<template>
  <div class="news">
    <Container>
      <ContainerBlock>
        <PageNews v-if="content" :data="content" />
      </ContainerBlock>
    </Container>
  </div>
</template>

<script setup>
  const { $searchNews } = useNuxtApp();

  const content = ref(await $searchNews());

  useHead({
    title: content.value?.pagetitle || '',
    meta: [
      {
        property: 'og:description',
        content: content.value?.pageDescription || '',
      },
      {
        name: 'description',
        content: content.value?.pageDescription || '',
      },
    ],
  });
</script>

<style lang="scss" scoped>
  .news {
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 200px 0 100px 0;

    &__container {
      width: 100%;
      display: flex;
      flex-direction: column;
    }
  }
</style>
