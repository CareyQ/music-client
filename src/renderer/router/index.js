import { createRouter, createWebHashHistory } from 'vue-router'
import BasicLayout from '@renderer/layout/BaseicLayout.vue'
import { Menu } from './modules/menu'
import { Routers } from './modules/other'

const routes = [
  {
    path: '/',
    name: 'index',
    redirect: '/home',
    component: BasicLayout,
    children: [...Menu, ...Routers]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
