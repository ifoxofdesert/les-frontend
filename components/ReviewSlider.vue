<template>
  <div class="reviewSlider">
    <RoomGallary
      class="reviewSlider__slider"
      :title="title"
      :description="description"
      :numberSlides="slides.length"
      :fixNumberSlides="3"
      :spaceBetween="40"
      :slidesPerView="'auto'"
    >
      <SwiperSlide v-for="(item, index) in slides" :key="index" class="reviewSlider__slider__slide">
        <div class="reviewSlider__slider__slide__review">
          <span class="reviewSlider__slider__slide__review__text" v-html="item.text" />
          <span class="reviewSlider__slider__slide__review__name">
            {{ item.name }}
          </span>
          <div class="reviewSlider__slider__slide__review__ratingBlock">
            Оценка:
            <div class="reviewSlider__slider__slide__review__ratingBlock__stars">
              <IconComponent
                name="star"
                class="reviewSlider__slider__slide__review__ratingBlock__stars__icon"
                v-for="_ in [...Array(item.stars).keys()]"
              />
            </div>
          </div>
        </div>
      </SwiperSlide>
    </RoomGallary>
  </div>
</template>

<script lang="ts" setup>
  import type { Ireview } from '~/types/Review.d.ts';

  const { title, description, slides } = defineProps({
    title: {
      type: String,
      default: '',
    },

    description: {
      type: String,
      default: '',
    },

    slides: {
      type: Array<Ireview>,
      default: [],
    },
  });
</script>

<style lang="scss" scoped>
  .reviewSlider {
    display: flex;
    flex-direction: column;
    width: 100%;

    &__slider {
      &__slide {
        width: 425px !important;
        display: flex;
        flex-direction: column;
        height: auto;
        margin: 0 40px 0 0;
        &__review {
          display: flex;
          flex-direction: column;
          width: 100%;
          padding: 0 0 0 25px;
          border-left: 1px solid $black;
          height: 100%;
          box-sizing: border-box;

          &__text {
            font-family: Manrope;
            font-size: 22px;
            font-weight: 300;
            line-height: 120%;
            color: $black;
            margin: 0 0 30px 0;
          }

          &__name {
            margin: auto 0 15px 0;
            font-family: Manrope;
            font-size: 30px;
            font-weight: 500;
            line-height: 110%;
            color: $black;
          }

          &__ratingBlock {
            display: flex;
            align-items: center;
            gap: 10px;
            font-family: Manrope;
            font-size: 18px;
            font-weight: 300;
            line-height: 120%;
            color: $gray;
            &__stars {
              display: flex;
              align-items: center;
              gap: 5px;
              &__icon {
              }
            }
          }
        }
      }
    }
  }
</style>
