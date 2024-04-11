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
            <div
              class="questionsBlock__container__accordionContainer__accordion"
              :class="{ active: item.active }"
              v-for="(item, index) in accordion"
            >
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
  import type { RendererElement } from 'vue';
  import type { IquestionsAccordion } from '@/types/QuestionsBlock.d';

  const accordion = ref<IquestionsAccordion[]>([
    {
      title: 'Краткая информация',
      text: 'Он расположен в одном из самых живописных мест Крымского полуострова – «Профессорском уголке» города Алушта. Тихий район в стороне от дорог, шума и скопления людей, с удобными галечными пляжами и набережной. Уникальный крымский климат, обилие зелени, море и горы создают особые условия для отдыха и оздоровления.',
      active: true,
    },
    {
      title: 'Детский отдых',
      text: 'Детская площадка – это не только отличная возможность для активного отдыха ребенка и общения со сверстниками, но и хороший шанс для родителей провести время без лишних переживаний. Площадка оборудована игровыми и спортивными элементами: лесенки, качели, горки, песочница. А веселые аниматоры не дадут нашим маленьким гостям скучать. Для детей до 3-х лет предусмотрена игровая комната. Для ребят постарше - VR -клуб.',
      active: false,
    },
    {
      title: 'Размеренный отдых',
      text: 'Территория парка – это замечательное место для вечерних тихих прогулок, задушевных бесед в тени деревьев. Здесь можно полежать на открытых шезлонгах и вдоволь насладиться ароматом хвои. Просторные аллеи, свежий морской воздух и большое количество локаций для отдыха способствует получению удовольствия от времяпрепровождения в нашем комплексе',
      active: false,
    },
    {
      title: 'Активный отдых',
      text: 'Для любителей спорта и активного образа жизни инфраструктурой комплекса предусмотрена многофункциональная спортивная площадка Здесь установлены различные уличные турники, брусья, рукоходы, кольца для баскетбола. Также благоустройством предусмотрено отдельное игровое поле для командных игр с мячом, площадка для пляжного волейбола. Здесь можно проводить различные групповые фитнес-тренировки, устраивать спортивные соревнования, заниматься йогой.',
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
              transition: all ease 0.5s;
              transform: scale(-1) scaleX(-1);
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

          &.active {
            .questionsBlock__container__accordionContainer__accordion__title__icon {
              transform: scale(1) scaleX(1);
              align-items: flex-end;
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

        &:hover {
          svg {
            path {
              fill: $black;
            }
          }
        }
      }
    }
  }
</style>
