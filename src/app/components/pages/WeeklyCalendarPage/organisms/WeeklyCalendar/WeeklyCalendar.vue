<template>
  <div class="weekly-calendar">
    <div class="main">
      <Table :columns="calendarHeader" :items="weekDays" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { startOfWeek } from 'date-fns'
import { Table } from '@/components/atoms/Table'
import { DAY_OF_WEEK_STR } from '~/static/calendar'

export default defineComponent({
  name: 'WeeklyCalendar',
  components: { Table },
  props: {
    viewDate: { type: Date, required: true }
  },
  setup(props) {
    const startDate = computed<Date>(() => {
      return startOfWeek(props.viewDate)
    })
    const weekDays = [
      {
        label: "komiya",
        shifts: ["10-16", "11-16", "12-16", "13-16", "14-16", "15-16", "16-16"]
      },
      {
        label: "kohsuke",
        shifts: ["10-16", "10-16", "10-16", "10-16", "10-16", "10-16", "10-16"]
      },
      {
        label: "machida",
        shifts: ["10-16", "10-16", "10-16", "10-16", "10-16", "10-16", "10-16"]
      },
    ]
    const calendarHeader = computed(() => {
      let date = startDate.value
      const weekDays = []
      for (let i = 0; i < 7; i++) {
        weekDays.push(date.getDate())
        date.setDate( date.getDate() + 1 );
      }
      return [
        {},
        { text: `${weekDays[0]}(${DAY_OF_WEEK_STR[0]})`, style: { color: 'red' } },
        { text: `${weekDays[1]}(${DAY_OF_WEEK_STR[1]})` },
        { text: `${weekDays[2]}(${DAY_OF_WEEK_STR[2]})` },
        { text: `${weekDays[3]}(${DAY_OF_WEEK_STR[3]})` },
        { text: `${weekDays[4]}(${DAY_OF_WEEK_STR[4]})` },
        { text: `${weekDays[5]}(${DAY_OF_WEEK_STR[5]})` },
        { text: `${weekDays[6]}(${DAY_OF_WEEK_STR[6]})`, style: { color: 'blue' } },
      ]
    })
    return {
      weekDays,
      calendarHeader,
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
