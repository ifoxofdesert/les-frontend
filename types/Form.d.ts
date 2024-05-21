import type { InputHTMLAttributes, InputTypeHTMLAttribute } from 'vue';

export interface IformFeedback {
  title?: string;
  description?: string;
  succes?: {
    title?: string;
    text?: string;
  };
}

export interface IvalidateInput {
  required: boolean;
  type: InputTypeHTMLAttribute;
  value: string;
  errorText: Ref<string>;
}

export interface IformFeedbackRequests {
  name?: Ref<string> | string;
  phone?: Ref<string> | string;
  email?: Ref<string> | string;
  description?: Ref<string> | string;
}

export interface IresponseStatus {
  status?: 'notSend' | 'successfully';
  error?: object;
}

export interface Iinput {
  checkInput: Function<void>;
  textError: Ref<string>;
  success: Ref<boolean>;
  error: Ref<boolean>;
  inputField: InputHTMLAttributes;
  name: string;
  value: Ref<string> | string;
}
