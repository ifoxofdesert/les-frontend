<template>
  <div class="accordion" :class="{ active: item.active }" v-for="(item, index) in content">
    <span class="accordion__title" @click="toogleAccordion(index)">
      {{ formatingNumber(index + 1) }}
      <span>{{ item.title }}</span>
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

  const { formatingNumber } = useFormating();

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
    position: relative;
    padding: 23px 0 30px 0;
    border-bottom: 1px solid $black;

    &:first-of-type {
      border-top: 1px solid $black;
    }

    &::before {
      position: absolute;
      content: '';
      background-color: transparent;
      width: calc(100% + 80px);
      height: 100%;
      left: -40px;
      z-index: -1;
      transition: all ease 0.2s;
      top: 0;
    }

    &__title {
      font-family: 'Manrope';
      font-size: 22px;
      font-weight: 500;
      line-height: 110%;
      letter-spacing: 0%;
      color: $gray;
      text-transform: uppercase;
      display: flex;
      align-items: center;
      margin-bottom: 0;
      transition: all ease 0.5s;
      cursor: pointer;

      &__icon {
        transition: all ease 0.5s;
        transform: rotate(-90deg);
        margin: 0 0 0 auto;
      }

      span {
        color: $black;
        font-family: 'Playfair Display';
        font-size: 40px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        margin: 0 0 0 597px;
      }
    }

    &__content {
      display: flex;
      flex-direction: column;
      overflow: hidden;
      margin: 0 0 0 610px;

      &__text {
        color: $whitesmoke;
        font-family: 'Manrope';
        font-size: 22px;
        font-weight: 300;
        line-height: 37px;

        ul {
          display: flex;
          flex-direction: column;
        }
      }
    }

    &.active {
      border-width: 0px;
      &::before {
        background-color: $green;
      }

      .accordion__title {
        color: $whitesmoke;
        margin-bottom: 30px;

        span {
          color: $whitesmoke;
        }
      }

      .accordion__title__icon {
        transform: rotate(0deg);
        &:deep() {
          path {
            fill: $whitesmoke;
          }
        }
      }
    }
  }
</style>
