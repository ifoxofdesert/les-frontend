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
