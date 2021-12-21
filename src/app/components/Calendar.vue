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
import { endOfMonth, startOfMonth, differenceInCalendarDays, addDays, addMonths, getDate, subDays, subMonths } from 'date-fns'

defineProps<{ msg: string }>()

export default defineComponent({
  name: 'Calendar',
  // TODO: 次はこれらをsetupに移すのと、axiosを使ったAPI通信を行いたい
  data() {
    return {
      currentDate: new Date(),
    }
  },
  computed: {
    dayOfWeekStr() {
      return [ "日", "月", "火", "水", "木", "金", "土" ]
    },
    endDate() {
      return endOfMonth(this.currentDate)
    },
    startOfCurrentMonth() {
      return startOfMonth(this.currentDate)
    },
    weekNumber() {
      return Math.ceil(differenceInCalendarDays(this.endDate, startOfMonth(this.currentDate)) / 7)
    },
  },
  methods: {
    getCalendar() {
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
    handleBeforeMonth() {
      this.currentDate = subMonths(this.currentDate, 1)
    },
    handleNextMonth() {
      this.currentDate = addMonths(this.currentDate, 1)
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
