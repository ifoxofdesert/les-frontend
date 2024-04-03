<template>
  <footer>
    <div class="footer">
      <Container>
        <ContainerBlock>
          <div class="footer__container">
            <div class="footer__container__navigationBlock">
              <div class="footer__container__navigationBlock__column phonesColumn">
                <span class="footer__container__navigationBlock__column__title">Телефон</span>
                <a
                  v-for="item in phones"
                  :href="`tel:${item.url}`"
                  class="footer__container__navigationBlock__column__button"
                >
                  {{ item.text }}
                </a>
              </div>
              <div class="footer__container__navigationBlock__column menuColumn">
                <span class="footer__container__navigationBlock__column__title">Меню</span>
                <NuxtLink
                  v-for="item in menu"
                  :to="item.url"
                  class="footer__container__navigationBlock__column__button"
                >
                  {{ item.text }}
                </NuxtLink>
              </div>

              <div class="footer__container__navigationBlock__column navigationColumn">
                <span class="footer__container__navigationBlock__column__title">Навигация</span>
                <NuxtLink
                  v-for="item in navigation"
                  :to="item.url"
                  class="footer__container__navigationBlock__column__button"
                >
                  {{ item.text }}
                </NuxtLink>
              </div>

              <div class="footer__container__navigationBlock__column socialColumn">
                <span class="footer__container__navigationBlock__column__title">Соц.Сети</span>
                <a
                  v-for="item in socials"
                  :href="item.url"
                  target="_blank"
                  class="footer__container__navigationBlock__column__button"
                >
                  {{ item.text }}
                </a>
              </div>

              <div class="footer__container__navigationBlock__column addressColumn">
                <span class="footer__container__navigationBlock__column__title">Адрес</span>
                <span class="footer__container__navigationBlock__column__text">
                  Крым, г. Алушта, Профессорский уголок, ул. Глазкрицкого, 17
                </span>

                <NuxtLink to="/" class="footer__container__navigationBlock__column__mapButton">
                  <IconComponent name="point" class="footer__container__navigationBlock__column__mapButton__icon" />
                  Посмотреть на карте
                </NuxtLink>
              </div>
            </div>
            <span class="footer__container__contactTitle"> Контакты </span>

            <div class="footer__container__bottomBlock">
              <div class="footer__container__bottomBlock__paymentBlock">
                <a
                  v-for="item in payments"
                  :href="item.url"
                  class="footer__container__bottomBlock__paymentBlock__imageButton"
                >
                  <img
                    :src="item.image"
                    :alt="item.alt"
                    class="footer__container__bottomBlock__paymentBlock__imageButton__image"
                  />
                </a>
              </div>

              <button class="footer__container__bottomBlock__goTopButton">
                Вернутся в начало
                <IconComponent name="circleUpArrow" class="footer__container__bottomBlock__goTopButton__icon" />
              </button>

              <NuxtLink to="/" class="footer__container__bottomBlock__policyButton">
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
  import Container from './Container.vue';
  import ContainerBlock from './ContainerBlock.vue';
  import IconComponent from './IconComponent.vue';

  const phones = [
    {
      text: '+7 978 50-872-50',
      url: '+79785087250',
    },
    {
      text: '+7(36560) 777-50',
      url: '+73656077750',
    },
    {
      text: '+7 800 700-09-06',
      url: '+78007000906',
    },
  ];

  const menu = [
    {
      text: 'Номера',
      url: '/',
    },
    {
      text: 'Афиша',
      url: '/',
    },
    {
      text: 'Спецпредложения',
      url: '/',
    },
    {
      text: 'Новости',
      url: '/',
    },
  ];

  const navigation = [
    {
      text: 'Вакансии',
      url: '/',
    },
    {
      text: 'Имущество отеля',
      url: '/',
    },
    {
      text: 'Правила проживания',
      url: '/',
    },
    {
      text: 'Правила размещения',
      url: '/',
    },
    {
      text: 'Юридическая информация',
      url: '/',
    },
  ];

  const socials = [
    {
      text: 'VKontakte',
      url: '/',
    },
    {
      text: 'Telegram',
      url: '/',
    },
    {
      text: 'Tripadvisor',
      url: '/',
    },
  ];

  const address = 'Крым, г. Алушта, Профессорский уголок, ул. Глазкрицкого, 17';

  const payments = [
    {
      image: '/_nuxt/assets/images/visa.png',
      alt: 'Виза',
      url: '/',
    },
    {
      image: '/_nuxt/assets/images/mir.png',
      alt: 'мир',
      url: '/',
    },
    {
      image: '/_nuxt/assets/images/master.png',
      alt: 'мастер',
      url: '/',
    },
    {
      image: '/_nuxt/assets/images/logo-yookassa.png',
      alt: 'ю касса',
      url: '/',
    },
  ];
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
            }

            &__button {
              font-family: 'Manrope';
              font-size: 18px;
              font-weight: 400;
              color: $black;
              line-height: 30px;
              letter-spacing: -0.02em;
              text-decoration: none;
            }

            &__text {
              font-family: 'Manrope';
              font-size: 18px;
              font-weight: 400;
              color: $black;
              line-height: 30px;
              letter-spacing: -0.02em;
            }

            &__mapButton {
              margin: 5px 0 0 0;
              display: flex;
              align-items: center;
              gap: 10px;
              font-family: 'Manrope';
              font-size: 18px;
              font-weight: 400;
              color: $green;
            }

            &.phonesColumn {
              .footer__container__navigationBlock__column__button {
                font-size: 20px;
              }
            }
            &.menuColumn {
            }
            &.navigationColumn {
            }
            &.socialColumn {
            }
            &.addressColumn {
            }
          }
        }

        &__contactTitle {
          font-size: 20.375em;
          font-weight: 500;
          font-family: 'Playfair Display';
          text-transform: uppercase;
          color: $green;
          margin: 0 0 80px 0;
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
            &__imageButton {
              &__image {
                object-fit: cover;
              }
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
          }
        }
      }
    }
  }
</style>
