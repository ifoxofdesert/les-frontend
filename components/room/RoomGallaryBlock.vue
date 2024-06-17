<template>
  <div class="gallaryBlock">
    <RoomGallary
      :title="title"
      :description="description"
      :numberSlides="gallary.length"
      :slidesPerView="slidesPerView"
      :fixNumberSlides="fixNumberSlides"
      :spaceBetween="spaceBetween"
    >
      <SwiperSlide
        v-for="(item, index) in gallary"
        :key="index"
        class="gallaryBlock__slide"
        :class="`gallaryBlock__slide_${getSchemaIndex(index)}`"
        :id="index"
      >
        <div class="gallaryBlock__slide__imageBlock">
          <span class="gallaryBlock__slide__imageBlock__number">{{ formatingNumber(index + 1) }}</span>

          <img :src="useImage(item.src)" :alt="item.src" class="gallaryBlock__slide__imageBlock__image" />
        </div>
      </SwiperSlide>
    </RoomGallary>
  </div>
</template>

<script setup lang="ts">
  import type { Iimage } from '~/types/General';

  const { title, description, slidesPerView, fixNumberSlides, spaceBetween, gallary } = defineProps({
    title: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
    slidesPerView: {
      type: [String as () => 'auto', Number],
      default: 'auto',
    },
    fixNumberSlides: {
      type: Number,
      default: 2,
    },
    spaceBetween: {
      type: Number,
      default: 20,
    },
    gallary: {
      type: Array<Iimage>,
      default: [],
    },
  });

  const { formatingNumber } = useFormating();

  let repeatIndex = 0;

  function getSchemaIndex(i: number) {
    if (i == 0) {
      repeatIndex = 0;
    }
    let index = i + 1 - repeatIndex;

    if (index <= 4) {
      return index;
    } else if (index > 4) {
      repeatIndex = i;
      return i + 1 - repeatIndex;
    }
  }
</script>

<style lang="scss" scoped>
  .gallaryBlock {
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

        @media (max-width: 768px) {
          margin: 0 15px 0 0 !important;
          width: 280px !important;
          height: 290px !important;
        }
      }
      &_2 {
        width: 290px !important;
        height: 355px !important;

        @media (max-width: 768px) {
          width: 204px !important;
          height: 249px !important;
        }
      }
      &_3 {
        width: 445px !important;
        height: 477px !important;

        @media (max-width: 768px) {
          width: 312px !important;
          height: 335px !important;
        }
      }
      &_4 {
        width: 600px !important;
        height: 397px !important;

        @media (max-width: 768px) {
          width: 422px !important;
          height: 279px !important;
        }
      }
    }
  }
</style>
