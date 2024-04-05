<template>
  <div class="roomsListBlock">
    <Container>
      <ContainerBlock>
        <div class="roomsListBlock__container">
          <h2 class="roomsListBlock__container__title">Номерной фонд комплекса</h2>
          <span class="roomsListBlock__container__description">
            Выбирайте из разнообразия номеров для вашего пребывания. От уютных стандартов до роскошных люксов - у нас
            найдется идеальный вариант для вашего комфорта.
          </span>

          <div class="roomsListBlock__container__roomsBlock">
            <div class="roomsListBlock__container__roomsBlock__labelBlock">
              <span class="roomsListBlock__container__roomsBlock__labelBlock__name first">Класс номера</span>
              <span class="roomsListBlock__container__roomsBlock__labelBlock__name second">Стоимость</span>
              <span class="roomsListBlock__container__roomsBlock__labelBlock__name third">Вместимость</span>
            </div>
            <div
              class="roomsListBlock__container__roomsBlock__roomBlock"
              v-for="(item, index) in rooms"
              :key="index"
              :class="{ active: item.active }"
              @mouseover="selectRoom(index)"
            >
              <span class="roomsListBlock__container__roomsBlock__roomBlock__title">{{ item.title }}</span>
              <span class="roomsListBlock__container__roomsBlock__roomBlock__text first">{{ item.price }}</span>
              <span class="roomsListBlock__container__roomsBlock__roomBlock__text second">{{ item.persons }}</span>
              <Transition>
                <img
                  v-if="item.active"
                  :src="item.img"
                  :alt="item.title"
                  class="roomsListBlock__container__roomsBlock__roomBlock__image"
                />
              </Transition>
              <IconComponent name="arrow_right" class="roomsListBlock__container__roomsBlock__roomBlock__icon" />
            </div>
          </div>
        </div>
      </ContainerBlock>
    </Container>
  </div>
</template>

<script setup lang="ts">
  const rooms = ref([
    {
      title: 'Базовый',
      price: '6 000₽/ночь',
      persons: 'До 2х гостей',
      img: '/_nuxt/assets/images/Rectangle 8-1.jpeg',
      active: true,
    },
    {
      title: 'Стандарт',
      price: '8 000₽/ночь',
      persons: 'До 2х гостей',
      img: '/_nuxt/assets/images/Rectangle 8-2.jpeg',
      active: false,
    },
    {
      title: 'Комфорт',
      price: '12 000₽/ночь',
      persons: 'До 3х гостей',
      img: '/_nuxt/assets/images/Rectangle 8.jpeg',
      active: false,
    },
    {
      title: 'Люкс-студио',
      price: '17 000₽/ночь',
      persons: 'До 4х гостей',
      img: '/_nuxt/assets/images/Rectangle 8-2.jpeg',
      active: false,
    },
  ]);

  function selectRoom(index: number) {
    rooms.value.forEach((item) => {
      if (item.active) {
        item.active = false;
      }
    });

    rooms.value[index].active = true;
  }
</script>

<style lang="scss" scoped>
  .roomsListBlock {
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 0 0 75px 0;
    margin: 0 0 75px 0;
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
          margin: 0 0 26px 0;
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
            }
            &.second {
              max-width: 165px;
              margin: 0 145px 0 0;
            }
            &.third {
              max-width: 161px;
              margin: 0 149px 0 0;
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
            }

            &.second {
              max-width: 165px;
              margin: 0 149px 0 0;
            }
          }

          &__image {
            position: absolute;
            right: 250px;
            width: 350px;
            height: 500px;
            object-fit: cover;
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
