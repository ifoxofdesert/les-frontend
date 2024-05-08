<template>
  <header :class="{ openedMenu }">
    <div class="header" ref="headerRef">
      <Container>
        <ContainerBlock>
          <div class="header__container">
            <Button
              class="header__container__menu"
              mod="text"
              type="button"
              @click="openMenu()"
              v-if="!openedMenu && viewport.isGreaterOrEquals('is_768')"
            >
              Меню
            </Button>
            <NuxtLink to="/" class="header__container__logoButton">
              <img src="assets/images/logo.svg" alt="Санаторий ЛЕС" class="header__container__logoButton__logo" />
            </NuxtLink>

            <IconComponent
              name="burger"
              @click="openMenu()"
              class="header__container__menuMobile"
              v-if="!openedMenu && viewport.isLessThan('is_768')"
            />

            <Button
              url="tel:+78007000906"
              class="header__container__phoneButton"
              mod="text"
              type="external"
              v-if="!cheackOpenedMenuResponse(viewport.isGreaterOrEquals('is_768'))"
            >
              +7 800 700-09-06
            </Button>
            <Button
              class="header__container__closeButton"
              mod="text"
              type="button"
              @click="closeMenu"
              v-if="openedMenu"
            >
              <IconComponent name="close" class="header__container__closeButton__icon" />
            </Button>
          </div>
        </ContainerBlock>
      </Container>
    </div>
    <Transition name="left_fade">
      <BurgerMenu @close="closeMenu()" v-if="openedMenu" />
    </Transition>
  </header>
</template>

<script setup lang="ts">
  const headerRef = ref<HTMLElement>();

  const openedMenu = ref<boolean>(false);

  const viewport = useViewport();

  const noScroll = inject<Function>('noScroll');
  const onScroll = inject<Function>('onScroll');

  let oldScrollY = 0;

  function cheackOpenedMenuResponse(response: boolean) {
    return response ? openedMenu.value : true;
  }

  function wathScrollDocument() {
    if (!openedMenu.value) {
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

  function openMenu() {
    if (typeof noScroll == 'function') {
      noScroll();
    }
    openedMenu.value = true;
  }

  function closeMenu() {
    if (typeof onScroll == 'function') {
      onScroll();
    }
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
        }

        &__closeButton {
          margin: 0 0 0 auto;
          display: none;

          &:active {
            &:deep() {
              path {
                stroke: $green;
              }
            }
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

    &.openedMenu {
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
