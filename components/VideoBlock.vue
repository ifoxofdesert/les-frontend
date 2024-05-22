<template>
  <div class="videoBlock">
    <Container>
      <button v-if="!plays" class="videoBlock__playButton" @click="open()">
        <IconComponent name="play" />
      </button>
      <img :src="video?.poster ? useImage(video.poster) : ''" class="videoBlock__preview" />
      <div class="videoBlock__popup" v-if="isOpen" @click="checkClick">
        <IconComponent name="close" class="videoBlock__popup__close" @click="close()" />

        <video
          class="videoBlock__popup__video"
          preload="metadata"
          autoplay
          controls
          :poster="video?.poster ? useImage(video.poster) : ''"
        >
          <source
            v-if="video?.sources?.length"
            v-for="item in video.sources"
            :src="useImage(item.src)"
            :type="item.type"
          />
        </video>
      </div>
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

  const isOpen = ref(false);
  const plays = ref(false);

  useListen('popup:close', () => close());

  function open() {
    useEvent('popup:open');
    useEvent('scroll:no');
    isOpen.value = true;
  }

  function close() {
    if (isOpen.value) {
      useEvent('scroll:on');
      isOpen.value = false;
    }
  }

  function checkClick(e: Event) {
    const target = e.target as HTMLButtonElement;

    if (!target.closest('.videoBlock__popup__video')) {
      close();
    }
  }
</script>

<style lang="scss" scoped>
  .videoBlock {
    width: 100%;
    position: relative;
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
      cursor: pointer;

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

    &__preview {
      width: 100%;
      max-height: 900px;
      height: 100vh;
      object-fit: cover;

      @media (max-width: 1024px) {
        max-height: 600px;
      }

      @media (max-width: 768px) {
        max-height: 400px;
      }
    }

    &__popup {
      position: fixed;
      width: 100%;
      height: 100vh;
      top: 0;
      left: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      z-index: 6;

      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        backdrop-filter: blur(20px);
        background: rgba(28, 28, 28, 0.7);
      }

      &__close {
        z-index: 2;
        cursor: pointer;
        position: absolute;
        top: 20px;
        right: 20px;
        &:deep() {
          path {
            stroke: $whitesmoke;
          }
        }

        @media (max-width: 1024px) {
          display: none;
        }
      }

      &__video {
        width: 100%;
        height: 100%;
        z-index: 1;
      }

      @media (max-width: 1024px) {
        z-index: 3;
      }
    }
  }
</style>
