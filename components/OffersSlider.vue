<template>
  <div class="offersSlider">
    <SliderAndText
      :title="data.slideTitle"
      :fixNumberSlides="2.5"
      :secondTitle="data.slideSecondTitle"
      :description="data.slideDescription"
      :numberSlides="data.slids.length"
    >
      <SwiperSlide
        v-for="(item, index) in data.slids"
        :key="index"
        class="offersSlider__slide"
        :class="{ expired: item.expired }"
      >
        <OffersCard :content="item" :index="index" />
      </SwiperSlide>
    </SliderAndText>
  </div>
</template>

<script lang="ts" setup>
  import type { IoffersSlider } from '~/types/OffersSlider';

  const { data } = defineProps({
    data: {
      type: Object as () => IoffersSlider,
      default: () => {},
    },
  });
</script>

<style lang="scss" scoped>
  .offersSlider {
    &__slide {
      width: 415px;
      margin: 0 20px 0 0;
      display: flex;

      &.expired {
        opacity: 0.5;
      }
    }
  }
</style>
