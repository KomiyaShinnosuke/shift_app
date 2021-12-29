import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import CalendarWrapperPage from './app/components/pages/CalendarWrapperPage/Index.vue'
import LoginPage from './app/components/pages/LoginPage/Index.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'login',
    component: LoginPage,
  },
  {
    path: '/calendar',
    name: 'calendar',
    component: CalendarWrapperPage,
  }
]

const router = createRouter({
  // ORGではprocess.env.BASE_URLを指定していた
  history: createWebHistory(''),
  routes,
})

export default router
