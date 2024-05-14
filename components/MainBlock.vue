<template>
  <div class="mainBlock noFixed">
    <Container>
      <img :src="useImage(image.src)" :alt="image?.alt || ''" class="mainBlock__backgroundImage" />
      <ContainerBlock>
        <div class="mainBlock__contentBlock">
          <h1 class="mainBlock__contentBlock__title">
            {{ title.first }}
            <span v-if="title.second">{{ title.second }}</span>
          </h1>
          <span v-if="coordinate?.latitude" class="mainBlock__contentBlock__coordinate">
            <span>{{ coordinate.latitude }}</span>
            <span>{{ coordinate.longitude }}</span>
          </span>
          <Button
            class="mainBlock__contentBlock__button"
            mod="white"
            type="external"
            url="#"
            data-tl-booking-open="true"
          >
            Забронировать номер
            <IconComponent name="arrow_right" />
          </Button>
        </div>
      </ContainerBlock>
    </Container>
  </div>
</template>

<script setup lang="ts">
  import type { ItitleCustom, Icoordinate, Iimage } from '~/types/General';

  const { title, coordinate, image } = defineProps({
    title: {
      type: Object as () => ItitleCustom,
      default: {},
    },
    coordinate: {
      type: Object as () => Icoordinate,
      default: {},
    },
    image: {
      type: Object as () => Iimage,
      default: {},
    },
  });
</script>

<style lang="scss" scoped>
  .mainBlock {
    width: 100%;
    position: relative;
    height: 100vh;
    display: flex;
    flex-direction: column;
    margin: 0 0 100px 0;

    &::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      background: linear-gradient(180deg, rgba(0, 0, 0, 0) 11.693%, rgba(0, 0, 0, 0.6) 100%);
      z-index: 1;
    }

    &:deep() {
      .containerBlock {
        z-index: 2;
      }
    }

    &__backgroundImage {
      position: absolute;
      top: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      z-index: 0;
    }

    &__contentBlock {
      position: relative;
      display: flex;
      flex-direction: column;
      width: 100%;
      z-index: 1;
      height: 100vh;
      justify-content: flex-end;
      bottom: 50px;

      &__title {
        color: $whitesmoke;
        font-family: 'Playfair Display';
        font-size: 150px;
        font-weight: 400;
        line-height: 110%;
        display: flex;
        flex-direction: column;
        margin: 0;
        span {
          text-align: right;
          font-style: italic;
        }

        @media (max-width: 1550px) {
          font-size: 100px;
        }

        @media (max-width: 1100px) {
          font-size: 72px;
        }

        @media (max-width: 920px) {
          font-size: 62px;
        }

        @media (max-width: 690px) {
          display: block;
          float: left;
          text-align: right;
          margin: 0 0 20px 0;
        }

        @media (max-width: 650px) {
          font-size: 42px;
        }
        @media (max-width: 550px) {
          font-size: 30px;
        }
      }

      &__coordinate {
        display: flex;
        align-items: center;
        gap: 20px;
        color: $whitesmoke;
        font-family: 'Playfair Display';
        font-style: italic;
        font-size: 40px;
        font-weight: 400;
        line-height: 110%;
        margin: -70px 0 0;

        @media (max-width: 1550px) {
          font-size: 32px;
        }

        @media (max-width: 920px) {
          margin: -44px 0 0 0;
          flex-direction: column;
          align-items: flex-start;
          line-height: 50%;
          font-size: 18px;
        }

        @media (max-width: 690px) {
          margin: 0;
          flex-direction: row;
          justify-content: space-between;
        }
      }

      &__button {
        width: 100%;
        margin: 64px 0 0 0;

        @media (max-width: 690px) {
          margin: 30px 0 0 0;
        }
      }
    }

    @media (max-width: 550px) {
      margin: 0 0 80px 0;
    }
  }
</style>
