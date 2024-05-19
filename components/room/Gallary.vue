<template>
  <div class="gallaryBlock">
    <h2 class="gallaryBlock__title" v-if="title">{{ title }}</h2>
    <span class="gallaryBlock__description" v-if="description">{{ description }}</span>
    <div class="gallaryBlock__sliderBlock">
      <RoomSlider :numberSlides="data.length" :fixNumberSlides="3" :spaceBetween="20">
        <SwiperSlide
          v-for="(item, index) in data"
          :key="index"
          class="gallaryBlock__sliderBlock__slide"
          :class="`gallaryBlock__sliderBlock__slide_${getSchemaIndex(index)}`"
        >
          <div class="gallaryBlock__sliderBlock__slide__imageBlock">
            <span class="gallaryBlock__sliderBlock__slide__imageBlock__number">{{ formatingNumber(index + 1) }}</span>

            <img
              :src="useImage(item.src)"
              :alt="item.src"
              class="gallaryBlock__sliderBlock__slide__imageBlock__image"
            />
          </div>
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

  const { formatingNumber } = useFormating();

  let repeatIndex = 0;

  function getSchemaIndex(i: number) {
    let index = i + 1 - repeatIndex;
    if (index <= 4) {
      return index;
    } else if (index > 4) {
      repeatIndex = index - 1;
      return i + 1 - repeatIndex;
    }
  }
</script>

<style lang="scss" scoped>
  .gallaryBlock {
    &__title {
      color: $black;
      font-family: 'Playfair Display';
      font-size: 100px;
      font-weight: 500;
      line-height: 100%;
      text-transform: uppercase;
      margin: 0 0 30px 0;
      text-align: center;
    }
    &__description {
      color: $gray;
      font-family: Manrope;
      font-size: 22px;
      font-style: normal;
      font-weight: 300;
      line-height: 110%;
      max-width: 580px;
      width: 100%;
      margin: 0 auto 10px auto;
      display: flex;
      flex-direction: column;
    }
    &__sliderBlock {
      width: 100%;

      &__slide {
        margin: 0 20px 0 0;
        display: flex;
        flex-direction: column;

        &__imageBlock {
          display: flex;
          flex-direction: column;
          height: 100%;

          &__number {
            font-family: Manrope;
            font-size: 20px;
            font-weight: 300;
            line-height: 110%;
            color: $gray;
            margin: 0 auto 0 0;
          }

          &__image {
            object-fit: cover;
            height: 100%;
          }
        }

        &_1 {
          width: 445px !important;
          height: 465px !important;
          margin: 0 155px 0 0 !important;
        }
        &_2 {
          width: 290px !important;
          height: 355px !important;
        }
        &_3 {
          width: 445px !important;
          height: 477px !important;
        }
        &_4 {
          width: 600px !important;
          height: 397px !important;
        }
      }
    }

    &:deep() {
      .swiper {
        overflow: visible !important;

        &-initialized {
          .gallaryBlock__sliderBlock__slide {
            margin: 0;
          }
        }
      }
    }
  }
</style>
