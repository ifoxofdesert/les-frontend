<template>
  <div class="pageNews">
    <Title class="pageNews__title" v-if="data.title">{{ data.title }}</Title>
    <FullImage :image="data.image" />
    <IntroText :text="data.introText" :markText="data.markText" />
    <Text v-if="data.text" :text="data.text" />
    <SliderAndText
      v-if="data.slideItem?.length"
      :numberSlides="data.slideItem?.length"
      :title="slideTitle"
      :secondTitle="slideSecondTitle"
      :description="slideDescription"
    >
      <SwiperSlide v-for="(item, index) in data.slideItem" :key="index" class="pageNews__slide">
        <CardEvent :card="item" />
      </SwiperSlide>
    </SliderAndText>
  </div>
</template>

<script setup lang="ts">
  import Title from './Title.vue';
  import type { Inews } from '~/types/News';

  const slideTitle = 'Посмотрите Другие новости';
  const slideSecondTitle = 'и мероприятия';
  const slideDescription =
    'Погрузитесь в мир разнообразия и откройте для себя уникальные возможности для получения захватывающих впечатлений.';

  const { data } = defineProps({
    data: {
      type: Object as () => Inews,
      default: {},
    },
  });
</script>

<style lang="scss" scoped>
  .pageNews {
    &__slide {
      width: 445px;
      margin: 0 20px 0 0;
      display: flex;
    }
  }
</style>
