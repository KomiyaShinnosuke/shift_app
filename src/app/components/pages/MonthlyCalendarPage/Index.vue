<template>
  <BodyLayout class="monthly-calendar-page">
    <template v-slot:sub-header>
      <CalendarHeader
        type="monthly"
        :limitDate="limitDate"
        :viewDate="viewDate"
        @clickChangeDate="handleChangeViewDate"
        @clickToday="handleClickToday"
        @clickOpenShift="handleClickOpenShift"
      />
    </template>
    <template v-slot:contents>
      <MonthlyCalendar
        :shift="myShifts"
        :viewDate="viewDate"
        @click="handleClickOpen"
      />
    </template>
  </BodyLayout>
  <teleport to="#app">
    <div v-if="isOpen" class="modal">
      <CalendarInput
        :myShifts="myShifts"
        @handleClose="handleClickClose"
        @inputStartTime="handleInputStartTime"
        @inputEndTime="handleInputEndTime"
        @clickRest="handleClickRest"
        @clickFree="handleClickFree"
      />
    </div>
    <div v-if="isOpenShift" class="modal">
      <div class="shift-submit">
        <header>シフト提出<v-icon @click="handleClickCloseShift">mdi-close</v-icon></header>
        <body>
          <InputWithLabel label="提出期間" width="320px" />
          <InputWithLabel label="提出期限" width="320px" />
          <PrimaryButton
            class="button"
            @click="handleSubmitShift">提出</PrimaryButton>
        </body>
      </div>
    </div>
  </teleport>
</template>

<script lang="ts" scoped>
import { ref, defineComponent, onMounted, computed } from 'vue'
import { BodyLayout } from '@/components/atoms/Layout'
import { CalendarHeader } from '@/components/organisms/CalendarHeader'
import { CalendarInput } from '@/components/organisms/CalendarInput'
import { InputWithLabel } from '@/components/atoms/Input'
import { MonthlyCalendar } from './organisms/MonthlyCalendar'
import { PrimaryButton } from '@/components/atoms/Button'
import { addMonths } from 'date-fns'
import { useShiftStore } from '~/store/shifts'

export default defineComponent({
  components: {
    BodyLayout,
    CalendarHeader,
    CalendarInput,
    InputWithLabel,
    MonthlyCalendar,
    PrimaryButton,
  },
  setup() {
    const shiftStore = useShiftStore()
    const currentDate = new Date();
    const viewDate = ref<Date>(new Date());
    const isOpen = ref<Boolean>(false);
    const isOpenShift = ref<Boolean>(false);
    const myShifts = computed(() => {
      return shiftStore.myShifts;
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
    const handleClickClose = () => {
      isOpen.value = false;
    }
    const handleClickOpenShift = () => {
      isOpenShift.value = true;
    }
    const handleClickCloseShift = () => {
      isOpenShift.value = false;
    }
    const handleInputStartTime = (inputTime: Object, key: string) => {
      shiftStore.inputStartTime(inputTime, key);
    }
    const handleInputEndTime = (inputTime: Object, key: string) => {
      shiftStore.inputEndTime(inputTime, key);
    }
    const handleClickRest = (checked: boolean, key: string) => {
      shiftStore.clickRest(checked, key);
    }
    const handleClickFree = (checked: boolean, key: string) => {
      shiftStore.clickFree(checked, key);
    }
    const handleSubmitShift = () => {
      console.log('シフト提出のAPI')
    }
    onMounted(() => {
      shiftStore.getMyShift();
    });
    return {
      isOpen,
      isOpenShift,
      myShifts,
      limitDate,
      viewDate,
      handleChangeViewDate,
      handleClickToday,
      handleClickOpen,
      handleClickClose,
      handleClickOpenShift,
      handleClickCloseShift,
      handleInputStartTime,
      handleInputEndTime,
      handleClickRest,
      handleClickFree,
      handleSubmitShift,
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
  .shift-submit {
    width: 720px;
    text-align: center;
  }
}
</style>
