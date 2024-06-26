<template>
  <header :class="{ openedPopup }">
    <div class="header" ref="headerRef">
      <Container>
        <ContainerBlock>
          <div class="header__container">
            <Button
              class="header__container__menu"
              mod="text"
              type="button"
              @click="openMenu()"
              v-if="adaptive_1024_to_768"
            >
              Меню
            </Button>
            <NuxtLink to="/" class="header__container__logoButton" v-if="dataGeneral?.header?.logo?.src">
              <img
                :src="useImage(dataGeneral.header.logo.src)"
                :alt="dataGeneral.header.logo.alt"
                class="header__container__logoButton__logo"
              />
            </NuxtLink>

            <IconComponent
              name="burger"
              @click="openMenu()"
              class="header__container__menuMobile"
              v-if="viewport.isLessThan('is_768') && !openedPopup"
            />

            <Button
              :url="`tel:${dataGeneral.header.phone.url}`"
              class="header__container__phoneButton"
              mod="text"
              type="external"
              v-if="dataGeneral?.header?.phone?.text"
            >
              {{ dataGeneral.header.phone.text }}
            </Button>
            <Button
              class="header__container__closeButton"
              mod="text"
              type="button"
              @click="closeMenu"
              v-if="openedPopup"
            >
              <IconComponent name="close" class="header__container__closeButton__icon" />
            </Button>
          </div>
        </ContainerBlock>
      </Container>
    </div>
    <Transition name="left_fade">
      <BurgerMenu @close="closeMenu()" v-show="openedMenu" />
    </Transition>
  </header>
</template>

<script setup lang="ts">
  import type { Igeneral } from '~/types/General';

  const dataGeneral = useState<Igeneral>('dataGeneral');

  const headerRef = ref<HTMLElement>();

  const openedMenu = ref(false);

  const openedPopup = ref(false);

  const viewport = useViewport();

  const adaptive_1024_to_768 = computed(
    () => viewport.isGreaterOrEquals('is_1024') || (viewport.isGreaterOrEquals('is_768') && !openedPopup.value)
  );

  let oldScrollY = 0;

  function wathScrollDocument() {
    if (!openedPopup.value) {
      const noFixedBlock = document.querySelector('.noFixed') as HTMLElement;

      const positionElementOnPage = noFixedBlock?.offsetTop || 0;

      const positionWindow = window.scrollY;

      const heightElement = noFixedBlock?.clientHeight || 0;

      if (oldScrollY > positionWindow && heightElement + positionElementOnPage + 100 < positionWindow) {
        headerRef.value?.classList.add('fixed');
      } else if (oldScrollY < positionWindow || heightElement + positionElementOnPage > positionWindow) {
        headerRef.value?.classList.remove('fixed');
      }

      oldScrollY = positionWindow;
    }
  }

  onMounted(() => {
    oldScrollY = window.scrollY;
    document.addEventListener('scroll', wathScrollDocument);
  });

  useListen('popup:open', () => showHeaderPopup());

  useListen('popup:close', () => hideHeaderPopup());

  function showHeaderPopup() {
    if (viewport.isLessThan('is_1024')) {
      openedPopup.value = true;
    }
  }

  function hideHeaderPopup() {
    openedPopup.value = false;
  }

  function openMenu() {
    useEvent('scroll:no');
    openedMenu.value = true;
    showHeaderPopup();
  }

  function closeMenu() {
    useEvent('popup:close');
    useEvent('scroll:on');
    openedMenu.value = false;
  }
</script>

<style lang="scss" scoped>
  header {
    top: 0;
    position: absolute;
    width: 100%;
    z-index: 5;
    .header {
      width: 100%;
      transition: all ease 0.2s;
      top: -80px;
      &__container {
        width: calc(100% - 80px);
        height: 80px;
        border-radius: 0px 0px 40px 40px;
        background-color: $white;
        display: flex;
        align-items: center;
        padding: 0 40px;
        &__menu {
          font-family: 'Manrope';
          font-size: 25px;
          font-weight: 400;
          line-height: 42px;
          text-transform: uppercase;
          color: $black;
        }

        &__logoButton {
          position: absolute;
          left: 50%;
          transform: translate(-50%, 0);
          &__logo {
            height: 40px;
            object-fit: cover;

            @media (max-width: 768px) {
              height: 36px;
            }

            @media (max-width: 550px) {
              height: 26px;
            }
          }

          @media (max-width: 768px) {
            position: static;
            left: 0;
            transform: translate(0, 0);
          }

          @media (max-width: 768px) {
            order: 1;
          }
        }

        &__phoneButton {
          margin: 0 0 0 auto;
          text-decoration: none;
          font-family: 'Manrope';
          font-size: 25px;
          font-weight: 400;
          line-height: 42px;
          color: $black;
          text-transform: uppercase;

          @media (max-width: 768px) {
            order: 2;
            font-size: 18px;
          }

          @media (max-width: 380px) {
            order: 2;
            font-size: 14px;
          }
        }

        &__closeButton {
          margin: 0 0 0 auto;
          display: none;
          width: 45px;

          &:active {
            &:deep() {
              path {
                stroke: $green;
              }
            }
          }

          @media (max-width: 768px) {
            order: 3;
          }

          @media (max-width: 550px) {
            &:deep() {
              svg {
                height: 18px;
              }
            }
          }
        }

        &__menuMobile {
          display: none;
          margin: 0 0 0 auto;
          @media (max-width: 768px) {
            display: flex;
            order: 3;
          }

          @media (max-width: 550px) {
            &:deep() {
              svg {
                height: 16px;
              }
            }
          }
        }

        @media (max-width: 650px) {
          height: 75px;
          border-radius: 0px 0px 30px 30px;
          padding: 0 20px;
          width: calc(100% - 40px);
        }

        @media (max-width: 550px) {
          height: 45px;
          border-radius: 0px 0px 20px 20px;
          padding: 0 10px;
          width: calc(100% - 20px);
        }
      }

      &.fixed {
        position: fixed;
        top: 0;
      }
      @media (max-width: 1024px) {
        z-index: 6;
      }
    }

    @media (max-width: 1024px) {
      z-index: 6;
    }

    &.openedPopup {
      .header {
        position: fixed;
        top: 0 !important;
        @media (max-width: 1024px) {
          &__container {
            &__closeButton {
              display: flex;
            }
            &__logoButton {
              position: static;
              transform: translate(0, 0);
            }
          }
        }
      }
    }
  }
</style>
