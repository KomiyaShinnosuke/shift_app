<template>
  <div class="monthly-calendar">
    <div class="header">
      <div class="youbi" v-for="youbi in dayOfWeekStr">
        {{ youbi }}
      </div>
    </div>
    <CalendarCell
      :calendar="getCalendar()"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { CalendarCell } from '../CalendarCell'
import {
  endOfMonth,
  startOfMonth,
  differenceInCalendarDays,
  addDays,
  getDate,
  subDays,
} from 'date-fns'
import { DAY_OF_WEEK_STR } from '~/static/calendar'

export default defineComponent({
  name: 'MonthlyCalendar',
  components: { CalendarCell },
  props: {
    shift: { type: Object, required: true },
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
      const startDate = subDays(startOfCurrentMonth.value, startOfCurrentMonth.value.getDay())
      return Math.ceil(differenceInCalendarDays(endDate.value, startDate) / 7)
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
.monthly-calendar {
  margin: auto;
  width: 1000px;
  .header {
    display: flex;
    justify-content: space-between;
    .youbi {
      width: 150px;
      &:first-child {
        color: #E96B6B;
      }
      &:last-child {
        color: #7A9CC3;
      }
    }
  }
}
</style>
