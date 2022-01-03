<template>
  <div class="calendar-header">
    <section class="view-mode-selector">
      <router-link class="selector" :class="{ selected: isDateSelected }" to="/login">日</router-link>
      <router-link class="selector" :class="{ selected: isWeekSelected }" :to="{ name: 'WeeklyCalendar' }">週</router-link>
      <router-link class="selector" :class="{ selected: isMonthSelected }" :to="{ name: 'MonthlyCalendar' }">月</router-link>
    </section>
    <section class="date-change">
      <button class="today" @click="handleClickToday">今日</button>
      <div class="arrow" @click="handleClickBefore">&lt</div>
        <div class="label">
          <span v-if="isMonthSelected">{{ currentMonth }}月</span>
          <span v-if="isWeekSelected">{{ startWeek }} 〜 {{ endWeek }}</span>
        </div>
      <div class="arrow" @click="handleClickNext">></div>
    </section>
    <section class="description">
      <div class="items">
        <div class="item"><canvas :style="canvasStyle('#7A9CC3')"></canvas>確定シフト</div>
        <div class="item"><canvas :style="canvasStyle('#E96B6B')"></canvas>確定休み</div>
      </div>
      <div class="items">
        <div class="item"><canvas :style="canvasStyle('#BEDAFA')"></canvas>希望シフト</div>
        <div class="item"><canvas :style="canvasStyle('#EAB5B5')"></canvas>希望休み</div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { getMonth, startOfWeek, endOfWeek, getDate, getDay } from 'date-fns'
import { DAY_OF_WEEK_STR } from '../../../../static/calendar'

export default defineComponent({
  props: {
    type: { type: String, default: 'monthly' },
    viewDate: { type: Date, default: null },
  },
  setup(props, context) {
    const isDateSelected = computed(() => {
      return props.type === 'dayly'
    })
    const isWeekSelected = computed(() => {
      return props.type === 'weekly'
    })
    const isMonthSelected = computed(() => {
      return props.type === 'monthly'
    })
    const currentMonth = computed(() => {
      return getMonth(props.viewDate) + 1
    })
    const startWeek = computed(() => {
      const date: Date = startOfWeek(props.viewDate)
      return `${getMonth(date) + 1}月${getDate(date)}日(${DAY_OF_WEEK_STR[getDay(date)]})`
    })
    const endWeek = computed(() => {
      const date: Date = endOfWeek(props.viewDate)
      return `${getMonth(date) + 1}月${getDate(date)}日(${DAY_OF_WEEK_STR[getDay(date)]})`
    })
    const canvasStyle = ((color: string) => {
      return {
        'background-color': color,
        'border-radius': '20px',
        bottom: '1px',
        height: '15px',
        'margin-right': '4px',
        position: 'relative',
        width: '60px',
      }
    })
    const handleClickBefore = () => {
      context.emit('clickChangeDate', -1)
    };
    const handleClickNext = () => {
      context.emit('clickChangeDate', 1)
    };
    const handleClickToday = () => {
      context.emit('clickToday')
    }
    return {
      isDateSelected,
      isWeekSelected,
      isMonthSelected,
      currentMonth,
      startWeek,
      endWeek,
      canvasStyle,
      handleClickBefore,
      handleClickNext,
      handleClickToday,
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
  padding: 0 40px;
  .view-mode-selector {
    .selector {
      border-color: #989494;
      border-radius: 1px;
      border-width: 1px;
      border-style: solid;
      color: black;
      display: inline-block;
      text-decoration: none;
      width: 24px;
      &:hover {
        background-color: #EAB5B5;
      }
      &.selected {
        background-color: #E96B6B;
      }
    }
  }
  .date-change {
    display: flex;
    .today {
      cursor: pointer;
      margin-right: 28px;
    }
    .arrow {
      cursor: pointer;
    }
    .label {
      margin: 0 24px;
    }
  }
  .description {
    font-size: 14px;
    .items {
      display: flex;
      .item {
        margin-right: 20px;
      }
    }
  }
}
</style>
