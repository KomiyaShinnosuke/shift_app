<template>
  <div class="calendar-header">
    <section class="view-mode-selector">
      <router-link class="selector" to="/login">日</router-link>
      <router-link class="selector" to="/login">週</router-link>
      <router-link class="selector" :to="{ name: 'MonthlyCalendar' }">月</router-link>
    </section>
    <section class="date-change">
      <button @click="handleClickBeforeMonth">&lt</button>
      hoge 月
      <button @click="handleClickNextMonth">></button>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    currentDate: { type: Date, default: '' },
  },
  setup(props, context) {
    const handleClickBeforeMonth = () => {
      context.emit('clickChangeDate', -1)
    };
    const handleClickNextMonth = () => {
      context.emit('clickChangeDate', 1)
    };
    return {
      handleClickBeforeMonth,
      handleClickNextMonth,
    }
  },
})
</script>

<style scoped lang="scss">
.calendar-header {
  align-items: center;
  background-color: #efeded;
  display: flex;
  height: 60px;
  justify-content: space-between;
  &::after {
    content: '';
  }
}
</style>
