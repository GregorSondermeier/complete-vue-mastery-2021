import { required } from '@vee-validate/rules';
import { ErrorMessage as VeeErrorMessage, Form as VeeForm, Field as VeeField, defineRule } from 'vee-validate';

/**
 * Custom Plugin for vee-validate
 */
export const VeeValidate = {
  install(app) {
    app.component('VeeForm', VeeForm);
    app.component('VeeField', VeeField);
    app.component('VeeErrorMessage', VeeErrorMessage);

    defineRule('required', required);
  },
};
