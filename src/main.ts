import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { store, key } from './store'
import AntD from 'ant-design-vue'
import { createFromIconfontCN } from '@ant-design/icons-vue'

// 全局样式
import 'sanitize.css'

import '@/styles/index.scss'
// 图标
const Fonts = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_3243513_tpd19zgtmy.js'
})

createApp(App)
  .use(router)
  .use(store, key)
  .use(AntD)
  .component('LocalIcon', Fonts)
  .mount('#app')
