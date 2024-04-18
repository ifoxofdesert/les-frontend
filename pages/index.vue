<template>
  <div class="homePage">
    <MainBlock />
    <SliderAndText
      :title="slideTitle"
      :fixNumberSlides="2.5"
      :secondTitle="slideSecondTitle"
      :description="slideDescription"
      :numberSlides="slids.length"
    >
      <SwiperSlide
        v-for="(item, index) in slids"
        :key="index"
        class="homePage__slide"
        :class="{ expired: item.expired }"
      >
        <OffersCard :content="item" :index="index" />
      </SwiperSlide>
    </SliderAndText>
    <RoomsListBlock />
    <QuestionsBlock />
    <div class="videoBlock">
      <VideoBlock :video="video" />
    </div>
    <AfishaEventsBlock />
  </div>
</template>

<script setup lang="ts">
  const slideTitle = 'Специальные выгоды';
  const slideSecondTitle = 'для наших гостей';
  const slideDescription =
    'Насладитесь неповторимым комфортом и выгодными условиями проживания, созданными специально для вас.';
  const slids = [
    {
      title: 'Открытие Комплекса',
      img: '/_nuxt/assets/images/DSC_3524.jpg',
      markText: 'Дарим подарки',
      expired: false,
    },
    {
      title: 'ОТДЫХ С ДЕТЬМИ!',
      img: '/_nuxt/assets/images/DSC_3524-1.jpg',
      markText: 'Бесплатное место',
      expired: false,
    },
    {
      title: 'Скоро появится',
      img: '/_nuxt/assets/images/DSC_3224.jpeg',
      markText: '',
      expired: true,
    },
  ];
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
    }
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
