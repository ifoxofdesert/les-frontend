<template>
  <div class="filterTagDate">
    <Container class="filterTagDate__mainContainer">
      <ContainerBlock>
        <div class="filterTagDate__container">
          <div class="filterTagDate__container__tagsBlock">
            <Button
              class="filterTagDate__container__tagsBlock__button"
              :class="{ active: item.active }"
              type="button"
              mod="text"
              v-for="(item, index) in tags"
              @click="$emit('selectTag', index, item)"
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
              @dayclick="updateDate()"
              :attributes="attrs"
              :isDark="true"
            />
          </div>
        </div>
      </ContainerBlock>
    </Container>
  </div>
</template>

<script lang="ts" setup>
  import type { Itags } from '~/types/FilterTagDate.d.ts';

  const { tags, dates, selectedDate } = defineProps({
    tags: {
      type: Array<Itags>,
      defaul: () => [],
    },
    dates: {
      type: Array<string>,
      defaul: [],
    },
    selectedDate: {
      type: String as () => string | undefined,
      default: '',
    },
  });

  function getISOMiniRu(date: string) {
    if (date) {
      const dat = new Date(date);
      dat.setHours(dat.getHours() + 3);
      return dat.toISOString().slice(0, 10);
    } else {
      return '';
    }
  }

  const emit = defineEmits<{
    (eventName: 'updateDate', date: string): string;
    (eventName: 'selectTag', index: number, item: Itags): { index: number; item: Itags };
  }>();

  const getUniqueDates = computed(() => {
    return [...new Set(dates?.map((item) => getISOMiniRu(item)))];
  });

  const openDatepicker = ref(false);

  function toogleDatePicker() {
    openDatepicker.value = !openDatepicker.value;
  }

  const date = ref(selectedDate || '');

  function updateDate() {
    emit('updateDate', getISOMiniRu(date.value));
  }

  const attrs = ref([
    {
      highlight: {
        color: 'green',
        fillMode: 'solid',
      },
    },
    {
      dot: true,
      dates: getUniqueDates.value,
    },
  ]);

  function checkClickDropDown(e: Event) {
    const target = e.target as HTMLButtonElement;

    if (
      !target.closest('.filterTagDate__container__dateBlock__datePicker') &&
      !target.closest('.filterTagDate__container__dateBlock__button')
    ) {
      openDatepicker.value = false;
    }
  }

  onMounted(() => {
    document.addEventListener('click', checkClickDropDown);
  });

  onUnmounted(() => {
    document.removeEventListener('click', checkClickDropDown);
  });
</script>

<style lang="scss" scoped>
  .filterTagDate {
    &__mainContainer {
      overflow: visible;
    }
    &__container {
      display: flex;
      border-top: solid 1px $black;
      border-bottom: solid 1px $black;
      margin: 0 0 43px 0;
      gap: 20px;

      @media (max-width: 1024px) {
        gap: 15px;
      }

      @media (max-width: 550px) {
        gap: 10px;
      }

      &__tagsBlock {
        display: flex;
        align-items: center;
        gap: 15px;

        @media (max-width: 550px) {
          gap: 10px;
        }

        &__button {
          font-size: 25px;
          color: $gray;

          &:hover {
            color: $black;
          }

          &.active {
            color: $black;
          }

          @media (max-width: 1024px) {
            font-size: 18px;
          }

          @media (max-width: 768px) {
            font-size: 15px;
          }

          @media (max-width: 550px) {
            font-size: 12px;
          }
        }
      }

      &__dateBlock {
        margin: 0 0 0 auto;
        position: relative;

        .filterTagDate__container__dateBlock__button {
          background-color: $black;
          color: $whitesmoke;

          @media (max-width: 1024px) {
            font-size: 18px;

            padding: 17px 40px 17px 40px;
          }

          @media (max-width: 768px) {
            padding: 15px 20px 15px 20px;
            font-size: 14px;
          }

          @media (max-width: 550px) {
            font-size: 12px;
            padding: 15px 18px 15px 18px;
          }
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
          right: 0;
        }
      }
    }
  }
</style>
