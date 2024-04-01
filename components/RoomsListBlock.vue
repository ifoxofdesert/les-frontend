<template>
  <div class="roomsListBlock">
    <Container>
      <ContainerBlock>
        <div class="roomsListBlock__container">
          <h2 class="roomsListBlock__container__title">Номерной фонд комплекса</h2>
          <span class="roomsListBlock__container__description">
            Выбирайте из разнообразия номеров для вашего пребывания. От уютных стандартов до роскошных люксов - у нас
            найдется идеальный вариант для вашего комфорта.
          </span>

          <div class="roomsListBlock__container__roomsBlock">
            <div class="roomsListBlock__container__roomsBlock__labelBlock">
              <span class="roomsListBlock__container__roomsBlock__labelBlock__name">Класс номера</span>
              <span class="roomsListBlock__container__roomsBlock__labelBlock__name">Стоимость</span>
              <span class="roomsListBlock__container__roomsBlock__labelBlock__name">Вместимость</span>
            </div>
            <div class="roomsListBlock__container__roomsBlock__roomBlock" v-for="(item, index) in rooms" :key="index">
              <span class="roomsListBlock__container__roomsBlock__roomBlock__title">{{ item.title }}</span>
              <span class="roomsListBlock__container__roomsBlock__roomBlock__text">{{ item.price }}</span>
              <span class="roomsListBlock__container__roomsBlock__roomBlock__text">{{ item.persons }}</span>
              <img
                v-if="item.active"
                :src="item.img"
                :alt="item.title"
                class="roomsListBlock__container__roomsBlock__roomBlock__image"
              />
              <IconComponent name="arrow_left" class="roomsListBlock__container__roomsBlock__roomBlock__icon" />
            </div>
          </div>
        </div>
      </ContainerBlock>
    </Container>
  </div>
</template>

<script setup lang="ts">
  import Container from './Container.vue';
  import ContainerBlock from './ContainerBlock.vue';
  import IconComponent from './IconComponent.vue';

  const rooms = [
    {
      title: 'Базовый',
      price: '6 000₽/ночь',
      persons: 'До 2х гостей',
      img: 'assets/images/Rectangle 8-1.jpeg',
      active: false,
    },
    {
      title: 'Стандарт',
      price: '8 000₽/ночь',
      persons: 'До 2х гостей',
      img: 'assets/images/Rectangle 8-2.jpeg',
      active: false,
    },
    {
      title: 'Комфорт',
      price: '12 000₽/ночь',
      persons: 'До 3х гостей',
      img: 'assets/images/Rectangle 8.jpeg',
      active: false,
    },
    {
      title: 'Люкс-студио',
      price: '17 000₽/ночь',
      persons: 'До 4х гостей',
      img: 'assets/images/Rectangle 8-2.jpeg',
      active: false,
    },
  ];
</script>
