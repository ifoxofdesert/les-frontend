<template>
  <div class="news">
    <NewsPageNews v-if="content" :data="content" />
  </div>
</template>

<script setup>
  const { searchNews } = useApi();

  const route = useRoute();

  const content = ref(
    await searchNews({
      filters: {
        slug: { $eq: route.params.slug },
      },
      populate: 'deep',
    })
  );

  if (!content?.value?.slug) {
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

    @media (max-width: 1200px) {
      padding: 200px 0 0px 0;
    }

    @media (max-width: 768px) {
      padding: 130px 0 0px 0;
    }

    @media (max-width: 550px) {
      padding: 80px 0 0px 0;
    }
  }
</style>
