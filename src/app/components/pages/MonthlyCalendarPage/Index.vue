<template>
  <BodyLayout>
    <template v-slot:sub-header>
      <CalendarHeader
        type = "monthly"
        :viewDate="viewDate"
        @clickChangeDate="handleChangeViewDate"
        @clickToday="handleClickToday"
      />
      <!-- 後でここはコンポーネント化したい -->
      <SlotModal :isOpen="false">
        <div>
          <header>11月シフト希望提出フォーム</header>
          <div></div>
        </div>
      </SlotModal>
    </template>
    <template v-slot:contents>
      <MonthlyCalendar
        :viewDate="viewDate"
      />
    </template>
  </BodyLayout>
</template>

<style>

</style>
<script lang="ts" scoped>
import { ref, defineComponent } from 'vue'
import { BodyLayout } from '../../atoms/Layout'
import { CalendarHeader } from '../../organisms/CalendarHeader'
import { MonthlyCalendar } from './organisms/MonthlyCalendar'
import { SlotModal } from '../../atoms/Modal'
import { addMonths } from 'date-fns'

export default defineComponent({
  components: { BodyLayout, CalendarHeader, MonthlyCalendar, SlotModal },
  setup() {
    const currentDate = ref<Date>(new Date());
    const viewDate = ref<Date>(new Date());
    const handleChangeViewDate = (value: number) => {
      viewDate.value = addMonths(viewDate.value, value)
    };
    const handleClickToday = () => {
      viewDate.value = currentDate.value
    };
    return {
      currentDate,
      viewDate,
      handleChangeViewDate,
      handleClickToday,
    }
  },
})
</script>
