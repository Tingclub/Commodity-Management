import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
const routes: RouteRecordRaw[] = [
  {
    path: '/login',
    name: 'login',
    component: () => { import('../components/login/index.vue') }
  },
  {
    path: '/',
    name: 'home',
    component: () => { import('../components/home/index.vue') }
  }
]
const router = createRouter({
  history: createWebHashHistory(), // 路由模式
  routes // 路由规则

})
export default router
