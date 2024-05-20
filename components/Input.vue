<template>
  <input
    class="input"
    :id="id"
    :type="type"
    v-maska
    :data-maska="dataMaska ? dataMaska : type == 'tel' ? '+7 ### ###-##-##' : ''"
    :placeholder="placeholder"
    :name="name"
    v-model="value"
    :disabled="disabled"
    :required="required"
    :class="{ error: error, success: success }"
    ref="inputField"
    @input="onInput"
    @blur="onBlur"
    @change="onChange($event, id)"
    @keypress.enter.prevent="onKeyPress"
    :maxlength="maxLength"
  />
</template>

<script setup lang="ts">
  import { vMaska } from 'maska';
  import type { InputHTMLAttributes } from 'vue';
  import type { InputTypeHTMLAttribute } from 'vue';
  import type { Iinput } from '~/types/Form';
  const {
    dataMaska,
    success: propSuccess,
    error: propError,
    disabled,
    value: propValue,
    name,
    required,
    id,
    placeholder,
    type,
    maxLength,
  } = defineProps({
    type: {
      type: String as () => InputTypeHTMLAttribute,
      default: 'text', // number, password
    },
    placeholder: {
      type: String,
      default: '',
    },
    id: {
      type: String,
      default: '',
    },
    required: {
      type: Boolean,
      default: false,
    },
    name: {
      type: String,
      default: '', // наименование инпута
    },
    value: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    error: {
      type: Boolean,
      default: false,
    },
    success: {
      type: Boolean,
      default: false,
    },
    dataMaska: {
      type: String,
      default: '',
    },
    maxLength: {
      type: Number,
      default: null,
    },
  });

  const { validateInput } = useForm();

  const emit = defineEmits(['input', 'inputEvent', 'blur', 'blurEvent', 'change', 'keyPressEnter']);

  const textError = ref('');
  const value = ref(propValue);
  const error = ref(propError);
  const success = ref(propSuccess);
  const inputField = ref<InputHTMLAttributes | null>(null);

  function onBlur(event: Event) {
    const target = event.target as HTMLInputElement;
    emit('blur', target.value);
    emit('blurEvent', event);
  }
  function checkInput() {
    if (required) {
      const validate = validateInput({
        value: value.value,
        type: type,
        required: required,
        errorText: textError,
      });

      if (validate) {
        error.value = false;
        success.value = true;
      } else {
        error.value = true;
        success.value = false;
      }
    } else {
      error.value = false;
      success.value = true;
    }
  }

  function onInput(event: Event) {
    if (event.isTrusted) {
      const target = event.target as HTMLInputElement;
      emit('input', target.value);
      emit('inputEvent', event);
    }
  }

  function onChange(value: Event, id: string) {
    const target = value.target as HTMLInputElement;

    checkInput();
    emit('change', target.value, id);
  }

  function onKeyPress(event: Event) {
    emit('keyPressEnter', event);
  }

  defineExpose<Iinput>({
    checkInput,
    textError,
    success,
    error,
    inputField,
    name,
    value,
  });
</script>

<style lang="scss" scoped>
  .input {
    background-color: transparent;
    border: none;
    outline: none;
    border-bottom: 1px solid $black;
    padding: 10px 0;
    font-family: Manrope;
    font-size: 20px;
    font-weight: 300;
    line-height: 110%;
    letter-spacing: -1px;
    color: $black;
    &::placeholder {
      color: $gray;
    }

    &.error {
      border-color: $red;
      color: $red;
    }
  }
</style>
