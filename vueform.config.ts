import ru from '@vueform/vueform/locales/ru';
import material from '@vueform/vueform/dist/material';
import { defineConfig } from '@vueform/vueform';
// You might place these anywhere else in your project
import '@vueform/vueform/dist/material.css';

ru.validation.required = 'Необходимо заполнить поле';

export default defineConfig({
  theme: material,
  displayErrors: false,
  locales: { ru },
  locale: 'ru'
});
