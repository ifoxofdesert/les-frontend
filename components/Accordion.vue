<template>
  <div class="accordion" :class="{ active: item.active }" v-for="(item, index) in content">
    <span class="accordion__title" @click="toogleAccordion(index)" :class="type">
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
  import type { RendererElement } from 'vue';
  import type { Iaccordion } from '~/types/Accordion';

  const { content } = defineProps({
    content: {
      type: Array as () => Iaccordion[],
      default: () => [],
    },

    type: {
      type: String as () => 'titleDot' | 'none',
      default: 'none',
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

<style lang="scss" scoped>
  .accordion {
    width: 100%;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    margin: 0 0 35px 0;
    &__title {
      cursor: pointer;
      font-family: 'Playfair Display';
      font-size: 30px;
      font-weight: 400;
      line-height: 40px;
      color: $black;
      padding: 0 0 14px 0;
      display: flex;
      border-bottom: 1px solid $gray;
      margin: 0 0 20px 0;
      position: relative;

      &.titleDot {
        &:before {
          content: '';
          width: 12px;
          height: 12px;
          display: flex;
          flex-direction: column;
          border-radius: 360px;
          background-color: $black;
          position: relative;
          margin: 0 10px 0 0;
          top: 15px;
        }
      }

      &__icon {
        transition: all ease 0.5s;
        transform: scale(-1) scaleX(-1);
        margin: 7px 0 0 auto;
      }
    }

    &__content {
      display: flex;
      flex-direction: column;
      &__text {
        font-family: Manrope;
        font-size: 22px;
        font-weight: 300;
        line-height: 110%;
        color: $black;

        &:deep() {
          ul {
            display: flex;
            flex-direction: column;
            gap: 11px;
            padding: 0 0 0 22px;

            li {
              &::marker {
                color: $lightGreen;
              }
            }
          }
        }
      }
    }

    &.active {
      .questionsBlock__container__accordionContainer__accordion__title__icon {
        transform: scale(1) scaleX(1);
        align-items: flex-end;
      }
    }
  }
</style>
