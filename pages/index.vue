<template>
  <div class="homePage">
    <MainBlock />
    <OffersSlider v-if="content?.offersSlider?.slids?.length" :data="content.offersSlider" />
    <RoomsListBlock :rooms="rooms" />
    <QuestionsBlock />
    <div class="videoBlock">
      <VideoBlock :video="video" />
    </div>
    <AfishaEventsBlock :content="news.slice(0, 4)" />
  </div>
</template>

<script setup lang="ts">
  const { getHome, getNews, getRooms } = useApi();

  const content = ref(await getHome());

  const news = ref(await getNews());

  const rooms = ref(await getRooms());

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

      @media (max-width: 768px) {
        margin: 0px 0 100px 0;
      }
    }
  }
</style>
