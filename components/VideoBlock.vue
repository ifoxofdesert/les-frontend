<template>
  <div class="videoBlock">
    <Container>
      <button v-if="!plays" class="videoBlock__playButton" @click="playOrPause()">
        <IconComponent name="play" />
      </button>
      <video
        @click="playOrPause()"
        class="videoBlock__video"
        ref="videoElement"
        preload="metadata"
        :poster="video.poster"
      >
        <source v-for="item in video.sources" :src="item.src" :type="item.type" />
      </video>
    </Container>
  </div>
</template>

<script setup lang="ts">
  const video = {
    poster: '/_nuxt/assets/images/Rectangle 1.jpeg',
    sources: [
      {
        src: '/_nuxt/assets/videos/video_2024-03-31_17-52-39.mp4',
        type: 'video/webm',
      },
    ],
  };

  const videoElement = ref<HTMLVideoElement | null>(null);
  const plays = ref<boolean>(false);

  onMounted(() => {
    console.log(videoElement.value);
  });

  function playOrPause() {
    if (videoElement.value) {
      if (!plays.value) {
        videoElement.value.play();
        plays.value = true;
      } else {
        videoElement.value.pause();
        plays.value = false;
      }
    }
  }
</script>

<style lang="scss" scoped>
  .videoBlock {
    width: 100%;
    position: relative;
    cursor: pointer;
    margin: 0 0 100px 0;
    &__playButton {
      position: absolute;
      top: 50%;
      background-color: $whitesmoke-2;
      opacity: 0.9;
      width: 100px;
      height: 100px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      border-radius: 360px;
      z-index: 1;
    }

    &__video {
      width: 100%;
      max-height: 900px;
    }
  }
</style>
