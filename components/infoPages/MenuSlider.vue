<template>
  <div class="menuSlider">
    <Swiper slidesPerView="auto" v-bind="options" class="menuSlider__sliderBlock">
      <SwiperSlide class="menuSlider__sliderBlock__slide" v-for="btn in buttons">
        <Button type="internal" mod="white br" :url="btn.url" class="menuSlider__sliderBlock__slide__button">
          {{ btn.title }}
        </Button>
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script lang="ts" setup>
  import type { IpageMenu } from '~/types/InfoPages';

  const options = {
    spaceBetween: '25',

    breakpoints: {
      0: {
        spaceBetween: 15,
      },

      551: {
        spaceBetween: 25,
      },
    },
  };

  const { buttons } = defineProps({
    buttons: {
      type: Array<IpageMenu>,
      default: [],
    },
  });
</script>

<style lang="scss" scoped>
  .menuSlider {
    width: 100%;

    &__sliderBlock {
      &__slide {
        margin: 0 25px 0 0;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        width: auto;
        &__button {
          font-size: 18px;
          padding: 14px 40px;

          @media (max-width: 550px) {
            font-size: 16px;
          }
        }

        @media (max-width: 550px) {
          margin: 0 15px 0 0;
        }
      }
    }

    &:deep() {
      .swiper {
        overflow: visible !important;

        &-initialized {
          .menuSlider__sliderBlock__slide {
            margin: 0;
          }
        }
      }
    }
  }
</style>
