<template>
  <div class="homePage">
    <MainBlock />
    <OffersSlider />
    <RoomsListBlock />
    <QuestionsBlock />
    <div class="videoBlock">
      <VideoBlock />
    </div>
    <AfishaEventsBlock />
  </div>
</template>

<script setup lang="ts">
  import MainBlock from '~/components/MainBlock.vue';
  import OffersSlider from '~/components/OffersSlider.vue';
  import RoomsListBlock from '~/components/RoomsListBlock.vue';
  import QuestionsBlock from '~/components/QuestionsBlock.vue';
  import VideoBlock from '~/components/VideoBlock.vue';
  import AfishaEventsBlock from '~/components/AfishaEventsBlock.vue';
</script>

<style lang="scss" scoped>
  .homePage {
    .videoBlock {
      margin: -290px 0 100px 0;
    }
  }
</style>
