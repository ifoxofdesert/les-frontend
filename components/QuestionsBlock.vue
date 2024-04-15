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
            <Accordion v-if="accordion.length" :content="accordion" type="titleDot" />
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
  import type { Iaccordion } from '~/types/Accordion';

  const accordion = ref<Iaccordion[]>([
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
      }
    }
  }
</style>
