import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import MonthlyCalendarPage from './app/components/pages/MonthlyCalendarPage/Index.vue'
import WeeklyCalendarPage from './app/components/pages/WeeklyCalendarPage/Index.vue'
import LoginPage from './app/components/pages/LoginPage/Index.vue'
import SettingPage from './app/components/pages/SettingPage/Index.vue'

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
  },
  {
    path: '/calendar/weekly',
    name: 'WeeklyCalendar',
    component: WeeklyCalendarPage,
  },
  {
    path: '/setting',
    name: 'Setting',
    component: SettingPage,
  },
]

const router = createRouter({
  // ORGではprocess.env.BASE_URLを指定していた
  history: createWebHistory(''),
  routes,
})

export default router
