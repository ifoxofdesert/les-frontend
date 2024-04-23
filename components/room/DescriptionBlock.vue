<template>
  <div class="descriptionBlock">
    <span class="descriptionBlock__text" v-if="text">{{ text }}</span>
    <Button class="descriptionBlock__button" mod="green" type="external" url="#" data-tl-booking-open="true">
      Забронировать номер
      <IconComponent name="arrow_right" />
    </Button>
  </div>
</template>

<script lang="ts" setup>
  const { text } = defineProps({
    text: {
      type: String,
      default: '',
    },
  });
</script>

<style lang="scss" scoped>
  .descriptionBlock {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 30px;

    &__text {
      color: $gray;
      font-family: 'Manrope';
      font-size: 22px;
      font-style: normal;
      font-weight: 400;
      line-height: 110%;
      max-width: 600px;
      width: 100%;
    }

    &__button {
      margin: 0 0 0 auto;
      &:deep() {
        svg {
          path {
            fill: $whitesmoke;
          }
        }

        &:hover {
          svg {
            path {
              fill: $black;
            }
          }
        }
      }
    }
  }
</style>
