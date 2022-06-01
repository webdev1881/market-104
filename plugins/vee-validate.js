import Vue from 'vue';
import {
  ValidationObserver,
  ValidationProvider,
  extend,
  configure
} from 'vee-validate';
import {
  required,
  email,
  confirmed
} from 'vee-validate/dist/rules';

extend('required', required);

extend('email', email);

extend('confirmed', {
  ...confirmed,
  message: 'Passwords Don`t Match.'
});

extend('phone', {
  validate: value => {
    if (!value) return true
    const regex = /^[0-9\s- +]*$/g
    return Boolean(value.match(regex))
  },
  message: 'The Phone field must contain only numbers and dashes.'
});




configure({
  classes: {
    invalid: 'is-invalid'
  }
});



Vue.component('ValidationObserver', ValidationObserver);
Vue.component('ValidationProvider', ValidationProvider);