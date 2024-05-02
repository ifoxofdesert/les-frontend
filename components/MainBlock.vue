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
          <Button
            class="mainBlock__contentBlock__button"
            mod="white"
            type="external"
            url="#"
            data-tl-booking-open="true"
          >
            Забронировать номер
            <IconComponent name="arrow_right" />
          </Button>
        </div>
      </ContainerBlock>
    </Container>
  </div>
</template>

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

        @media (max-width: 1550px) {
          font-size: 100px;
        }

        @media (max-width: 1100px) {
          font-size: 72px;
        }

        @media (max-width: 920px) {
          font-size: 62px;
        }

        @media (max-width: 690px) {
          display: block;
          float: left;
          text-align: right;
          margin: 0 0 20px 0;
        }

        @media (max-width: 650px) {
          font-size: 42px;
        }
        @media (max-width: 550px) {
          font-size: 30px;
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

        @media (max-width: 1550px) {
          font-size: 32px;
        }

        @media (max-width: 920px) {
          margin: -44px 0 0 0;
          flex-direction: column;
          align-items: flex-start;
          line-height: 50%;
          font-size: 18px;
        }

        @media (max-width: 690px) {
          margin: 0;
          flex-direction: row;
          justify-content: space-between;
        }
      }

      &__button {
        width: 100%;
        margin: 64px 0 0 0;

        @media (max-width: 690px) {
          margin: 30px 0 0 0;
        }
      }
    }

    @media (max-width: 550px) {
      margin: 0 0 80px 0;
    }
  }
</style>
