<template>
  <div class="aboutVacancy">
    <div class="aboutVacancy__description">
      <span class="aboutVacancy__description__text">
        Требуемый опыт работы:
        <span>{{ experience }}</span>
      </span>
      <span class="aboutVacancy__description__text">
        Занятость:
        <span>{{ employment }}</span>
      </span>
      <span class="aboutVacancy__description__text">
        Зарплата:
        <span>{{ salary }}</span>
      </span>
    </div>

    <div class="aboutVacancy__listDescriptions" v-if="responsibilities.length">
      <span class="aboutVacancy__listDescriptions__title">Обязанности:</span>
      <ul class="aboutVacancy__listDescriptions__ul">
        <li class="aboutVacancy__listDescriptions__ul__li" v-for="text in responsibilities">
          {{ text }}
        </li>
      </ul>
    </div>

    <div class="aboutVacancy__listDescriptions" v-if="conditions.length">
      <span class="aboutVacancy__listDescriptions__title">Условия:</span>
      <ul class="aboutVacancy__listDescriptions__ul">
        <li class="aboutVacancy__listDescriptions__ul__li" v-for="text in conditions">
          {{ text }}
        </li>
      </ul>
    </div>

    <Button class="aboutVacancy__button" mod="green" type="button">
      Оставить заявку
      <IconComponent name="arrow_right" />
    </Button>
  </div>
</template>

<script lang="ts" setup>
  const { experience, employment, salary, responsibilities, conditions } = defineProps({
    experience: {
      type: String,
      default: '',
    },
    employment: {
      type: String,
      default: '',
    },
    salary: {
      type: String,
      default: '',
    },
    responsibilities: {
      type: Array<String>,
      default: () => [''],
    },
    conditions: {
      type: Array<String>,
      default: () => [''],
    },
  });
</script>

<style lang="scss" scoped>
  .aboutVacancy {
    width: 100%;
    display: flex;
    flex-direction: column;
    &__description {
      width: 100%;
      margin: 0 0 15px 0;
      display: flex;
      flex-direction: column;
      gap: 12px;

      &__text {
        display: flex;
        flex-wrap: wrap;
        font-family: Manrope;
        font-size: 22px;
        font-weight: 400;
        line-height: 120%;
        color: $gray;

        span {
          color: $black;
        }
      }
    }

    &__listDescriptions {
      width: 100%;
      display: flex;
      flex-direction: column;
      font-size: 22px;
      font-family: Manrope;
      margin: 0 0 15px 0;

      &__title {
        font-weight: 400;
        line-height: 120%;
        text-transform: uppercase;
        color: $black;
        margin: 0 0 10px 0;
      }

      &__ul {
        display: flex;
        flex-direction: column;
        gap: 20px;
        padding: 0 0 0 22px;

        &__li {
          color: $gray;
          font-weight: 400;
          line-height: 37px;
        }
      }
    }

    :deep(.aboutVacancy__listDescriptions:last-of-type) {
      margin: 0 0 40px 0;
    }

    &__button {
      max-width: 325px;
      margin: 0 0 2px 2px;
    }
  }
</style>
