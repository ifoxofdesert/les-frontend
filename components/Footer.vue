<template>
  <footer>
    <div class="footer">
      <Container>
        <ContainerBlock>
          <div class="footer__container">
            <div class="footer__container__navigationBlock">
              <div class="footer__container__navigationBlock__column phonesColumn">
                <span class="footer__container__navigationBlock__column__title">Телефон</span>
                <a href="tel:" class="footer__container__navigationBlock__column__button"></a>
              </div>
              <div class="footer__container__navigationBlock__column menuColumn">
                <span class="footer__container__navigationBlock__column__title">Меню</span>
                <NuxtLink to="/" class="footer__container__navigationBlock__column__button"></NuxtLink>
              </div>

              <div class="footer__container__navigationBlock__column navigationColumn">
                <span class="footer__container__navigationBlock__column__title">Навигация</span>
                <NuxtLink to="/" class="footer__container__navigationBlock__column__button"></NuxtLink>
              </div>

              <div class="footer__container__navigationBlock__column socialColumn">
                <span class="footer__container__navigationBlock__column__title">Соц.Сети</span>
                <a href="tel:" class="footer__container__navigationBlock__column__button"></a>
              </div>

              <div class="footer__container__navigationBlock__column addressColumn">
                <span class="footer__container__navigationBlock__column__title">Адрес</span>
                <span class="footer__container__navigationBlock__column__text">
                  Крым, г. Алушта, Профессорский уголок, ул. Глазкрицкого, 17
                </span>

                <NuxtLink to="/" class="footer__container__navigationBlock__column__mapButton">
                  <IconComponent name="point" class="footer__container__navigationBlock__column__mapButton__icon" />
                  Посмотреть на карте
                </NuxtLink>
              </div>
            </div>
            <span class="footer__container__contactTitle"> Контакты </span>

            <div class="footer__container__bottomBlock">
              <div class="footer__container__bottomBlock__paymentBlock">
                <NuxtLink to="/" class="footer__container__bottomBlock__paymentBlock__imageButton">
                  <img src="" alt="Оплата" class="footer__container__bottomBlock__paymentBlock__imageButton__image" />
                </NuxtLink>
              </div>

              <button class="footer__container__bottomBlock__goTopButton">
                Вернутся в начало
                <IconComponent name="circleUpArrow" class="footer__container__bottomBlock__goTopButton__icon" />
              </button>

              <NuxtLink to="/" class="footer__container__bottomBlock__policyButton">
                Политика конфиденциальности
              </NuxtLink>
            </div>
          </div>
        </ContainerBlock>
      </Container>
    </div>
  </footer>
</template>

<script setup lang="ts">
  import Container from './Container.vue';
  import ContainerBlock from './ContainerBlock.vue';
  import IconComponent from './IconComponent.vue';
</script>
