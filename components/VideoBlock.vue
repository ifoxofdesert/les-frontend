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
        :poster="video?.poster ? useImage(video.poster) : ''"
      >
        <source v-for="item in video.sources" :src="useImage(item.src)" :type="item.type" />
      </video>
    </Container>
  </div>
</template>

<script setup lang="ts">
  import type { Ivideo } from '~/types/General';

  const { video } = defineProps({
    video: {
      type: Object as () => Ivideo,
      default: () => {},
    },
  });

  const videoElement = ref<HTMLVideoElement | null>(null);
  const plays = ref<boolean>(false);

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
    margin: 0;
    &__playButton {
      position: absolute;
      top: 50%;
      transform: translate(0, -50%);
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

      @media (max-width: 768px) {
        width: 70px;
        height: 70px;

        &:deep() {
          svg {
            height: 28px;
          }
        }
      }

      @media (max-width: 550px) {
        width: 50px;
        height: 50px;

        &:deep() {
          svg {
            height: 20px;
          }
        }
      }
    }

    &__video {
      object-fit: cover;
      width: 100%;
      max-height: 900px;
    }
  }
</style>
