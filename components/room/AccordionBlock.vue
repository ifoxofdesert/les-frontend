<template>
  <div class="accordionBlock">
    <h2 class="accordionBlock__title" v-if="title?.first || title?.second">
      {{ title.first }}
      <span v-if="title.second">{{ title.second }}</span>
    </h2>

    <span class="titleDescription__description" v-if="description">{{ description }}</span>
    <span class="accordionBlock__description" v-if="description">{{ description }}</span>
    <RoomAccordion v-if="accordion.length" :content="accordion" />
  </div>
</template>

<script lang="ts" setup>
  import type { Iaccordion } from '~/types/Accordion';
  import type { ItitleCutom } from '~/types/General';

  const { title, description, accordion } = defineProps({
    accordion: {
      type: Array as () => Iaccordion[],
      default: () => [],
    },

    title: {
      type: Object as () => ItitleCutom,
      default: '',
    },

    description: {
      type: String,
      default: '',
    },
  });
</script>

<style lang="scss" scoped></style>
