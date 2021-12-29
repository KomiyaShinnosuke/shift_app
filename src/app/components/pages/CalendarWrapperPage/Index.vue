<script setup lang="ts">
import { ref, reactive } from 'vue'
import { MonthlyCalendar } from './organisms/MonthlyCalendar'

let currentDate: date = new Date()
let currentView = ref('monthly')
const state = reactive({
  currentView
})
const isMonthlyView: boolean = currentView.value === 'monthly'
const changeCurrentView = (view: string): void => {
  console.log(view)
  state.currentView = view
}
</script>

<template>
  <select
    v-model="currentView"
    @change="changeCurrentView"
  >
    <option value="daily">日</option>
    <option value="weekly">週</option>
    <option value="monthly">月</option>
  </select>
  <MonthlyCalendar
    v-if="isMonthlyView"
    :currentDate="currentDate"
  />
</template>

<style>

</style>
