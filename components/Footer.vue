<template>
  <footer>
    <div class="footer">
      <Container>
        <ContainerBlock>
          <div class="footer__container">
            <div class="footer__container__navigationBlock">
              <div
                class="footer__container__navigationBlock__column phonesColumn"
                v-if="dataGeneral?.footer?.phones?.length"
              >
                <span class="footer__container__navigationBlock__column__title">Телефон</span>

                <Button
                  v-for="item in dataGeneral.footer.phones"
                  :url="`tel:${item.url}`"
                  class="footer__container__navigationBlock__column__button"
                  mod="text"
                  type="external"
                >
                  {{ item.text }}
                </Button>
              </div>
              <div
                class="footer__container__navigationBlock__column menuColumn"
                v-if="dataGeneral?.footer?.menu?.length"
              >
                <span class="footer__container__navigationBlock__column__title">Меню</span>

                <Button
                  v-for="item in dataGeneral.footer.menu"
                  :url="item.url"
                  class="footer__container__navigationBlock__column__button"
                  mod="text"
                  type="internal"
                >
                  {{ item.text }}
                </Button>
              </div>

              <div
                class="footer__container__navigationBlock__column navigationColumn"
                v-if="dataGeneral?.footer?.navigation?.length"
              >
                <span class="footer__container__navigationBlock__column__title">Навигация</span>
                <Button
                  v-for="item in dataGeneral.footer.navigation"
                  :url="item.url"
                  class="footer__container__navigationBlock__column__button"
                  mod="text"
                  type="internal"
                >
                  {{ item.text }}
                </Button>
              </div>

              <div
                class="footer__container__navigationBlock__column socialColumn"
                v-if="dataGeneral?.footer?.socials?.length"
              >
                <span class="footer__container__navigationBlock__column__title">Соц.Сети</span>

                <Button
                  v-for="item in dataGeneral.footer.socials"
                  :url="item.url"
                  class="footer__container__navigationBlock__column__button"
                  target="_blank"
                  mod="text"
                  type="external"
                >
                  {{ item.text }}
                </Button>
              </div>

              <Button
                class="footer__container__navigationBlock__button"
                type="button"
                mod="white br"
                v-if="viewport.isLessThan('is_1200')"
              >
                Заказать обратный звонок
              </Button>

              <div class="footer__container__navigationBlock__column addressColumn" v-if="dataGeneral?.address">
                <span class="footer__container__navigationBlock__column__title">Адрес</span>
                <span class="footer__container__navigationBlock__column__text">
                  {{ dataGeneral?.address }}
                </span>

                <NuxtLink to="/" class="footer__container__navigationBlock__column__mapButton">
                  <IconComponent name="point" class="footer__container__navigationBlock__column__mapButton__icon" />
                  <span class="footer__container__navigationBlock__column__mapButton__text"> Посмотреть на карте </span>
                </NuxtLink>
              </div>
            </div>
            <span class="footer__container__contactTitle"> Контакты </span>

            <div class="footer__container__bottomBlock">
              <div class="footer__container__bottomBlock__paymentBlock" v-if="dataGeneral?.footer?.payments?.length">
                <a
                  v-for="item in dataGeneral.footer.payments"
                  :href="item.url"
                  class="footer__container__bottomBlock__paymentBlock__imageButton"
                >
                  <img
                    :src="useImage(item.src)"
                    :alt="item.alt"
                    class="footer__container__bottomBlock__paymentBlock__imageButton__image"
                  />
                </a>
              </div>

              <button class="footer__container__bottomBlock__goTopButton" @click="scrollTop()">
                в начало
                <IconComponent name="circleUpArrow" class="footer__container__bottomBlock__goTopButton__icon" />
              </button>

              <NuxtLink
                :to="dataGeneral.policyUrl"
                class="footer__container__bottomBlock__policyButton"
                v-if="dataGeneral?.policyUrl"
              >
                Политика конфиденциальности
              </NuxtLink>
            </div>
          </div>
        </ContainerBlock>
      </Container>
    </div>
  </footer>
</template>

<script setup lang="ts">
  import type { Igeneral } from '~/types/General';

  const dataGeneral = useState<Igeneral>('dataGeneral');

  const viewport = useViewport();

  function scrollTop() {
    window.scrollTo(0, 0);
  }
</script>

<style lang="scss" scoped>
  footer {
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: $milk;
    padding: 40px 0 20px 0;
    .footer {
      width: 100%;
      &__container {
        width: 100%;
        display: flex;
        flex-direction: column;
        &__navigationBlock {
          width: 100%;
          margin: 0 0 212px 0;
          display: flex;
          justify-content: space-between;

          &__column {
            display: flex;
            flex-direction: column;
            max-width: 290px;
            width: 100%;
            gap: 15px;

            &__title {
              margin: 0 0 11px 0;
              color: $green;
              font-family: 'Manrope';
              font-size: 16px;
              font-weight: 600;

              @media (max-width: 1200px) {
                margin: 0;
              }
            }

            &__button {
              font-family: 'Manrope';
              font-size: 18px;
              font-weight: 400;
              color: $black;
              line-height: 30px;
              letter-spacing: -0.02em;
              text-decoration: none;

              @media (max-width: 400px) {
                font-size: 14px;
                line-height: 100%;
              }
            }

            &__text {
              font-family: 'Manrope';
              font-size: 18px;
              font-weight: 400;
              color: $black;
              line-height: 30px;
              letter-spacing: -0.02em;

              @media (max-width: 400px) {
                font-size: 15px;
                line-height: 120%;
              }
            }

            &__mapButton {
              margin: 5px 0 0 0;
              display: flex;
              align-items: center;
              gap: 10px;
              font-family: 'Manrope';
              font-size: 18px;
              font-weight: 400;
              text-decoration: none;
              color: $green;

              &__text {
                position: relative;

                &::before {
                  bottom: 1px;
                  content: '';
                  width: 100%;
                  height: 1px;
                  background-color: $green;
                  position: absolute;
                  transform: scaleY(0.5);
                }
              }

              @media (max-width: 1200px) {
                border: solid $gray 1px;
                border-radius: 30px;
                padding: 15px 32px;
                color: $black;
                font-size: 20px;
                margin: 0;
                transition: all ease 0.2s;
                background-color: transparent;

                &__text {
                  position: relative;

                  &::before {
                    display: none;
                  }
                }

                &:hover {
                  background-color: $green;
                  color: $whitesmoke;

                  &:deep() {
                    path {
                      fill: $whitesmoke;
                    }
                  }
                }
              }

              @media (max-width: 690px) {
                width: 100%;
                justify-content: center;
              }

              @media (max-width: 400px) {
                font-size: 18px;
              }
            }

            &.phonesColumn {
              .footer__container__navigationBlock__column__button {
                font-size: 20px;

                @media (max-width: 400px) {
                  font-size: 14px;
                }
              }

              @media (max-width: 920px) {
                flex: 50%;

                order: 3;
              }
            }
            &.menuColumn {
              @media (max-width: 920px) {
                flex: 50%;
                margin: 0 0 40px 0;
                order: 1;
              }

              @media (max-width: 400px) {
                margin: 0 0 30px 0;
              }
            }
            &.navigationColumn {
              @media (max-width: 920px) {
                flex: 50%;
                margin: 0 0 40px 0;
                order: 2;
              }

              @media (max-width: 400px) {
                margin: 0 0 30px 0;
              }
            }
            &.socialColumn {
              @media (max-width: 920px) {
                flex: 50%;
                order: 4;
              }
            }
            &.addressColumn {
              @media (max-width: 1200px) {
                flex: 100%;
                max-width: 100%;
                flex-wrap: wrap;
                flex-direction: row;
                justify-content: space-between;

                & .footer__container__navigationBlock__column {
                  &__title {
                    flex: 100%;
                  }

                  &__text {
                    max-width: 370px;
                  }
                }

                @media (max-width: 920px) {
                  order: 6;
                }
              }
            }

            @media (max-width: 1200px) {
              flex: 1;
              gap: 12px;
            }
          }

          &__button {
            width: 100%;
            background-color: transparent;
            margin: 30px 0 40px 0;
            border-color: $black !important;
            display: none;

            @media (max-width: 1200px) {
              display: flex;
            }

            @media (max-width: 920px) {
              order: 5;
            }

            @media (max-width: 400px) {
              margin: 20px 0 30px 0;
            }
          }

          @media (max-width: 1880px) {
            margin: 0 0 60px 0;
          }

          @media (max-width: 1200px) {
            flex-wrap: wrap;
          }

          @media (max-width: 400px) {
            margin: 0 0 50px 0;
          }
        }

        &__contactTitle {
          font-size: 20.375em;
          font-weight: 500;
          font-family: 'Playfair Display';
          text-transform: uppercase;
          color: $green;
          margin: 0 0 80px 0;

          @media (max-width: 1880px) {
            display: none;
          }
        }

        &__bottomBlock {
          display: flex;
          align-items: center;
          width: 100%;
          position: relative;
          padding: 36px 0 0 0;
          border-top: 1px solid $gray;

          &__paymentBlock {
            display: flex;
            align-items: center;
            gap: 30px;
            width: 100%;

            &__imageButton {
              width: auto;

              &__image {
                width: auto;

                object-fit: cover;
              }
            }

            @media (max-width: 1024px) {
              flex: 50%;
              order: 2;
            }

            @media (max-width: 650px) {
              order: 2;
            }

            @media (max-width: 400px) {
              height: 27px;
              gap: 0;
              justify-content: space-between;
            }
          }

          &__goTopButton {
            position: absolute;
            right: 50%;
            transform: translate(50%, 0);
            display: flex;
            align-items: center;
            gap: 15px;
            font-family: 'Manrope';
            font-size: 30px;
            font-weight: 400;
            line-height: 51px;
            letter-spacing: -2%;
            color: $black;
            text-transform: uppercase;

            &__icon {
              &:deep() {
                svg {
                  @media (max-width: 400px) {
                    height: 25px;
                  }
                }
              }
            }

            @media (max-width: 1024px) {
              order: 1;
              position: static;
              transform: translate(0, 0);
              flex: 100%;
              justify-content: center;
              margin: 0 0 40px 0;
            }

            @media (max-width: 400px) {
              font-size: 25px;
              gap: 10px;
              margin: 0 0 20px 0;
            }
          }

          &__policyButton {
            margin: 0 0 0 auto;
            text-decoration: none;
            font-family: Manrope;
            font-size: 20px;
            font-weight: 400;
            line-height: 34px;
            letter-spacing: -2%;
            color: $gray;
            text-align: end;
            white-space: nowrap;

            @media (max-width: 1024px) {
              flex: 50%;
              order: 3;
            }

            @media (max-width: 768px) {
              max-width: 220px;
              line-height: 100%;
              white-space: normal;
            }

            @media (max-width: 650px) {
              max-width: 100%;
              margin: 0 0 30px 0;
              order: 1;
            }

            @media (max-width: 400px) {
              font-size: 18px;
            }
          }

          @media (max-width: 1024px) {
            flex-wrap: wrap;
          }

          @media (max-width: 1024px) {
            padding: 30px 0 0 0;
          }

          @media (max-width: 768px) {
            align-items: flex-end;
          }

          @media (max-width: 650px) {
            flex-direction: column;
            align-items: center;
          }

          @media (max-width: 400px) {
            padding: 15px 0 0 0;
          }
        }
      }
    }
  }
</style>
