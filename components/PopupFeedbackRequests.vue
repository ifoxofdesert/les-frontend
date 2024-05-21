<template>
  <div class="formPopup" @click="checkClick">
    <div class="formPopup__container">
      <IconComponent name="close" class="formPopup__container__close" @click="$emit('close')" />
      <div class="formPopup__container__formBlock" v-if="!send">
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
            :mod="disabledSend ? 'gray' : 'green'"
            type="button"
            :disabled="disabledSend"
            @click="sendForm()"
          >
            Отправить заявку
            <IconComponent name="arrow_right" />
          </Button>
        </form>

        <span class="formPopup__container__formBlock__policyText" v-if="policyUrl">
          Нажимая на кнопку вы сошлашаетесь с
          <Button
            mod="text_green"
            :url="policyUrl"
            type="internal"
            class="formPopup__container__formBlock__policyText__button"
          >
            политикой конфиденциальности
          </Button>
        </span>
      </div>

      <div class="formPopup__container__messageBlock" :class="{ error: statusSend.error }" v-if="send">
        <span class="formPopup__container__messageBlock__title" v-if="statusSend?.content?.title">
          {{ statusSend.content.title }}
        </span>
        <span class="formPopup__container__messageBlock__text" v-if="statusSend?.content?.text">
          {{ statusSend.content.text }}
        </span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import type { IformFeedback, Iinput, IformFeedbackRequests, IresponseStatus } from '~/types/Form.d.ts';

  const emit = defineEmits(['close']);

  const disabledSend = ref(true);

  const { data } = defineProps({
    data: {
      type: Object as () => IformFeedback,
      default: {},
    },
    policyUrl: {
      type: String,
      default: '',
    },
  });

  const { checkValidate } = useForm();
  const { sendFeedbackRequests } = useApi();

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

  const errorMessage = {
    title: 'Ошибка',
    text: 'Заявка не отправлена, попробуйте снова ',
  };

  const response = ref<IresponseStatus | null>();
  const send = ref(false);

  const statusSend = computed(() => {
    if (response.value?.status == 'successfully') {
      return {
        error: false,
        content: data.succes,
      };
    } else {
      return {
        error: true,
        content: errorMessage,
      };
    }
  });

  async function sendForm() {
    const valid = validate();

    if (valid) {
      const dataForm: IformFeedbackRequests = {
        name: name.value?.value,
        phone: phone.value?.value,
        email: email.value?.value,
        description: description.value?.value,
      };

      disabledSend.value = true;

      response.value = await sendFeedbackRequests(dataForm);
      send.value = true;

      setTimeout(() => {
        emit('close');
      }, 2000);
    }
  }

  function checkClick(e: Event) {
    const target = e.target as HTMLButtonElement;

    if (!target.closest('.formPopup__container')) {
      emit('close');
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

          @media (max-width: 550px) {
            font-size: 35px;
          }
        }

        &__description {
          font-family: Manrope;
          font-size: 20px;
          font-weight: 300;
          line-height: 110%;
          color: $gray;
          margin: 20px 0 0 0;

          @media (max-width: 550px) {
            font-size: 14px;
            margin: 10px 0 0 0;
          }
        }

        &__form {
          margin: 36px 0 0 0;
          display: flex;
          flex-direction: column;
          width: 100%;
          gap: 35px;

          &__button {
            margin: 15px 0 0 0;

            &[disabled] {
              cursor: default;
            }

            &.button__green:hover {
              background-color: transparent;
            }
          }

          @media (max-width: 550px) {
            margin: 30px 0 0 0;
            gap: 25px;
          }
        }
        &__policyText {
          font-family: Manrope;
          font-size: 16px;
          font-weight: 300;
          line-height: 110%;
          letter-spacing: -1px;
          color: $gray;
          margin: 10px 0 0 0;

          .formPopup__container__formBlock__policyText__button {
            font-size: 16px;
            font-weight: 300;
            line-height: 110%;
            letter-spacing: -1px;
            display: contents;
          }
        }
      }

      &__messageBlock {
        display: flex;
        flex-direction: column;
        max-width: 514px;
        width: 100vw;
        gap: 15px;

        &__title {
          font-family: 'Playfair Display';
          font-size: 55px;
          font-weight: 500;
          line-height: 95%;
          color: $green;
          text-align: center;

          @media (max-width: 550px) {
            font-size: 35px;
          }
        }

        &__text {
          font-family: Manrope;
          font-size: 20px;
          font-weight: 300;
          line-height: 110%;
          color: $black;
          text-align: center;

          @media (max-width: 550px) {
            font-size: 14px;
          }
        }
        @media (max-width: 550px) {
          gap: 10px;
        }

        &.error {
          .formPopup__container__messageBlock__title {
            color: $red;
          }
        }
      }

      @media (max-width: 1024px) {
        padding: 20px;
        box-sizing: border-box;
        width: 100%;
        height: 100%;
        align-items: center;
        justify-content: center;
      }
    }

    @media (max-width: 1024px) {
      z-index: 5;
    }
  }
</style>
