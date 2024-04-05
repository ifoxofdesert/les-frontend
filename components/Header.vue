<template>
  <header>
    <div class="header" ref="headerRef">
      <Container>
        <ContainerBlock>
          <div class="header__container">
            <Button class="header__container__menu" mod="text" type="button">Меню</Button>
            <NuxtLink to="/" class="header__container__logoButton">
              <img src="assets/images/logo.png" alt="Санаторий ЛЕС" class="header__container__logoButton__logo" />
            </NuxtLink>

            <Button src="tel:+78007000906" class="header__container__phoneButton" mod="text" type="external">
              +7 800 700-09-06
            </Button>
          </div>
        </ContainerBlock>
      </Container>
    </div>
  </header>
</template>

<script setup lang="ts">
  const headerRef = ref<HTMLElement>();

  let oldScrollY = 0;

  function wathScrollDocument() {
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

  onMounted(() => {
    oldScrollY = window.scrollY;
    document.addEventListener('scroll', wathScrollDocument);
  });
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
      }

      &.fixed {
        position: fixed;
        top: 0;
      }
    }
  }
</style>
