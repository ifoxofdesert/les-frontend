<template>
  <div class="structureBlock">
    <div class="structureBlock__navigationBlock">
      <h1 class="structureBlock__navigationBlock__title" v-if="title">{{ title }}</h1>
      <span class="structureBlock__navigationBlock__lastUpdate" v-if="lastUpdate">
        Последнее редактирование:
        {{
          formatingDateTime(lastUpdate, {
            onYear: true,
          })
        }}
      </span>

      <div class="structureBlock__navigationBlock__container">
        <Button
          class="structureBlock__navigationBlock__container__buttons"
          mod="navigation"
          type="button"
          v-for="item in navigations"
          :class="{ active: item.active }"
          @click="changeTab(item.key)"
        >
          {{ item.title }}
        </Button>
      </div>
    </div>
    <div class="structureBlock__contentContainer">
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
  import type { Inavigations } from '~/types/InfoPages';

  const { title, lastUpdate, navigations } = defineProps({
    title: {
      type: String,
      default: '',
    },

    lastUpdate: {
      type: String,
      default: '',
    },
    navigations: {
      type: Array as () => Inavigations[],
      default: [],
    },
  });

  const { formatingDateTime } = useFormating();

  const emit = defineEmits(['changeTab']);

  function changeTab(key: string | number) {
    emit('changeTab', key);
  }
</script>

<style lang="scss" scoped>
  .structureBlock {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 0 0 150px 0;
    gap: 0 100px;
    &__navigationBlock {
      max-width: 655px;
      width: 100%;
      display: flex;
      flex-direction: column;
      &__title {
        font-family: 'Playfair Display';
        font-size: 60px;
        font-weight: 600;
        line-height: 110%;
        text-transform: uppercase;
        color: $black;
        margin: 0 0 30px 0;
      }

      &__lastUpdate {
        font-family: Manrope;
        font-size: 20px;
        font-weight: 300;
        line-height: 110%;
        color: $gray;
      }

      &__container {
        margin: 110px 0 0 0;
        display: flex;
        flex-direction: column;
        gap: 15px;
        &__buttons {
        }
      }
    }

    &__contentContainer {
      max-width: 1078px;
      width: 100%;
      display: flex;
      flex-direction: column;
    }
  }
</style>
