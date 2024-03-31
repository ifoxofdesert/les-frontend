<template>
  <div class="questionsBlock">
    <Container>
      <ContainerBlock>
        <div class="questionsBlock__container">
          <h2 class="questionsBlock__container__title">
            современный комплекс
            <span>Южного</span>
            <span>берега Крыма</span>
          </h2>
          <div class="questionsBlock__container__accordionContainer">
            <div class="questionsBlock__container__accordionContainer__accordion" v-for="item in accordion">
              <span class="questionsBlock__container__accordionContainer__accordion__title">
                {{ item.title }}
                <IconComponent name="union" class="questionsBlock__container__accordionContainer__accordion__icon" />
              </span>
              <div class="questionsBlock__container__accordionContainer__accordion__content" v-if="item.active">
                <span class="questionsBlock__container__accordionContainer__accordion__content__text">{{
                  item.text
                }}</span>
              </div>
            </div>
            <Button class="questionsBlock__container__accordionContainer__button" mod="green" type="button">
              Забронировать номер
              <IconComponent name="arrow_right" />
            </Button>
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
  import Button from './Button.vue';

  const accordion = [
    {
      title: 'Краткая информация',
      text: 'Он расположен в одном из самых живописных мест Крымского полуострова – «Профессорском уголке» города Алушта. Тихий район в стороне от дорог, шума и скопления людей, с удобными галечными пляжами и набережной. Уникальный крымский климат, обилие зелени, море и горы создают особые условия для отдыха и оздоровления.',
      active: true,
    },
    {
      title: 'Детский отдых',
      text: 'Он расположен в одном из самых живописных мест Крымского полуострова – «Профессорском уголке» города Алушта. Тихий район в стороне от дорог, шума и скопления людей, с удобными галечными пляжами и набережной. Уникальный крымский климат, обилие зелени, море и горы создают особые условия для отдыха и оздоровления.',
      active: false,
    },
    {
      title: 'Размеренный отдых',
      text: 'Он расположен в одном из самых живописных мест Крымского полуострова – «Профессорском уголке» города Алушта. Тихий район в стороне от дорог, шума и скопления людей, с удобными галечными пляжами и набережной. Уникальный крымский климат, обилие зелени, море и горы создают особые условия для отдыха и оздоровления.',
      active: false,
    },
    {
      title: 'Активный отдых',
      text: 'Он расположен в одном из самых живописных мест Крымского полуострова – «Профессорском уголке» города Алушта. Тихий район в стороне от дорог, шума и скопления людей, с удобными галечными пляжами и набережной. Уникальный крымский климат, обилие зелени, море и горы создают особые условия для отдыха и оздоровления.',
      active: false,
    },
  ];
</script>
