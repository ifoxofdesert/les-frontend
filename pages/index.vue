<template>
  <div class="homePage">
    <MainBlock />
    <OffersSlider v-if="content?.offersSlider?.slids?.length" :data="content.offersSlider" />
    <RoomsListBlock />
    <QuestionsBlock />
    <div class="videoBlock">
      <VideoBlock :video="video" />
    </div>
    <AfishaEventsBlock />
  </div>
</template>

<script setup lang="ts">
  const { getHome } = useApi();

  const content = ref(await getHome());

  const video = {
    poster: '/_nuxt/assets/images/Rectangle 1.jpeg',
    sources: [
      {
        src: '/_nuxt/assets/videos/video_2024-03-31_17-52-39.mp4',
        type: 'video/webm',
      },
    ],
  };
</script>

<style lang="scss" scoped>
  .homePage {
    .videoBlock {
      margin: -290px 0 100px 0;
    }
  }
</style>
