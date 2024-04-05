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
            <div class="questionsBlock__container__accordionContainer__accordion" v-for="(item, index) in accordion">
              <span
                class="questionsBlock__container__accordionContainer__accordion__title"
                @click="toogleAccordion(index)"
              >
                {{ item.title }}
                <IconComponent
                  name="union"
                  class="questionsBlock__container__accordionContainer__accordion__title__icon"
                />
              </span>
              <Transition
                name="accordion"
                @before-enter="beforeEnter"
                @enter="enter"
                @after-enter="afterEnter"
                @before-leave="beforeLeave"
                @leave="leave"
              >
                <div class="questionsBlock__container__accordionContainer__accordion__content" v-if="item.active">
                  <span class="questionsBlock__container__accordionContainer__accordion__content__text">
                    {{ item.text }}
                  </span>
                </div>
              </Transition>
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
  import type { RendererElement } from 'vue';
  import type { IquestionsAccordion } from '@/types/QuestionsBlock.d';

  const accordion = ref<Array<IquestionsAccordion>>([
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
  ]);

  function toogleAccordion(index: number) {
    accordion.value.forEach((item, i) => {
      if (index !== i) {
        item.active = false;
      }
    });

    accordion.value[index].active = !accordion.value[index].active;
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
  .questionsBlock {
    z-index: 1;
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    &__container {
      display: flex;
      flex-direction: column;

      &__title {
        font-family: 'Playfair Display';
        font-size: 128px;
        font-weight: 500;
        line-height: 100%;
        text-transform: uppercase;
        display: flex;
        flex-direction: column;
        color: $black;

        span {
          margin: 0 0 0 640px;
        }
      }

      &__accordionContainer {
        background-color: $whitesmoke;
        opacity: 0.9;
        display: flex;
        flex-direction: column;
        padding: 70px 70px 100px 70px;
        max-width: 407px;
        width: 100%;
        align-self: center;
        position: relative;
        top: -30px;
        &__accordion {
          width: 100%;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          margin: 0 0 9px 0;
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
            &__icon {
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
            }
          }
        }
      }
    }
  }
</style>

<style lang="scss">
  .questionsBlock {
    .questionsBlock__container {
      &__accordionContainer__button {
        svg {
          path {
            fill: $whitesmoke;
          }
        }
      }
    }
  }
</style>
