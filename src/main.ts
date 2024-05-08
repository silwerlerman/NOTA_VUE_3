import { createApp } from 'vue';
import Vueform from '@vueform/vueform';
import vueformConfig from '../vueform.config';
import { createPinia } from 'pinia';

import App from './App.vue';

import router from '@router/index';

createApp(App)
  .use(router)
  .use(createPinia())
  .use(Vueform, vueformConfig)
  .mount('#app');
