import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';

import router from '@router/index';

createApp(App).use(router).use(createPinia()).mount('#app');
