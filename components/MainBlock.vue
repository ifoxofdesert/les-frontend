<template>
  <div class="mainBlock noFixed">
    <Container>
      <img src="assets/images/DSC_3610.jpg" alt="Обложка" class="mainBlock__backgroundImage" />
      <ContainerBlock>
        <div class="mainBlock__contentBlock">
          <h1 class="mainBlock__contentBlock__title">
            Природа снаружи —
            <span>Уют внутри</span>
          </h1>
          <span class="mainBlock__contentBlock__coordinate">
            <span>44º65′33″63.N</span>
            <span>34º39′48″30.E</span>
          </span>
          <Button class="mainBlock__contentBlock__button" mod="white" type="button">
            Забронировать номер
            <IconComponent name="arrow_right" />
          </Button>
        </div>
      </ContainerBlock>
    </Container>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
  .mainBlock {
    width: 100%;
    position: relative;
    height: 100vh;
    display: flex;
    flex-direction: column;
    margin: 0 0 100px 0;
    &__backgroundImage {
      position: absolute;
      top: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      z-index: 0;
    }

    &__contentBlock {
      position: relative;
      display: flex;
      flex-direction: column;
      width: 100%;
      z-index: 1;
      height: 100vh;
      justify-content: flex-end;
      bottom: 50px;

      &__title {
        color: $whitesmoke;
        font-family: 'Playfair Display';
        font-size: 150px;
        font-weight: 400;
        line-height: 110%;
        display: flex;
        flex-direction: column;
        margin: 0;
        span {
          text-align: right;
          font-style: italic;
        }
      }

      &__coordinate {
        display: flex;
        align-items: center;
        gap: 20px;
        color: $whitesmoke;
        font-family: 'Playfair Display';
        font-style: italic;
        font-size: 40px;
        font-weight: 400;
        line-height: 110%;
        margin: -70px 0 0;
      }

      &__button {
        width: 100%;
        margin: 64px 0 0 0;
      }
    }
  }
</style>
