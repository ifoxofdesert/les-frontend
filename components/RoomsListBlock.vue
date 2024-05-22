<template>
  <div class="roomsListBlock">
    <Container>
      <ContainerBlock>
        <div class="roomsListBlock__container">
          <h2 class="roomsListBlock__container__title" v-if="content.title">{{ content.title }}</h2>
          <span class="roomsListBlock__container__description" v-if="content.description">
            {{ content.description }}
          </span>

          <div class="roomsListBlock__container__roomsBlock" v-if="viewport.isGreaterOrEquals('is_1200')">
            <div class="roomsListBlock__container__roomsBlock__labelBlock">
              <span class="roomsListBlock__container__roomsBlock__labelBlock__name first">Класс номера</span>
              <span class="roomsListBlock__container__roomsBlock__labelBlock__name second">Площадь</span>
              <span class="roomsListBlock__container__roomsBlock__labelBlock__name third">Вместимость</span>
            </div>
            <NuxtLink
              class="roomsListBlock__container__roomsBlock__roomBlock"
              v-for="(item, index) in rooms"
              :key="index"
              :class="{ active: item.active }"
              :to="`/rooms/${item.slug}`"
              @mouseover="selectRoom(index)"
            >
              <span class="roomsListBlock__container__roomsBlock__roomBlock__title">{{ item.title }}</span>
              <span class="roomsListBlock__container__roomsBlock__roomBlock__text first">{{ item.area }}</span>
              <span class="roomsListBlock__container__roomsBlock__roomBlock__text second">{{ item.persons }}</span>
              <Transition>
                <img
                  v-if="item.active && item.img?.src && viewport.isGreaterOrEquals('is_1550')"
                  :src="useImage(item.img.src)"
                  :alt="item.img?.alt || item.title"
                  class="roomsListBlock__container__roomsBlock__roomBlock__image"
                />
              </Transition>
              <IconComponent name="arrow_right" class="roomsListBlock__container__roomsBlock__roomBlock__icon" />
            </NuxtLink>
          </div>

          <RoomCardMobile v-if="viewport.isLessThan('is_1200')" :rooms="rooms" />
        </div>
      </ContainerBlock>
    </Container>
  </div>
</template>

<script setup lang="ts">
  import type { IroomsListBlock } from '~/types/Home';
  import type { IroomList } from '~/types/Room';

  const { content, rooms } = defineProps({
    content: {
      type: Object as () => IroomsListBlock,
      default: {},
    },
    rooms: {
      type: Array<IroomList>,
      default: [],
    },
  });

  const viewport = useViewport();

  rooms[0].active = true;

  function selectRoom(index: number) {
    rooms.forEach((item) => {
      if (item.active) {
        item.active = false;
      }
    });

    rooms[index].active = true;
  }
</script>

<style lang="scss" scoped>
  .roomsListBlock {
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 0 0 75px 0;
    margin: 0 0 75px 0;

    &:deep() {
      .container {
        overflow: visible;
      }
    }

    @media (max-width: 1200px) {
      padding: 0;
      margin: 0 0 120px 0;
    }

    @media (max-width: 550px) {
      margin: 0 0 50px 0;
    }
    &__container {
      width: 100%;
      display: flex;
      flex-direction: column;
      &__title {
        font-family: 'Playfair Display';
        font-size: 90px;
        font-weight: 500;
        line-height: 120px;
        color: $black;
        margin: 0 0 30px 307px;

        @media (max-width: 1550px) {
          font-size: 80px;
          margin: 0 0 20px 0;
          float: left;
          display: block;

          span {
            margin: 0;
          }
        }

        @media (max-width: 1200px) {
          line-height: 100%;
        }

        @media (max-width: 1200px) {
          font-size: 62px;
        }

        @media (max-width: 768px) {
          font-size: 42px;
        }
        @media (max-width: 550px) {
          font-size: 30px;
        }
      }

      &__description {
        max-width: 573px;
        width: 100%;
        margin: 0 0 72px 623px;
        font-family: Manrope;
        font-size: 22px;
        font-weight: 300;
        line-height: 110%;
        color: $gray;

        @media (max-width: 1550px) {
          margin: 0 0 72px 0;
        }

        @media (max-width: 768px) {
          font-size: 20px;
        }

        @media (max-width: 550px) {
          font-size: 18px;
        }
      }

      &__roomsBlock {
        width: 100%;
        display: flex;
        flex-direction: column;
        &__labelBlock {
          display: flex;
          align-items: center;
          border-bottom: 1px solid $black;
          padding: 13px 0 0 0;
          margin: 0;
          &__name {
            font-family: Manrope;
            font-size: 22px;
            font-weight: 400;
            line-height: 37px;
            color: $gray;
            width: 100%;

            &.first {
              max-width: 595px;
              margin: 0 25px 0 0;

              @media (max-width: 1670px) {
                max-width: 500px;
              }

              @media (max-width: 1550px) {
                max-width: 595px;
              }

              @media (max-width: 1450px) {
                max-width: 500px;
              }
            }
            &.second {
              max-width: 165px;
              margin: 0 145px 0 0;

              @media (max-width: 1450px) {
                max-width: 150px;
              }
            }
            &.third {
              max-width: 161px;
              margin: 0 149px 0 0;

              @media (max-width: 1450px) {
                max-width: 150px;
              }
            }
          }
        }

        &__roomBlock {
          display: flex;
          align-items: center;
          width: 100%;
          padding: 25px 20px 25px 0;
          position: relative;
          cursor: pointer;
          border-bottom: 1px solid $black;
          text-decoration: none;

          &::before {
            position: absolute;
            content: '';
            background-color: transparent;
            width: calc(100% + 60px);
            height: 100%;
            left: -40px;
            z-index: -1;
            transition: all ease 0.2s;
          }

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

          &__image {
            position: absolute;
            right: 250px;
            width: 350px;
            height: 500px;
            object-fit: cover;
            z-index: 1;

            @media (max-width: 1800px) {
              right: 150px;
            }

            @media (max-width: 1670px) {
              width: 300px;
              height: 350px;
            }

            @media (max-width: 1550px) {
              display: none;
            }
          }

          &__icon {
            margin: 0 0 0 auto;
            position: relative;
            transition: all ease 0.2s;
          }

          &.active {
            border-bottom: 0px solid $black;
            &::before {
              background-color: $green;
            }

            .roomsListBlock__container__roomsBlock__roomBlock__title {
              color: $whitesmoke;
            }
            .roomsListBlock__container__roomsBlock__roomBlock__text {
              color: $whitesmoke;
            }

            .roomsListBlock__container__roomsBlock__roomBlock__icon {
              right: 30px;
            }
          }
        }

        @media (max-width: 1200px) {
          display: none;
        }
      }
    }
  }
</style>

<style lang="scss">
  .roomsListBlock {
    .roomsListBlock__container {
      &__roomsBlock__roomBlock {
        &__icon {
          svg {
            path {
              fill: $black;
            }
          }
        }

        &.active {
          .roomsListBlock__container__roomsBlock__roomBlock__icon {
            svg {
              path {
                fill: $whitesmoke;
              }
            }
          }
        }
      }
    }
  }
</style>
