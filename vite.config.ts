import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import eslintPlugin from 'vite-plugin-eslint'
import vueJsx from '@vitejs/plugin-vue-jsx'
import path from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import { VITE_DROP_CONSOLE, VITE_PORT } from './config/constant'
import proxy from './config/vite/proxy'
import { configManualChunk } from './config/vite/optimizer'

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
  },
  server: {
    hmr: { overlay: false }, // 禁用或配置 HMR 连接 设置 server.hmr.overlay 为 false 可以禁用服务器错误遮罩层
    // 服务配置
    port: VITE_PORT, // 类型： number 指定服务器端口;
    open: false, // 类型： boolean | string在服务器启动时自动在浏览器中打开应用程序；
    cors: false, // 类型： boolean | CorsOptions 为开发服务器配置 CORS。默认启用并允许任何源
    host: '0.0.0.0', // IP配置，支持从IP启动
    proxy
  },
  build: {
    target: 'es2015',
    terserOptions: {
      compress: {
        keep_infinity: true,
        drop_console: VITE_DROP_CONSOLE
      }
    },
    rollupOptions: {
      output: {
        manualChunks: configManualChunk
      }
    },
    // Turning off brotliSize display can slightly reduce packaging time
    brotliSize: false,
    chunkSizeWarningLimit: 2000
  }
})
