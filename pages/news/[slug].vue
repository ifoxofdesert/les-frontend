<template>
  <div class="news">
    <Container>
      <ContainerBlock>
        <NewsPageNews v-if="content" :data="content" />
      </ContainerBlock>
    </Container>
  </div>
</template>

<script setup>
  const { searchNews } = useApi();

  const route = useRoute();

  const content = ref(await searchNews(route.params.slug));

  if (!content.value) {
    showError({ statusCode: 404, fatal: true });
  }

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
  }
</style>
