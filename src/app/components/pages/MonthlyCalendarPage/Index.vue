<template>
  <BodyLayout class="monthly-calendar-page">
    <template v-slot:sub-header>
      <CalendarHeader
        type = "monthly"
        :viewDate="viewDate"
        @clickChangeDate="handleChangeViewDate"
        @clickToday="handleClickToday"
      />
      <CalendarInput :isOpen="isOpen" @handleClose="clickClose" />
    </template>
    <template v-slot:contents>
      <MonthlyCalendar
        :viewDate="viewDate"
         @click="handleClickOpen"
      />
    </template>
  </BodyLayout>
</template>

<script lang="ts" scoped>
import { ref,reactive, defineComponent } from 'vue'
import { BodyLayout } from '@/components/atoms/Layout'
import { CalendarHeader } from '@/components/organisms/CalendarHeader'
import { CalendarInput } from '@/components/organisms/CalendarInput'
import { MonthlyCalendar } from './organisms/MonthlyCalendar'
import { addMonths } from 'date-fns'

export default defineComponent({
  components: {
    BodyLayout,
    CalendarHeader,
    CalendarInput,
    MonthlyCalendar,
  },
  setup() {
    const currentDate = new Date();
    const viewDate = ref<Date>(new Date());
    const isOpen = ref<Boolean>(false);
    const handleChangeViewDate = (value: number) => {
      viewDate.value = addMonths(viewDate.value, value)
    };
    const handleClickToday = () => {
      viewDate.value = currentDate
    };
    const handleClickOpen = () => {
      isOpen.value = true;
    }
    const clickClose = () => {
      isOpen.value = false;
    }
    return {
      isOpen,
      viewDate,
      clickClose,
      handleChangeViewDate,
      handleClickToday,
      handleClickOpen,
    }
  },
})
</script>

<style scoped lang="scss">
.monthly-calendar-page {

}
</style>
