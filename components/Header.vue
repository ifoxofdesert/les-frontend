<template>
  <header>
    <div class="header">
      <Container>
        <ContainerBlock>
          <div class="header__container">
            <button class="header__container__menu">Меню</button>
            <NuxtLink to="/index.vue" class="header__container__logoButton">
              <img src="assets/images/logo.png" alt="Санаторий ЛЕС" class="header__container__logoButton__logo"
            /></NuxtLink>
            <a href="tel:+78007000906" class="header__container__phoneButton">+7 800 700-09-06</a>
          </div>
        </ContainerBlock>
      </Container>
    </div>
  </header>
</template>

<script setup lang="ts">
  import Container from './Container.vue';
  import ContainerBlock from './ContainerBlock.vue';
  //   import IconComponent from './IconComponent.vue';
</script>

<style lang="scss" scoped>
  header {
    top: 0;
    position: absolute;
    width: 100%;
    z-index: 5;
    .header {
      width: 100%;
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
    }
  }
</style>
