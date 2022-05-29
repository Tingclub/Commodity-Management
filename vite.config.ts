import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import eslintPlugin from 'vite-plugin-eslint'
import vueJsx from '@vitejs/plugin-vue-jsx'

export default defineConfig({
  plugins: [
    vue(),
    eslintPlugin({
      // 配置选项
      // cache: false //禁用缓存
    }),
    vueJsx({
      //
    })
  ]
})
