<template>
  <BodyLayout class="monthly-calendar-page">
    <template v-slot:sub-header>
      <CalendarHeader
        type="monthly"
        :limitDate="limitDate"
        :viewDate="viewDate"
        @clickChangeDate="handleChangeViewDate"
        @clickToday="handleClickToday"
      />
    </template>
    <template v-slot:contents>
      <MonthlyCalendar
        :viewDate="viewDate"
        @click="handleClickOpen"
      />
    </template>
  </BodyLayout>
  <teleport to="#app">
    <div v-if="isOpen" class="modal">
      <CalendarInput
        :isOpen="isOpen"
        :myShift="myShift"
        @handleClose="clickClose"
        @inputStartTime="handleInputStartTime"
        @inputEndTime="handleInputEndTime"
      />
    </div>
  </teleport>
</template>

<script lang="ts" scoped>
import { ref, defineComponent, onMounted, computed } from 'vue'
import { BodyLayout } from '@/components/atoms/Layout'
import { CalendarHeader } from '@/components/organisms/CalendarHeader'
import { CalendarInput } from '@/components/organisms/CalendarInput'
import { MonthlyCalendar } from './organisms/MonthlyCalendar'
import { addMonths } from 'date-fns'
import { useShiftStore } from '~/store/shifts'

export default defineComponent({
  components: {
    BodyLayout,
    CalendarHeader,
    CalendarInput,
    MonthlyCalendar,
  },
  setup() {
    const shiftStore = useShiftStore()
    const currentDate = new Date();
    const viewDate = ref<Date>(new Date());
    const isOpen = ref<Boolean>(false);
    const myShift = computed(() => {
      return shiftStore.myShift;
    })
    const limitDate = computed(() => {
      return shiftStore.limitDate;
    })
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
    const handleInputStartTime = (inputTime: Object, key: string) => {
      shiftStore.inputStartTime(inputTime, key);
    }
    const handleInputEndTime = (inputTime: Object, key: string) => {
      shiftStore.inputEndTime(inputTime, key);
    }
    onMounted(() => {
      shiftStore.getMyShift();
    });
    return {
      isOpen,
      myShift,
      limitDate,
      viewDate,
      clickClose,
      handleChangeViewDate,
      handleClickToday,
      handleClickOpen,
      handleInputStartTime,
      handleInputEndTime,

    }
  },
})
</script>

<style scoped lang="scss">
.monthly-calendar-page {

}
.modal {
  align-items: center;
  background: rgba(0,0,0,.35);
  display: flex;
  justify-content: space-around;
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  :first-child {
    background: #434242;
    color: white;
  }
}
</style>
