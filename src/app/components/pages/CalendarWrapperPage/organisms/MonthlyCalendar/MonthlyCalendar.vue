<template>
  <div class="calendar">
    <button @click="handleBeforeMonth">前月</button>　　<button @click="handleNextMonth">翌月</button>
    <div class="header">
      <div class="youbi" v-for="(youbi, index) in dayOfWeekStr">
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
import { ref, defineComponent, defineProps, computed } from 'vue'
import {
  endOfMonth,
  startOfMonth,
  differenceInCalendarDays,
  addDays,
  addMonths,
  getDate,
  subDays,
  subMonths
} from 'date-fns'

export default defineComponent({
  name: 'MonthlyCalendar',
  props: {
    currentDate: {
      type: Date,
      required: true,
    }
  },
  data() {
    return {
      currentViewDate: this.currentDate as date
    }
  },
  computed: {
    dayOfWeekStr(): string[] {
      return [ "日", "月", "火", "水", "木", "金", "土" ]
    },
    endDate(): date {
      return endOfMonth(this.currentViewDate)
    },
    startOfCurrentMonth(): date {
      return startOfMonth(this.currentViewDate)
    },
    weekNumber(): number {
      return Math.ceil(differenceInCalendarDays(this.endDate, this.startOfCurrentMonth) / 7)
    },
  },
  methods: {
    getCalendar(): array {
      let startDate = subDays(this.startOfCurrentMonth, this.startOfCurrentMonth.getDay())
      const calendars = [];
      for (let week = 0; week < this.weekNumber; week++) {
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
    },
    handleBeforeMonth(): void {
      this.currentViewDate = subMonths(this.currentViewDate, 1)
    },
    handleChangeView(view: string): void {
      console.log(view)
      this.$emit('changeView', view)
    },
    handleNextMonth(): void {
      this.currentViewDate = addMonths(this.currentViewDate, 1)
    },
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
