<template>
  <div class="roomsListBlock">
    <Container>
      <ContainerBlock>
        <div class="roomsListBlock__container">
          <h2 class="roomsListBlock__container__title" v-if="title">{{ title }}</h2>
          <span class="roomsListBlock__container__description" v-if="description">
            {{ description }}
          </span>

          <div class="roomsListBlock__container__roomsBlock">
            <div class="roomsListBlock__container__roomsBlock__roomBlock" v-for="(item, index) in rooms" :key="index">
              <img
                :src="item.img.src"
                :alt="item.img.alt || item.title"
                class="roomsListBlock__container__roomsBlock__roomBlock__image"
              />
              <div class="roomsListBlock__container__roomsBlock__roomBlock__textBlock">
                <span class="roomsListBlock__container__roomsBlock__roomBlock__textBlock__title">
                  {{ item.title }}
                </span>

                <span class="roomsListBlock__container__roomsBlock__roomBlock__textBlock__text first">
                  Площадь:
                  <span>{{ item.area }}</span>
                </span>

                <span class="roomsListBlock__container__roomsBlock__roomBlock__textBlock__text second">
                  Вместимость:
                  <span>{{ item.persons }}</span>
                </span>

                <span class="roomsListBlock__container__roomsBlock__roomBlock__textBlock__description">
                  {{ item.description }}
                </span>
              </div>

              <IconComponent name="arrow_right" class="roomsListBlock__container__roomsBlock__roomBlock__icon" />
            </div>
          </div>
        </div>
      </ContainerBlock>
    </Container>
  </div>
</template>

<script lang="ts" setup>
  import type { IroomList } from '~/types/Room';

  const { title, description, rooms } = defineProps({
    title: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
    rooms: {
      type: Array as () => IroomList[],
      default: [],
    },
  });
</script>

<style lang="scss" scoped></style>
