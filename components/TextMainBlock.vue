<template>
  <div class="textMainBlock">
    <Container>
      <ContainerBlock>
        <div class="textMainBlock__container">
          <h1 class="textMainBlock__container__title">Ознакомьтесь с Мероприятиями и новостями нашего отеля</h1>
          <span class="textMainBlock__container__description">
            Узнайте о наших мероприятиях, развлечениях и экскурсиях заранее. Погрузитесь в мир разнообразия и откройте
            для себя уникальные возможности для получения захватывающих впечатлений.
          </span>
        </div>
      </ContainerBlock>
    </Container>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
  .textMainBlock {
    padding: 180px 0 60px 0;

    &__container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 30px;
      &__title {
        font-family: 'Playfair Display';
        font-size: 90px;
        font-weight: 500;
        line-height: 110%;
        letter-spacing: 0%;
        text-align: center;
        text-transform: uppercase;
        color: $black;
      }
      &__description {
        font-family: Manrope;
        font-size: 22px;
        font-weight: 300;
        line-height: 110%;
        letter-spacing: 0%;
        color: $gray;
        max-width: 600px;
      }
    }
  }
</style>
