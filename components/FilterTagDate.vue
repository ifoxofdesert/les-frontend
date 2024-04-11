<template>
  <div class="filterTagDate">
    <Container>
      <ContainerBlock>
        <div class="filterTagDate__container">
          <div class="filterTagDate__container__tagsBlock">
            <Button
              class="filterTagDate__container__tagsBlock__button"
              :class="{ active: item.active }"
              type="button"
              mod="text"
              v-for="(item, index) in tags"
              @click="$emit('selectTag', ...[index, item])"
            >
              {{ item.name }}
            </Button>
          </div>
          <div class="filterTagDate__container__dateBlock">
            <Button
              class="filterTagDate__container__dateBlock__button"
              type="button"
              mod="angles"
              @click="toogleDatePicker()"
            >
              Выбрать дату
            </Button>
            <VDatePicker
              v-if="openDatepicker"
              class="filterTagDate__container__dateBlock__datePicker"
              v-model="date"
              :attributes="attrs"
            />
          </div>
        </div>
      </ContainerBlock>
    </Container>
  </div>
</template>

<script lang="ts" setup>
  import type { Itags } from '~/types/FilterTagDate.d.ts';

  const { tags } = defineProps({
    tags: {
      type: Array<Itags>,
      defaul: () => [],
    },
  });

  const openDatepicker = ref(false);

  function toogleDatePicker() {
    openDatepicker.value = !openDatepicker.value;
  }

  const date = ref(new Date());

  const attrs = ref([
    {
      highlight: {
        color: 'green',
        fillMode: 'solid',
      },
      dates: new Date(),
    },
  ]);
</script>

<style lang="scss" scoped>
  .filterTagDate {
    &__container {
      display: flex;
      border-top: solid 1px $black;
      border-bottom: solid 1px $black;
      margin: 0 0 43px 0;
      gap: 20px;
      &__tagsBlock {
        display: flex;
        align-items: center;
        gap: 15px;
        &__button {
          font-size: 25px;
          color: $gray;

          &:hover {
            color: $black;
          }

          &.active {
            color: $black;
          }
        }
      }

      &__dateBlock {
        margin: 0 0 0 auto;
        position: relative;

        &__button {
          background-color: $black;
          color: $whitesmoke;
        }
      }
    }
  }
</style>

<style lang="scss">
  .filterTagDate {
    &__container {
      &__dateBlock {
        &__datePicker {
          position: absolute;
        }
      }
    }
  }
</style>
