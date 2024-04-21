<template>
  <div class="accordion" :class="{ active: item.active }" v-for="(item, index) in content">
    <span class="accordion__title" @click="toogleAccordion(index)">
      {{ item.title }}
      <IconComponent name="union" class="accordion__title__icon" />
    </span>
    <Transition
      name="accordion"
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter"
      @before-leave="beforeLeave"
      @leave="leave"
    >
      <div class="accordion__content" v-if="item.active">
        <span class="accordion__content__text" v-html="item.text" />
      </div>
    </Transition>
  </div>
</template>

<script lang="ts" setup>
  import type { Iaccordion } from '~/types/Accordion';
  import type { RendererElement } from 'vue';

  const { content } = defineProps({
    content: {
      type: Array as () => Iaccordion[],
      default: () => [],
    },

    title: {
      type: String,
      default: '',
    },

    description: {
      type: String,
      default: '',
    },
  });

  function toogleAccordion(index: number) {
    content.forEach((item, i) => {
      if (index !== i) {
        item.active = false;
      }
    });

    content[index].active = !content[index].active;
  }

  function beforeEnter(el: RendererElement | HTMLElement) {
    el.style.height = '0';
  }
  function enter(el: RendererElement | HTMLElement) {
    el.style.height = el.scrollHeight + 'px';
  }
  function afterEnter(el: RendererElement | HTMLElement) {
    el.style.height = 'auto';
  }
  function beforeLeave(el: RendererElement | HTMLElement) {
    el.style.height = el.scrollHeight + 'px';
  }
  function leave(el: RendererElement | HTMLElement) {
    el.style.height = '0';
  }
</script>

<style lang="scss" scoped></style>
