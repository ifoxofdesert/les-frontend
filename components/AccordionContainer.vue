<template>
  <div class="accordionContainer">
    <slot />
  </div>
</template>

<script setup lang="ts">
  import type { Iaccordion } from '~/types/Accordion';

  const slots = useSlots();

  function changeAccardion(accordion: Iaccordion) {
    if (slots?.default) {
      const data = slots.default();

      if (data[0].children !== null && data[0].children instanceof Array) {
        const children = data[0].children;

        children.forEach((item: any) => {
          if (item && item?.props) {
            const content = item.props.content;
            if (accordion !== content) {
              content.active = false;
            }
          }
        });
      }
    }
  }

  provide('accordionChange', { changeAccardion });
</script>

<style lang="scss" scoped></style>
