import type { InputHTMLAttributes, InputTypeHTMLAttribute } from 'vue';

export interface IformPopup {
  title?: string;
  description?: string;
}

export interface IvalidateInput {
  required: boolean;
  type: InputTypeHTMLAttribute;
  value: string;
  errorText: Ref<string>;
}

export interface Iinput {
  checkInput: Function<void>;
  textError: Ref<string>;
  success: Ref<boolean>;
  error: Ref<boolean>;
  inputField: InputHTMLAttributes;
  type: InputTypeHTMLAttribute;
  value: Ref<string>;
}
