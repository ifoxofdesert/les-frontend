<template>
  <div class="formPopup">
    <div class="formPopup__container">
      <IconComponent name="close" class="formPopup__container__close" />
      <div class="formPopup__container__formBlock">
        <h2 class="formPopup__container__formBlock__title" v-if="data?.title" v-html="data.title" />

        <span class="formPopup__container__formBlock__description" v-if="data?.description">
          {{ data.description }}
        </span>

        <form class="formPopup__container__formBlock__form">
          <Input type="text" name="name" placeholder="Имя и Фамилия" :required="true" ref="name" @input="validate()" />
          <Input
            type="tel"
            name="phone"
            placeholder="Номер телефона"
            :required="true"
            ref="phone"
            @input="validate()"
          />
          <Input type="email" name="email" placeholder="Почта" :required="true" ref="email" @input="validate()" />
          <Input
            type="text"
            name="description"
            placeholder="Удобное время для звонка (необязательно)"
            ref="description"
            @input="validate()"
          />
          <Button
            class="formPopup__container__formBlock__form__button"
            mod="gray"
            type="button"
            :disabled="disabledSend"
            @click="sendForm()"
          >
            Внести предоплату
            <IconComponent name="arrow_right" />
          </Button>
        </form>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import type { IformPopup, Iinput } from '~/types/Form.d.ts';

  const disabledSend = ref(true);

  const { data } = defineProps({
    data: {
      type: Object as () => IformPopup,
      default: {},
    },
  });

  const { checkValidate } = useForm();

  const name = ref<Iinput>();
  const phone = ref<Iinput>();
  const email = ref<Iinput>();
  const description = ref<Iinput>();

  const formInputs = computed(() => [name.value, phone.value, email.value, description.value] as Iinput[]);

  function validate(): boolean {
    if (formInputs.value.every((i) => i != undefined)) {
      const valid = checkValidate(formInputs.value);
      disabledSend.value = !valid;
      return valid;
    } else {
      return false;
    }
  }

  function sendForm() {
    const valid = validate();

    if (valid) {
      const dataForm = formInputs.value.map((item) => ({ [item.type]: item.value }));
    }
  }
</script>

<style lang="scss" scoped>
  .formPopup {
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    z-index: 10;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      backdrop-filter: blur(20px);
      background: rgba(28, 28, 28, 0.7);
    }

    &__container {
      z-index: 1;
      display: flex;
      flex-direction: column;
      padding: 94px 50px 70px 50px;
      background-color: $milk;
      position: relative;

      &__close {
        position: absolute;
        top: 25px;
        right: 25px;
        width: 30px;
        height: 30px;
        cursor: pointer;

        @media (max-width: 1024px) {
          display: none;
        }
      }

      &__formBlock {
        display: flex;
        flex-direction: column;
        max-width: 520px;
        &__title {
          font-family: 'Playfair Display';
          font-size: 55px;
          font-weight: 500;
          line-height: 95%;
          color: $black;

          &:deep() {
            span {
              color: $green;
            }
          }
        }

        &__description {
          font-family: Manrope;
          font-size: 20px;
          font-weight: 300;
          line-height: 110%;
          color: $gray;
          margin: 20px 0 0 0;
        }

        &__form {
          margin: 36px 0 0 0;
          display: flex;
          flex-direction: column;
          width: 100%;
          gap: 35px;

          &__button {
            margin: 15px 0 0 0;
          }
        }
      }
    }
  }
</style>
