import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@/': `${path.resolve(__dirname, 'src')}/`,
      '@assets/': `${path.resolve(__dirname, 'src/assets')}/`,
      '@modules/': `${path.resolve(__dirname, 'src/modules')}/`,
      '@components/': `${path.resolve(__dirname, 'src/components')}/`,
      '@router/': `${path.resolve(__dirname, 'src/router')}/`,
      '@store/': `${path.resolve(__dirname, 'src/store/modules')}/`
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "src/assets/scss/colors";'
      }
    }
  }
});
