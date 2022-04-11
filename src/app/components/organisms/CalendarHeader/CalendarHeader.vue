<template>
  <div class="calendar-header">
    <section class="view-mode-selector">
      <v-btn  @click="handleClickViewMode('daily')">日</v-btn>
      <v-btn  @click="handleClickViewMode('weekly')">週</v-btn>
      <v-btn  @click="handleClickViewMode('monthly')">月</v-btn>
    </section>
    <section class="date-change">
      <!-- TODO: buttonに切り出す -->
      <v-btn class="today" @click="handleClickToday">今日</v-btn>
      <Icon @handleClick="handleClickBefore" icon="mdi-menu-left" />
        <div class="label">
          <span v-if="routeName === 'MonthlyCalendar'">{{ currentMonth }}月</span>
          <span v-if="routeName === 'WeeklyCalendar'">{{ startWeek }} 〜 {{ endWeek }}</span>
        </div>
      <Icon class="right" @handleClick="handleClickNext" icon="mdi-menu-right" />
    </section>
    <section class="limit-date">シフト提出締切日: {{ limitDate }}</section>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { getMonth, startOfWeek, endOfWeek, getDate, getDay } from 'date-fns'
import { DAY_OF_WEEK_STR } from '~/static/calendar'
import { Button } from '@/components/atoms/Button'
import { Icon } from '@/components/atoms/Icon'

export default defineComponent({
  components: { Button, Icon },
  props: {
    type: { type: String, default: 'monthly' },
    limitDate: { type: String, default: null },
    viewDate: { type: Date, default: null },
  },
  setup(props, context) {
    const route = useRoute();
    const router = useRouter();
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
    const routeName = computed(() => { return route.name })
    const handleClickBefore = () => {
      context.emit('clickChangeDate', -1)
    };
    const handleClickNext = () => {
      context.emit('clickChangeDate', 1)
    };
    const handleClickToday = () => {
      context.emit('clickToday')
    };
    const handleClickViewMode = (viewMode: string) => {
      const upperViewMode = viewMode.charAt(0).toUpperCase() + viewMode.slice(1);
      router.push({ name: `${upperViewMode}Calendar` })
    }
    return {
      currentMonth,
      startWeek,
      endWeek,
      routeName,
      handleClickBefore,
      handleClickNext,
      handleClickToday,
      handleClickViewMode,
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
  .date-change {
    display: flex;
    .today {
      cursor: pointer;
      margin-right: 28px;
    }
    .right {
      transform: rotete(180deg);
    }
    .label {
      margin: 0 24px;
    }
  }
  .limit-date {
    color: #C54949;
  }
}
</style>
