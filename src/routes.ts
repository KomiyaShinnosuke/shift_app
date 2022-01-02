import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import MonthlyCalendarPage from './app/components/pages/MonthlyCalendarPage/Index.vue'
import LoginPage from './app/components/pages/LoginPage/Index.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'Login',
    component: LoginPage,
  },
  {
    path: '/calendar/monthly',
    name: 'MonthlyCalendar',
    component: MonthlyCalendarPage,
  }
]

const router = createRouter({
  // ORGではprocess.env.BASE_URLを指定していた
  history: createWebHistory(''),
  routes,
})

export default router
