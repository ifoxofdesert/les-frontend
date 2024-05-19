import type { Iinput, IvalidateInput } from '~/types/Form';

export const useForm = () => {
  function validateInput(data: IvalidateInput) {
    if (data) {
      if (data.required) {
        if (data.type == 'tel') {
          if (data.value.length < 16) {
            data.errorText.value = 'Номер телефона некорректный';
            return false;
          } else if (data.value.length >= 16) {
            data.errorText.value = '';
            return true;
          }
        } else if (data.type == 'text') {
          if (data.value.length < 1) {
            data.errorText.value = 'Заполните поле';
            return false;
          } else if (data.value.length >= 1) {
            data.errorText.value = '';
            return true;
          }
        } else if (data.type == 'email') {
          const regx =
            /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          if (regx.test(data.value)) {
            data.errorText.value = '';
            return true;
          } else {
            data.errorText.value = 'Почта невалидная';
            return false;
          }
        }
      }
    }
  }

  function checkValidate(fields: Iinput[]): boolean {
    let valid = true;

    fields.forEach((input) => {
      input.checkInput();

      if (valid) {
        const success = toRef(input.success);
        valid = success.value;
      }
    });

    return valid;
  }

  return {
    validateInput,
    checkValidate,
  };
};
