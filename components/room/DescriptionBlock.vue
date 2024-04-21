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

<style lang="scss" scoped></style>
