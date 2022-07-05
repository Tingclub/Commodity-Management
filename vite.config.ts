import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import eslintPlugin from 'vite-plugin-eslint'
import vueJsx from '@vitejs/plugin-vue-jsx'
import path from 'path'
import AutoImport from 'unplugin-auto-import/vite'

export default defineConfig({
  plugins: [
    vue(),
    eslintPlugin({
      // 配置选项
      // cache: false //禁用缓存
    }),
    vueJsx({
      //
    }),
    AutoImport({
      imports: ['vue', 'vue-router']
    })
  ],
  resolve: {
    alias: {
      '@': path.join(__dirname, 'src') // 路径别名
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@/styles/variables.scss";'
      }
    }
  }
})
