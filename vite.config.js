import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vuetify from '@vuetify/vite-plugin'
import path from 'path'

export default defineConfig({
  plugins: [
    vue(),
    vuetify({
      autoImport: true,
    }),
  ],
  define: { 'process.env': {} },
  resolve: {
    alias: {
      '@': path.join(__dirname, 'src/app/'),
      '~': path.join(__dirname, 'src/'),
    },
  },
})
