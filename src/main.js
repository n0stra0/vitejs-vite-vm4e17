import Vue from 'vue';
import App from './App.vue';
import VueI18n from 'vue-i18n';
import { createI18n } from 'vue-i18n-bridge';

Vue.use(VueI18n, { bridge: true }); // you must specify '{ bridge: true }' plugin option when install vue-i18n

// `createI18n` options is almost same vue-i18n-next (vue-i18n@v9.x) API
const i18n = createI18n(
  {
    locale: 'en',
    messages: {
      en: {
        message: {
          hello: 'hello, {name}!',
        },
      },
      ja: {
        message: {
          hello: 'こんにちは、{name}！',
        },
      },
    },
  },
  VueI18n
); // `createI18n` which is provide `vue-i18n-bridge` has second argument, you **must** pass `VueI18n` constructor which is provide `vue-i18n`

Vue.use(i18n); // you must install `i18n` instance which is created by `createI18n`

new Vue({ i18n, render: (h) => h(App) }).$mount('#app');
