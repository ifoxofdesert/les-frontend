<template>
  <div class="burgerMenu" @click="checkClickDropDown">
    <div class="burgerMenu__block">
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
                v-if="dataGeneral?.header?.menu?.length"
                class="burgerMenu__container__menuBlock__button"
                v-for="(item, index) in dataGeneral.header.menu"
                :type="item.isTravel ? 'external' : 'internal'"
                @click="$emit('close')"
                :[checkIsTravel(item.isTravel)]="item.isTravel"
                mod="text link"
                :url="item.url"
              >
                {{ item.text }}
                <span class="burgerMenu__container__menuBlock__button__number">{{ formatingNumber(index + 1) }}</span>
              </Button>
            </div>
            <div
              class="burgerMenu__container__mobilePhoneBlock"
              v-if="viewport.isLessThan('is_768') && dataGeneral?.header?.phone?.text"
            >
              <Button
                :url="`tel:${dataGeneral.header.phone.url}`"
                class="burgerMenu__container__mobilePhoneBlock__button"
                mod="text"
                type="external"
              >
                {{ dataGeneral.header.phone.text }}
              </Button>
            </div>
            <div class="burgerMenu__container__socialsBlock">
              <Button
                v-for="item in dataGeneral.header?.socials"
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
    <img
      v-if="dataGeneral.header?.burgerBackground?.src"
      :src="useImage(dataGeneral.header?.burgerBackground.src)"
      :alt="dataGeneral.header?.burgerBackground.alt"
      class="burgerMenu__backgroun"
      @click="$emit('close')"
    />
  </div>
</template>

<script lang="ts" setup>
  import type { Igeneral } from '~/types/General';

  const dataGeneral = useState<Igeneral>('dataGeneral');

  const emit = defineEmits(['close']);

  const { formatingNumber } = useFormating();

  const viewport = useViewport();

  function checkClickDropDown(e: Event) {
    const target = e.target as HTMLButtonElement;

    if (!target.closest('.burgerMenu__block') && !target.closest('.burgerMenu__backgroun')) {
      emit('close');
    }
  }

  function checkIsTravel(check: boolean | undefined) {
    return check ? 'data-tl-booking-open' : '';
  }
</script>

<style lang="scss" scoped>
  .burgerMenu {
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 5;
    height: 100%;
    display: flex;

    &__backgroun {
      object-fit: cover;
      width: 100%;
      height: 100%;

      @media (max-width: 1045px) {
        display: none;
      }
    }

    &__block {
      background-color: $gray-mercury;
      opacity: 0.98;
      width: 100%;
      max-width: 1045px;
      width: 100%;
      flex: none;
    }

    .burgerMenu__container {
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

            @media (max-width: 1550px) {
              margin: 20px 0 0 0;
            }
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
            color: $green;
            &::before {
              opacity: 1;
              min-width: 15px;
              height: 15px;
            }
          }

          &.router-link-active {
            &::before {
              opacity: 1;
              min-width: 15px;
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
