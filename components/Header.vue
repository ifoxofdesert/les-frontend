<template>
  <header>
    <div class="header">
      <Container>
        <ContainerBlock>
          <div class="header__container">
            <Button class="header__container__menu" mod="green" type="button"> Меню </Button>
            <img src="assets/images/logo.png" alt="Санаторий ЛЕС" class="header__container__logo" />
            <a href="#" class="header__container__phoneButton">+7 800 700-09-06</a>
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
  import Button from './Button.vue';
</script>
