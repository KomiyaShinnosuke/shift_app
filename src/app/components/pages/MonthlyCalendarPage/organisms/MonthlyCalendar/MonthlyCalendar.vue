<template>
  <div class="calendar">
    <div class="header">
      <div class="youbi" v-for="youbi in dayOfWeekStr">
        {{ youbi }}
      </div>
    </div>
    <div v-for="(week, index) in getCalendar()" :key="index" class="row">
      <div v-for="(day, index) in week" :key="index" class="cell">
        <span>{{ day.date }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import {
  endOfMonth,
  startOfMonth,
  differenceInCalendarDays,
  addDays,
  getDate,
  subDays,
} from 'date-fns'
import { DAY_OF_WEEK_STR } from '../../../../../../static/calendar'

export default defineComponent({
  name: 'MonthlyCalendar',
  props: {
    viewDate: { type: Date, required: true }
  },
  setup(props) {
    const dayOfWeekStr = computed<string[]>(() => {
      return DAY_OF_WEEK_STR
    })
    const endDate = computed(() => {
      return endOfMonth(props.viewDate)
    })
    const startOfCurrentMonth = computed(() => {
      return startOfMonth(props.viewDate)
    })
    const weekNumber = computed(() => {
      return Math.ceil(differenceInCalendarDays(endDate.value, startOfCurrentMonth.value) / 7)
    })
    const getCalendar = () => {
      let startDate = subDays(startOfCurrentMonth.value, startOfCurrentMonth.value.getDay())
      const calendars = [];
      for (let week = 0; week < weekNumber.value; week++) {
        const weekRow = [];
        for (let day = 0;  day < 7; day++) {
          weekRow.push({
            date: getDate(startDate),
          });
          startDate = addDays(startDate, 1);
        }
        calendars.push(weekRow);
      }
      return calendars;
    }
    return {
      dayOfWeekStr,
      endDate,
      startOfCurrentMonth,
      weekNumber,
      getCalendar,
    }
  },
})
</script>

<style scoped lang="scss">
.calendar {
  .header {
    display: flex;
    .youbi {
      display: inline-block;
      width: 100px;
      &:first-child {
        color: #E96B6B;
      }
      &:last-child {
        color: #7A9CC3;
      }
    }
  }
  .row {
    display: flex;
    .cell {
      width: 100px;
    }
  }
}
</style>
