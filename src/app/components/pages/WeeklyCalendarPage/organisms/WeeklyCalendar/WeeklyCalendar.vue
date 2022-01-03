<template>
  <div class="weekly-calendar">
    <div class="header">
      <div class="first-row">
        <span v-for="youbi in dayOfWeekStr" :key="youbi" class="youbi">{{ youbi }}</span>
      </div>
      <div class="second-row">
        <span v-for="(day, index) in getCalendar()" :key="index" class="date">{{ day.date }}</span>
      </div>
    </div>
    <div class="main">
      <WeeklyBoard />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import {
  endOfWeek,
  startOfWeek,
  addDays,
  getDate,
  subDays,
} from 'date-fns'
import { WeeklyBoard } from '../WeeklyBoard'
import { DAY_OF_WEEK_STR } from '../../../../../../static/calendar'

export default defineComponent({
  name: 'WeeklyCalendar',
  components: { WeeklyBoard },
  props: {
    viewDate: { type: Date, required: true }
  },
  setup(props) {
    const dayOfWeekStr = computed<string[]>(() => {
      return DAY_OF_WEEK_STR
    })
    const endDate = computed(() => {
      return endOfWeek(props.viewDate)
    })
    const startDate = computed(() => {
      return startOfWeek(props.viewDate)
    })
    const getCalendar = () => {
      let startDateOfWeek = subDays(startDate.value, startDate.value.getDay())
      const weekRow = [];
      for (let day = 0;  day < 7; day++) {
        weekRow.push({
          date: getDate(startDateOfWeek),
        });
        startDateOfWeek = addDays(startDateOfWeek, 1);
      }
      return weekRow;
    }
    return {
      dayOfWeekStr,
      endDate,
      startDate,
      getCalendar,
    }
  },
})
</script>

<style scoped lang="scss">
.weekly-calendar {
  .header {
    margin: auto;
    width: 1000px;
    .first-row {
      display: flex;
      justify-content: space-between;
      .youbi {
        &:first-child {
          color: #E96B6B;
        }
        &:last-child {
          color: #7A9CC3;
        }
      }
    }
    .second-row {
      display: flex;
      justify-content: space-between;
    }
  }
  .main {
    margin: auto;
    width: 1000px;
  }
}
</style>
