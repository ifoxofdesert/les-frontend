<template>
  <div class="videoBlock">
    <button class="videoBlock__playButton">
      <IconComponent name="play" />
    </button>
    <video
      class="videoBlock__video"
      autoplay="false"
      loop="false"
      muted="false"
      playsinline
      preload="metadata"
      :poster="video.poster"
    >
      <source v-for="item in video.sources" :src="item.src" :type="item.type" />
    </video>
  </div>
</template>

<script setup lang="ts">
  import IconComponent from './IconComponent.vue';

  const video = {
    poster: 'assets/images/Rectangle 1.jpeg',
    sources: [
      {
        src: 'assets/videos/video_2024-03-31_17-52-39.mp4',
        type: 'video/webm',
      },
    ],
  };
</script>
