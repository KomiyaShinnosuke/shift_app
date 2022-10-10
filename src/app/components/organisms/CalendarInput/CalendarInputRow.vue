<template>
  <div class="date">{{ new Date(shift.date).getDate() }}日（{{ DAY_OF_WEEK_STR[new Date(shift.date).getDay()] }}）</div>
  <div>
    <div class="input-time">
      開始時刻<Datepicker
        class="input"
        :minutesIncrement="15"
        v-model="shift.startTime"
        @update:modelValue="handleInputStartTime($event, calendarIndex)"
        timePicker
      />〜終了時刻<Datepicker
        class="input"
        :minutesIncrement="15"
        v-model="shift.endTime"
        @update:modelValue="handleInputEndTime($event, calendarIndex)"
        timePicker
      />
    </div>
    <div class="option-selector">
      <Checkbox
        :checked="shift.isRest"
        :dateKey="shift.date"
        color="secondary"
        label="休み"
        @click="handleClickRest($event, calendarIndex)"
      />
      <Checkbox
        :checked="shift.isFree"
        :dateKey="shift.date"
        color="secondary"
        label="free"
        @click="handleClickFree($event, calendarIndex)"
      />
      <TextWithIcon @clickTextWithIcon="handleClickComment(calendarIndex)" class="comment" icon="mdi-plus" text="コメント追加" />
    </div>
    <div v-if="isOpen" class="comment-area"><v-textarea />hoge</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Checkbox } from '@/components/atoms/Checkbox'
import { TextWithIcon }  from '@/components/molecules/TextWithIcon'
import { DAY_OF_WEEK_STR } from '~/static/calendar'
import Datepicker from 'vue3-date-time-picker';
import {
  getDay,
  getDate,
} from 'date-fns'
import 'vue3-date-time-picker/dist/main.css'

export default defineComponent({
  components: {
    Checkbox,
    TextWithIcon,
    Datepicker,
  },
  props: {
    calendarIndex: { type: Number, default: null },
    isOpen: { type: Boolean, default: false },
    shift: { type: Object, default: {} },
  },
  setup(_, context) {
    const handleClickComment = (comment: number) => {
      context.emit('clickComment', comment)
    };
    const handleInputStartTime = (data: { hours: number, minutes: number }, index: number) => {
      context.emit('inputStartTime', data, index)
    };
    const handleInputEndTime = (data: { hours: number, minutes: number }, index: number) => {
      context.emit('inputEndTime', data, index)
    };
    const handleClickRest = (checked: boolean, index: number) => {
      if (typeof checked !== 'boolean') { return }
      context.emit('clickRest', checked, index);
    };
    const handleClickFree = (checked: boolean, index: number) => {
      if (typeof checked !== 'boolean') { return }
      context.emit('clickFree', checked, index);
    };
    return {
      DAY_OF_WEEK_STR,
      getDay,
      getDate,
      handleClickComment,
      handleInputStartTime,
      handleInputEndTime,
      handleClickRest,
      handleClickFree,
    }
  },
})
</script>

<style scoped lang="scss">
.input-time {
  display: flex;
  align-items: center;
  line-height: 1.5;
  .input {
    margin: 0 12px;
    width: 120px;
  }
}
.option-selector {
  display: flex;
  justify-content: space-between;
  margin-bottom: 4px;
  .comment {
    cursor: pointer;
    margin-top: 10px;
  }
}
</style>
