<template>
  <div class="roomsListBlock">
    <div class="roomsListBlock__container">
      <h2 class="roomsListBlock__container__title" v-if="title?.first || title?.second">
        {{ title.first }}
        <span v-if="title?.second">{{ title.second }}</span>
      </h2>
      <span class="roomsListBlock__container__description" v-if="description">
        {{ description }}
      </span>

      <div class="roomsListBlock__container__roomsBlock">
        <div class="roomsListBlock__container__roomsBlock__roomBlock" v-for="(item, index) in rooms" :key="index">
          <img
            :src="item.img.src"
            :alt="item.img.alt || item.title"
            class="roomsListBlock__container__roomsBlock__roomBlock__image"
          />
          <div class="roomsListBlock__container__roomsBlock__roomBlock__textBlock">
            <span class="roomsListBlock__container__roomsBlock__roomBlock__textBlock__title">
              {{ item.title }}
            </span>

            <span class="roomsListBlock__container__roomsBlock__roomBlock__textBlock__text first">
              Площадь:
              <span>{{ item.area }}</span>
            </span>

            <span class="roomsListBlock__container__roomsBlock__roomBlock__textBlock__text second">
              Вместимость:
              <span>{{ item.persons }}</span>
            </span>

            <span class="roomsListBlock__container__roomsBlock__roomBlock__textBlock__description">
              {{ item.description }}
            </span>
          </div>

          <IconComponent name="arrow_right" class="roomsListBlock__container__roomsBlock__roomBlock__icon" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import type { ItitleCutom } from '~/types/General';
  import type { IroomList } from '~/types/Room';

  const { title, description, rooms } = defineProps({
    title: {
      type: Object as () => ItitleCutom,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
    rooms: {
      type: Array as () => IroomList[],
      default: [],
    },
  });
</script>

<style lang="scss" scoped>
  .roomsListBlock {
    width: 100%;
    display: flex;
    flex-direction: column;
    &__container {
      width: 100%;
      display: flex;
      flex-direction: column;
      &__title {
        font-family: 'Playfair Display';
        font-size: 90px;
        font-weight: 500;
        line-height: 100%;
        text-transform: uppercase;
        color: $black;
        margin: 0 0 30px 307px;
        display: flex;
        flex-direction: column;

        span {
          margin: 0 0 0 310px;
        }
      }
      &__description {
        margin: 0 0 0 619px;
        width: 100%;
        max-width: 573px;

        font-family: Manrope;
        font-size: 22px;
        font-weight: 300;
        line-height: 110%;
        color: $gray;
      }

      &__roomsBlock {
        width: 100%;
        display: flex;
        flex-direction: column;
        margin: 50px 0 0 0;
        border-top: 1px solid $black;
        &__roomBlock {
          padding: 25px 0;
          display: flex;
          width: 100%;
          border-bottom: 1px solid $black;
          cursor: pointer;
          position: relative;

          &::before {
            position: absolute;
            content: '';
            background-color: transparent;
            width: calc(100% + 80px);
            height: 100%;
            left: -40px;
            z-index: -1;
            transition: all ease 0.2s;
            top: 0;
            transition: all ease 0.2s;
          }

          &__image {
            height: 290px;
            width: 445px;
            object-fit: cover;
            margin: 0 175px 0 0;
          }

          &__textBlock {
            display: flex;
            flex-direction: column;
            max-width: 600px;
            width: 100%;
            transition: all ease 0.2s;

            &__title {
              font-family: ' Playfair Display';
              font-size: 70px;
              font-weight: 400;
              line-height: 93px;
              text-transform: uppercase;
              color: $black;
              margin: 0 0 20px 0;
              transition: all ease 0.2s;
            }

            &__text {
              font-family: Manrope;
              font-size: 18px;
              font-weight: 400;
              line-height: 30px;
              color: $gray;
              transition: all ease 0.2s;

              span {
                color: $black;
              }
              &.first {
                margin: 0 0 5px 0;
              }

              &.second {
                margin: 0 0 15px 0;
              }
            }

            &__description {
              font-family: Manrope;
              font-size: 22px;
              font-weight: 400;
              line-height: 110%;
              color: $black;
              transition: all ease 0.2s;
            }
          }

          &__icon {
            margin: auto 0 auto auto;
            position: relative;
            transition: all ease 0.2s;

            &:deep() {
              path {
                transition: all ease 0.2s;

                fill: $black;
              }
            }
          }

          &:hover {
            border-bottom-width: 0px;
            &::before {
              background-color: $green;
            }

            .roomsListBlock__container__roomsBlock__roomBlock__textBlock__title {
              color: $whitesmoke;
            }
            .roomsListBlock__container__roomsBlock__roomBlock__textBlock__text {
              color: $gray;

              span {
                color: $whitesmoke;
              }
            }

            .roomsListBlock__container__roomsBlock__roomBlock__textBlock__description {
              color: $whitesmoke;
            }

            .roomsListBlock__container__roomsBlock__roomBlock__icon {
              right: 30px;

              &:deep() {
                path {
                  fill: $whitesmoke;
                }
              }
            }
          }
        }
      }
    }
  }
</style>
