<template>
  <CalendarHeader
    :currentDate="viewDate"
    @clickChangeDate="handleChangeViewDate"
  />
  <MonthlyCalendar
    :viewDate="viewDate"
  />
</template>

<style>

</style>
<script lang="ts" scoped>
import { ref, defineComponent } from 'vue'
import { CalendarHeader } from '../../organisms/CalendarHeader'
import { MonthlyCalendar } from './organisms/MonthlyCalendar'
import { addMonths } from 'date-fns'

export default defineComponent({
  components: { CalendarHeader, MonthlyCalendar },
  setup() {
    const currentDate = ref<Date>(new Date());
    const viewDate = ref<Date>(new Date());
    const handleChangeViewDate = (value: number) => {
      viewDate.value = addMonths(viewDate.value, value)
    };
    return {
      currentDate,
      viewDate,
      handleChangeViewDate,
    }
  },
})
</script>
