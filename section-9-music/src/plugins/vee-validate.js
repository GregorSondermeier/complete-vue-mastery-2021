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
  configure,
  defineRule,
  ErrorMessage as VeeErrorMessage,
  Form as VeeForm,
  Field as VeeField,
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
    defineRule('passwordsMustMatch', confirmed);
    defineRule('email', email);
    defineRule('max', max);
    defineRule('maxValue', maxValue);
    defineRule('min', min);
    defineRule('minValue', minValue);
    defineRule('notOneOf', notOneOf);
    defineRule('notOneOfTheseCountries', notOneOf);
    defineRule('required', required);
    defineRule('acceptTermsOfService', required);

    configure({
      generateMessage: (context) => {
        switch (context.rule.name) {
          case 'acceptTermsOfService':
            return 'You must accept the Terms of Service.';
          case 'alphaSpaces':
            return `The field ${context.field} may only contain alphabetical characters and spaces.`;
          case 'email':
            return `The field ${context.field} must be a valid email.`;
          case 'max':
            return `The field ${context.field} is too long.`;
          case 'maxValue':
            return `The field ${context.field} is too high.`;
          case 'min':
            return `The field ${context.field} is too short.`;
          case 'minValue':
            return `The field ${context.field} is too low.`;
          case 'notOneOf':
            return `You are not allowed to use this value for the field ${context.field}.`;
          case 'notOneOfTheseCountries':
            return 'Due to restrictions, we do not accept users from this location';
          case 'passwordsMustMatch':
            return 'The passwords do not match.';
          case required:
            return `The field ${context.field} is required.`;
          default:
            return `The field ${context.field} is invalid.`;
        }
      },
      validateOnBlur: true,
      validateOnChange: true,
      validateOnInput: false,
      validateOnModelUpdate: true,
    });
  },
};
