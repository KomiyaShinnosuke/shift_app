<template>
  <div class="calendar-cell">
    <div v-for="(week, index) in calendar" :key="index" class="row">
      <div v-for="(day, index) in week" :key="index" class="cell">
        <span>{{ day.date }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'

export default defineComponent({
  name: 'CalendarCell',
  props: {
    calendar: { type: Array, required: true },
  },
  setup(props) {
  },
})
</script>

<style scoped lang="scss">
.calendar-cell {
  .row {
    display: flex;
    justify-content: space-between;
    .cell {
      background-color: #F9F8F8;
      border-color: #989494;
      border-radius: 1px;
      border-width: 1px;
      border-style: solid;
      display: grid;
      height: 100px;
      margin: -1px;
      width: 150px;
    }
  }
}
</style>
