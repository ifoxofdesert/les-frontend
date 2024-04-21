<template>
  <div class="gallaryBlock">
    <h2 class="gallaryBlock__title" v-if="title">{{ title }}</h2>
    <span class="gallaryBlock__description" v-if="description">{{ description }}</span>
    <div class="gallaryBlock__sliderBlock">
      <RoomSlider>
        <SwiperSlide v-for="(item, index) in data" :key="index" class="gallaryBlock__sliderBlock__slide">
          <img :src="item.src" :alt="item.src" class="gallaryBlock__sliderBlock__slide__image" />
        </SwiperSlide>
      </RoomSlider>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import type { Iimage } from '~/types/General';

  const { title, description, data } = defineProps({
    title: {
      type: String,
      default: '',
    },

    description: {
      type: String,
      default: '',
    },

    data: {
      type: Array as () => Iimage[],
      default: () => [],
    },
  });
</script>

<style lang="scss" scoped></style>
