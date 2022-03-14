import { createRouter, createWebHashHistory } from 'vue-router'
import BasicLayout from '@renderer/layout/BaseicLayout.vue'
import { Routers } from './modules/routers'

const routes = [
  {
    path: '/',
    name: 'index',
    redirect: '/home',
    component: BasicLayout,
    children: [...Routers]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
