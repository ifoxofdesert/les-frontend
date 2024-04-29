<template>
  <div class="pageNews">
    <NewsTitle class="pageNews__title" v-if="data.title">{{ data.title }}</NewsTitle>
    <NewsFullImage v-if="data.image" :image="data.image" />
    <NewsIntroText :text="data.introText" :markText="data.markText" />
    <NewsText v-if="data.textBefore" :text="data.textBefore" />
    <Button
      v-if="data.buttonBeforeActive"
      class="pageNews__button"
      mod="green"
      type="external"
      url="#"
      data-tl-booking-open="true"
    >
      Забронировать номер
      <IconComponent name="arrow_right" />
    </Button>
    <div class="pageNews__accordionBlock">
      <AccordionContainer v-if="data?.accordion?.length">
        <Accordion v-for="item in data.accordion" :content="item" />
      </AccordionContainer>
    </div>
    <NewsText v-if="data.textAfter" :text="data.textAfter" />
    <Button
      v-if="data.buttonAfterActive"
      class="pageNews__button"
      mod="green"
      type="external"
      url="#"
      data-tl-booking-open="true"
    >
      Забронировать номер
      <IconComponent name="arrow_right" />
    </Button>
    <div class="pageNews__sliderBlock">
      <SliderAndText
        v-if="data.slideItem?.length"
        :numberSlides="data.slideItem?.length"
        :title="slideTitle"
        :secondTitle="slideSecondTitle"
        :description="slideDescription"
      >
        <SwiperSlide v-for="(item, index) in data.slideItem" :key="index" class="pageNews__sliderBlock__slide">
          <CardEvent :card="item" />
        </SwiperSlide>
      </SliderAndText>
    </div>
  </div>
</template>

<script setup lang="ts">
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
    &__accordionBlock {
      max-width: 755px;
      width: 100%;
      margin: 50px auto;
    }

    &__sliderBlock {
      margin: 150px 0 0 0;
      &__slide {
        width: 445px;
        margin: 0 20px 0 0;
        display: flex;
      }
    }

    &__button {
      max-width: 755px;
      width: 100%;
      margin: 50px auto;

      &:deep() {
        svg {
          path {
            fill: $whitesmoke;
          }
        }
      }

      &:hover {
        &:deep() {
          svg {
            path {
              fill: $black;
            }
          }
        }
      }
    }
  }
</style>
