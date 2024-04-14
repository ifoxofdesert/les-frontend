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
      <VideoBlock />
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
      img: '/_nuxt/assets/images/DSC_3524.jpeg',
      markText: 'Дарим подарки',
      expired: false,
    },
    {
      title: 'ОТДЫХ С ДЕТЬМИ!',
      img: '/_nuxt/assets/images/DSC_3527.jpeg',
      markText: 'Бесплатное место',
      expired: false,
    },
    {
      title: 'Ура! Открытие!',
      img: '/_nuxt/assets/images/DSC_3224.jpeg',
      markText: 'Сертификат',
      expired: true,
    },
    {
      title: 'Ура! Открытие!',
      img: '/_nuxt/assets/images/DSC_3224.jpeg',
      markText: 'Сертификат',
      expired: true,
    },
  ];
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
        opacity: 0.6;
      }
    }
  }
</style>
