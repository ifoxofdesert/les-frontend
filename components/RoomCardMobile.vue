<template>
  <div class="roomCardMobile">
    <div class="roomCardMobile__item" v-for="item in rooms">
      <img
        v-if="item.img?.src"
        :src="useImage(item.img.src)"
        :alt="item.img?.alt || item.title"
        class="roomCardMobile__item__image"
      />
      <div class="roomCardMobile__item__infoBlock">
        <span class="roomCardMobile__item__infoBlock__title">
          {{ item.title }}
        </span>
        <span class="roomCardMobile__item__infoBlock__block">
          Площадь
          <span class="roomCardMobile__item__infoBlock__block__text">
            {{ item.area }}
          </span>
        </span>

        <span class="roomCardMobile__item__infoBlock__block second">
          Вместимость
          <span class="roomCardMobile__item__infoBlock__block__text">
            {{ item.persons }}
          </span>
        </span>
      </div>
      <Button type="internal" mod="white br" :url="`/rooms/${item.slug}`" class="roomCardMobile__item__button">
        Подробнее о номере
        <IconComponent name="arrow_right" class="roomCardMobile__item__button__icon" />
      </Button>
    </div>
  </div>
</template>

<script setup lang="ts">
  import type { IroomList } from '~/types/Room';

  const { rooms } = defineProps({
    rooms: {
      type: Array<IroomList>,
      default: [],
    },
  });
</script>

<style lang="scss" scoped>
  .roomCardMobile {
    display: none;

    @media (max-width: 1200px) {
      display: flex;
      flex-direction: column;
      border-top: 1px solid $black;

      &__item {
        display: flex;
        flex-direction: column;
        width: 100%;
        padding: 15px 0 25px 0;
        border-bottom: 1px solid $black;
        gap: 15px;

        &__image {
          width: 100%;
          height: 400px;
          object-fit: cover;
        }

        &__infoBlock {
          display: flex;
          align-items: center;
          width: 100%;

          &__title {
            font-family: 'Playfair Display';
            font-size: 70px;
            font-weight: 400;
            line-height: 93px;
            text-transform: uppercase;
            color: $black;
            margin: 0 25px 0 0;
            max-width: 595px;
            width: 100%;
            transition: all ease 0.2s;

            @media (max-width: 1670px) {
              font-size: 52px;
              max-width: 500px;
            }

            @media (max-width: 1550px) {
              max-width: 595px;
            }

            @media (max-width: 1450px) {
              max-width: 500px;
              font-size: 46px;
            }

            @media (max-width: 1200px) {
              max-width: 310px;
              font-size: 40px;
              line-height: 100%;
            }

            @media (max-width: 650px) {
              flex: 100%;
              max-width: 100%;
              margin: 0 0 15px 0;
            }
          }

          &__text {
            font-family: Manrope;
            font-size: 25px;
            font-weight: 400;
            line-height: 42px;
            color: $black;
            width: 100%;
            transition: all ease 0.2s;

            &.first {
              max-width: 170px;
              margin: 0 145px 0 0;

              @media (max-width: 1450px) {
                max-width: 150px;
              }
            }

            &.second {
              max-width: 165px;
              margin: 0 149px 0 0;

              @media (max-width: 1450px) {
                max-width: 150px;
                margin: 0;
              }
            }

            @media (max-width: 1450px) {
              font-size: 20px;
            }

            @media (max-width: 650px) {
              line-height: 100%;
            }
          }

          &__block {
            display: flex;
            flex-direction: column;
            color: $gray;
            font-family: Manrope;
            font-size: 16px;
            font-weight: 400;
            line-height: 27px;

            &.second {
              margin: 0 0 0 auto;
            }
          }

          @media (max-width: 650px) {
            flex-wrap: wrap;
          }
        }
      }
    }
  }
</style>
