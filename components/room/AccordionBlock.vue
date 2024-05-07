<template>
  <div class="accordionBlock">
    <h2 class="accordionBlock__title" v-if="title?.first || title?.second">
      {{ title.first }}
      <span v-if="title.second">{{ title.second }}</span>
    </h2>
    <span class="accordionBlock__description" v-if="description">{{ description }}</span>
    <RoomAccordion v-if="accordion.length" :content="accordion" />
  </div>
</template>

<script lang="ts" setup>
  import type { Iaccordion } from '~/types/Accordion';
  import type { ItitleCustom } from '~/types/General';

  const { title, description, accordion } = defineProps({
    accordion: {
      type: Array as () => Iaccordion[],
      default: () => [],
    },

    title: {
      type: Object as () => ItitleCustom,
      default: '',
    },

    description: {
      type: String,
      default: '',
    },
  });
</script>

<style lang="scss" scoped>
  .accordionBlock {
    display: flex;
    flex-direction: column;
    width: 100%;
    &__title {
      display: flex;
      flex-direction: column;
      color: $black;
      font-family: 'Playfair Display';
      font-size: 90px;
      font-style: normal;
      font-weight: 500;
      line-height: 100%;
      text-transform: uppercase;
      margin: 0 0 30px 417px;

      span {
        margin: 0 0 0 201px;
      }
    }

    &__description {
      color: $gray;
      font-family: Manrope;
      font-size: 22px;
      font-style: normal;
      font-weight: 300;
      line-height: 110%;
      margin: 0 0 60px 620px;
      max-width: 580px;
    }
  }
</style>
