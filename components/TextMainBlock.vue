<template>
  <div class="textMainBlock">
    <Container>
      <ContainerBlock>
        <div class="textMainBlock__container">
          <h1 class="textMainBlock__container__title" v-if="title">{{ title }}</h1>
          <span class="textMainBlock__container__description" v-if="description">
            {{ description }}
          </span>
        </div>
      </ContainerBlock>
    </Container>
  </div>
</template>

<script lang="ts" setup>
  const { title, description } = defineProps({
    title: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
  });
</script>

<style lang="scss" scoped>
  .textMainBlock {
    padding: 180px 0 60px 0;

    @media (max-width: 1024px) {
      padding: 130px 0 30px 0;
    }

    @media (max-width: 550px) {
      padding: 90px 0 30px 0;
    }

    &__container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 30px;

      @media (max-width: 1200px) {
        align-items: flex-start;
        gap: 24px;
      }

      @media (max-width: 768px) {
        gap: 15px;
      }

      &__title {
        font-family: 'Playfair Display';
        font-size: 90px;
        font-weight: 500;
        line-height: 110%;
        letter-spacing: 0%;
        text-align: center;
        text-transform: uppercase;
        color: $black;

        @media (max-width: 1550px) {
          font-size: 82px;
        }

        @media (max-width: 1200px) {
          font-size: 72px;
          text-align: left;
        }

        @media (max-width: 920px) {
          font-size: 62px;
        }

        @media (max-width: 650px) {
          font-size: 42px;
        }
        @media (max-width: 550px) {
          font-size: 30px;
        }
      }
      &__description {
        font-family: Manrope;
        font-size: 22px;
        font-weight: 300;
        line-height: 110%;
        letter-spacing: 0%;
        color: $gray;
        max-width: 600px;

        @media (max-width: 1200px) {
          font-size: 20px;
          text-align: left;
        }

        @media (max-width: 768px) {
          font-size: 18px;
        }
      }
    }
  }
</style>
