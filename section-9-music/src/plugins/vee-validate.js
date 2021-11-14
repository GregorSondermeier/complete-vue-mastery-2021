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
        const messages = {
          acceptTermsOfService: 'You must accept the Terms of Service.',
          alphaSpaces: `The field ${context.field} may only contain alphabetical characters and spaces.`,
          email: `The field ${context.field} must be a valid email.`,
          max: `The field ${context.field} is too long.`,
          maxValue: `The field ${context.field} is too high.`,
          min: `The field ${context.field} is too short.`,
          minValue: `The field ${context.field} is too low.`,
          notOneOf: `You are not allowed to use this value for the field ${context.field}.`,
          notOneOfTheseCountries:
            'Due to restrictions, we do not accept users from this location',
          passwordsMustMatch: 'The passwords do not match.',
          required: `The field ${context.field} is required.`,
        };

        return (
          messages[context.rule.name] ||
          `The field ${context.field} is invalid.`
        );
      },
    });
  },
};
