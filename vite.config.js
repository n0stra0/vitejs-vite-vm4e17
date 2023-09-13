import { fileURLToPath } from 'url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue2';
import VueI18n from '@intlify/unplugin-vue-i18n/vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VueI18n({
      bridge: true,
      compositionOnly: false,
    }),
  ],
  resolve: {
    alias: {
      vue: 'vue/dist/vue.js',
    },
  },
});
