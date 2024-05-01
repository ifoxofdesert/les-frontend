<template>
  <div class="burgerMenu">
    <Container>
      <ContainerBlock>
        <div class="burgerMenu__container">
          <Button
            class="burgerMenu__container__clsoe"
            type="button"
            mod="text"
            @click="$emit('close')"
            v-if="viewport.isGreaterOrEquals('is_1024')"
          >
            Закрыть
          </Button>

          <div class="burgerMenu__container__menuBlock">
            <Button
              class="burgerMenu__container__menuBlock__button"
              v-for="(item, index) in menu"
              type="internal"
              mod="text"
              :url="item.href"
            >
              {{ item.text }}
              <span class="burgerMenu__container__menuBlock__button__number">{{ formatingNumber(index + 1) }}</span>
            </Button>
          </div>
          <div class="burgerMenu__container__mobilePhoneBlock" v-if="viewport.isLessThan('is_768')">
            <Button
              url="tel:+78007000906"
              class="burgerMenu__container__mobilePhoneBlock__button"
              mod="text"
              type="external"
            >
              +7 800 700-09-06
            </Button>
          </div>
          <div class="burgerMenu__container__socialsBlock">
            <Button
              v-for="item in socials"
              class="burgerMenu__container__socialsBlock__button"
              type="external"
              mod="text_green"
              :url="item.url"
            >
              {{ item.text }}
            </Button>
          </div>
        </div>
      </ContainerBlock>
    </Container>
  </div>
</template>

<script lang="ts" setup>
  const emit = defineEmits(['close']);

  const menu = [
    {
      text: 'Номера',
      href: '/',
    },
    {
      text: 'Афиша',
      href: '/',
    },
    {
      text: 'Спецпредложения',
      href: '/',
    },
    {
      text: 'Новости',
      href: '/',
    },
    {
      text: 'Контакты',
      href: '/',
    },
    {
      text: 'Забронировать',
      href: '/',
    },
    {
      text: 'Внести предоплату',
      href: '/',
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

  const { formatingNumber } = useFormating();

  const viewport = useViewport();

  function checkClickDropDown(e: Event) {
    const target = e.target as HTMLButtonElement;

    if (
      !target.closest('.burgerMenu') &&
      !target.closest('.header__container__menu') &&
      !target.closest('.header') &&
      !target.closest('.header__container__menuMobile')
    ) {
      emit('close');
    }
  }

  onMounted(() => {
    document.addEventListener('click', checkClickDropDown);
  });

  onUnmounted(() => {
    document.removeEventListener('click', checkClickDropDown);
  });
</script>

<style lang="scss" scoped>
  .burgerMenu {
    max-width: 1045px;
    width: 100%;
    background-color: $gray-mercury;
    opacity: 0.98;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 5;
    height: 100%;

    &__container {
      width: 100%;
      padding: 33px 0 43px 0;
      height: calc(100vh - 76px);
      display: flex;
      flex-direction: column;
      &__clsoe {
        text-transform: uppercase;
        margin: 0 0 77px 0;

        @media (max-width: 1024px) {
          display: none;
        }
      }

      &__menuBlock {
        display: flex;
        flex-direction: column;
        gap: 25px;
        &__button {
          position: relative;
          font-family: 'Playfair Display';
          font-size: 70px;
          font-weight: 400;
          line-height: 110%;
          text-transform: uppercase;
          color: $gray;
          align-items: flex-start;

          &::before {
            content: '';
            height: 0px;
            border-radius: 360px;
            background-color: $green;
            margin: 35px 0 0 0;
            opacity: 0;
            width: 0;
            transition: all ease 0.2s;
          }

          &__number {
            margin: 6px 0 0 0;
            font-family: Manrope;
            font-size: 20px;
            font-weight: 400;
            line-height: 110%;
            text-transform: uppercase;

            @media (max-width: 1550px) {
              margin: 0;

              font-size: 16px;
            }

            @media (max-width: 650px) {
              font-size: 14px;
            }

            @media (max-width: 550px) {
              font-size: 12px;
            }
          }

          &:hover {
            &::before {
              opacity: 1;
              width: 15px;
              height: 15px;
            }
          }

          @media (max-width: 1550px) {
            font-size: 45px;
          }

          @media (max-width: 1024px) {
            &::before {
              display: none;
            }
          }

          @media (max-width: 650px) {
            gap: 5px;

            font-size: 28px;
          }

          @media (max-width: 550px) {
            font-size: 22px;
          }
        }

        @media (max-width: 1024px) {
          margin: auto 0 0 0;
        }
      }

      &__socialsBlock {
        margin: auto 0 0 0;
        display: flex;
        align-items: center;
        gap: 30px;

        &__button {
          @media (max-width: 650px) {
            font-size: 14px;
          }
        }

        @media (max-width: 768px) {
          margin: 0;
        }
      }

      &__mobilePhoneBlock {
        display: none;
        flex-direction: column;
        width: 100%;
        margin: auto 0 35px 0;

        &__button {
          text-decoration: none;
          font-family: 'Manrope';
          font-size: 35px;
          font-weight: 400;
          line-height: 42px;
          color: $black;
          text-transform: uppercase;

          @media (max-width: 650px) {
            font-size: 20px;
            line-height: 100%;
          }
        }

        @media (max-width: 768px) {
          display: flex;
        }

        @media (max-width: 650px) {
          margin: auto 0 25px 0;
        }
      }
    }
  }
</style>
