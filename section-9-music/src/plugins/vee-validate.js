import {
  alpha_spaces as alphaSpaces,
  confirmed,
  email,
  max,
  max_value as maxValue,
  min,
  min_value as minValue,
  not_one_of as notOneOf,
  required,
} from '@vee-validate/rules';
import {
  ErrorMessage as VeeErrorMessage,
  Form as VeeForm,
  Field as VeeField,
  defineRule,
} from 'vee-validate';

/**
 * Custom Plugin for vee-validate
 */
export const VeeValidate = {
  install(app) {
    app.component('VeeForm', VeeForm);
    app.component('VeeField', VeeField);
    app.component('VeeErrorMessage', VeeErrorMessage);

    defineRule('alphaSpaces', alphaSpaces);
    defineRule('confirmed', confirmed);
    defineRule('email', email);
    defineRule('max', max);
    defineRule('maxValue', maxValue);
    defineRule('min', min);
    defineRule('minValue', minValue);
    defineRule('notOneOf', notOneOf);
    defineRule('required', required);
  },
};
