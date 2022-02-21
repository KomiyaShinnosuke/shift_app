<template>
  <BodyLayout>
    <template v-slot:sub-header>
      <CalendarHeader
        type = "weekly"
        :viewDate="viewDate"
        @clickChangeDate="handleChangeViewDate"
        @clickToday="handleClickToday"
      />
    </template>
    <template v-slot:contents>
      <WeeklyCalendar
        :viewDate="viewDate"
      />
    </template>
  </BodyLayout>
</template>

<style>

</style>
<script lang="ts" scoped>
import { ref, defineComponent } from 'vue'
import { BodyLayout } from '@/components/atoms/Layout'
import { CalendarHeader } from '@/components/organisms/CalendarHeader'
import { WeeklyCalendar } from './organisms/WeeklyCalendar'
import { addWeeks } from 'date-fns'

export default defineComponent({
  components: { BodyLayout, CalendarHeader, WeeklyCalendar },
  setup() {
    const currentDate = new Date();
    const viewDate = ref<Date>(new Date());
    const handleChangeViewDate = (value: number) => {
      viewDate.value = addWeeks(viewDate.value, value)
    };
    const handleClickToday = () => {
      viewDate.value = currentDate
    };
    return {
      viewDate,
      handleChangeViewDate,
      handleClickToday,
    }
  },
})
</script>
