<template>
  <div class="questionsBlock">
    <Container>
      <ContainerBlock>
        <div class="questionsBlock__container">
          <h2 class="questionsBlock__container__title">
            {{ content.title }}
            <span v-if="content?.secondTitle">{{ content.secondTitle }}</span>
            <span v-if="content?.thirdTitle">{{ content?.thirdTitle }}</span>
          </h2>
          <div class="questionsBlock__container__accordionContainer">
            <AccordionContainer v-if="content?.accordion?.length">
              <Accordion v-for="item in content.accordion" :content="item" type="titleDot" />
            </AccordionContainer>
            <Button
              class="questionsBlock__container__accordionContainer__button"
              mod="green"
              type="external"
              url="#"
              data-tl-booking-open="true"
            >
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
  import type { IquestionsBlock } from '~/types/Accordion';

  const { content } = defineProps({
    content: {
      type: Object as () => IquestionsBlock,
      default: {},
    },
  });
</script>

<style lang="scss" scoped>
  .questionsBlock {
    z-index: 1;
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    min-height: 1320px;
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

        @media (max-width: 1800px) {
          float: left;
          text-align: center;
          display: block;

          span {
            margin: 0 20px 0 0;
          }
        }

        @media (max-width: 1550px) {
          font-size: 80px;
          text-align: left;
        }

        @media (max-width: 1200px) {
          font-size: 62px;
        }

        @media (max-width: 768px) {
          font-size: 42px;
        }
        @media (max-width: 550px) {
          font-size: 30px;
        }
      }

      &__accordionContainer {
        background-color: $whitesmoke;
        opacity: 0.9;
        display: flex;
        flex-direction: column;
        padding: 70px;
        max-width: 407px;
        width: 100%;
        align-self: center;
        position: relative;
        top: -30px;

        &__button {
          &:deep() {
            svg {
              path {
                fill: $whitesmoke;
              }
            }
          }

          &:hover {
            &:deep() {
              svg {
                path {
                  fill: $black;
                }
              }
            }
          }
        }

        @media (max-width: 768px) {
          top: 0;
          max-width: 100%;
        }

        @media (max-width: 550px) {
          padding: 30px;
        }
      }
    }
    @media (max-width: 768px) {
      min-height: 0;
    }
  }
</style>
