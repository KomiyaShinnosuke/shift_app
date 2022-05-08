<template>
  <div class="calendar-input">
    <header class="header">
      <span class="title">シフト希望提出フォーム</span>
      <v-icon @click="handleClickClose">mdi-close</v-icon>
    </header>
    <main class="body">
      <div class="each-date" v-for="shift in myShiftObjToArr">
        <div class="date">{{ shift.dateKey.getDate() }}日（{{ DAY_OF_WEEK_STR[shift.dateKey.getDay()] }}）</div>
        <div>
          <div class="input-time">
            開始時刻<Datepicker class="input" :minutesIncrement="15" v-model="shift.startTime" @update:modelValue="handleInputStartTime($event, shift.originDateKey)" timePicker />〜
            終了時刻<Datepicker class="input" :minutesIncrement="15" v-model="shift.endTime" @update:modelValue="handleInputEndTime($event, shift.originDateKey)" timePicker />
          </div>
          <div class="option-selector">
            <Checkbox color="secondary" label="休み" />
            <Checkbox color="secondary" label="free" />
            <TextWithIcon @click="handleClickComment" class="comment" icon="mdi-plus" text="コメント追加" />
          </div>
          <div v-if="openComment" class="comment-area"><v-textarea /></div>
        </div>
      </div>
    </main>
    <footer class="footer">
      <v-btn color="blue">シフト送信</v-btn>
    </footer>
  </div>
</template>

<script lang="ts">
import { ref, reactive, defineComponent, computed } from 'vue'
import { Checkbox } from '@/components/atoms/Checkbox'
import { InputWithLabel2 } from '@/components/atoms/Input'
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
    InputWithLabel2,
    TextWithIcon,
    Datepicker,
  },
  props: {
    isOpen: { type: Boolean, default: false },
    myShift: { type: Object, default: {} },
  },
  setup(props, context) {
    const openComment = ref<boolean>(false);
    const handleClickClose = () => {
      context.emit('handleClose');
    }
    const handleClickComment = () => {
      const open = true
      openComment.value = open
    }
    const handleInputStartTime = (data: { hours: string, minutes: string }, key: string) => {
      context.emit('inputStartTime', { 'hours': data.hours, 'minutes': data.minutes }, key)
    };
    const handleInputEndTime = (data: { hours: string, minutes: string }, key: string) => {
      context.emit('inputEndTime', { 'hours': data.hours, 'minutes': data.minutes }, key)
    };
    const myShiftObjToArr = computed(() => {
      const arrMyShift = Object.keys(props.myShift).map((dateKey) => {
        return {
          dateKey: new Date(dateKey),
          originDateKey: dateKey,
          ...props.myShift[dateKey],
          startTime: {
            "hours": props.myShift[dateKey].startTime ? props.myShift[dateKey].startTime.substr(0, props.myShift[dateKey].startTime.indexOf(':')) : null,
            "minutes": props.myShift[dateKey].startTime ? props.myShift[dateKey].startTime.substr(props.myShift[dateKey].startTime.indexOf(':') + 1) : null,
          },
          endTime: {
            "hours": props.myShift[dateKey].endTime ? props.myShift[dateKey].endTime.substr(0, props.myShift[dateKey].endTime.indexOf(':')) : null,
            "minutes": props.myShift[dateKey].endTime ? props.myShift[dateKey].endTime.substr(props.myShift[dateKey].endTime.indexOf(':') + 1) : null,
          },
        }
      })
      return arrMyShift.sort(function(a, b) {
        return (a.dateKey > b.dateKey) ? 1 : -1;
      })
    })
    return {
      DAY_OF_WEEK_STR,
      getDay,
      getDate,
      openComment,
      handleClickClose,
      handleClickComment,
      handleInputStartTime,
      handleInputEndTime,
      myShiftObjToArr,
    }
  },
})
</script>

<style scoped lang="scss">
.calendar-input {
  .header {
    border-bottom: 1px solid black;
    display: flex;
    height: 60px;
    padding: 20px;
    justify-content: space-between;
    .close-button {
      background-color: inherit;
      border: none;
      cursor: pointer;
      &:hover {
        box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.25);
      }
    }
  }
  .body {
    max-height: 500px;
    overflow-y: scroll;
    padding: 24px;
    .each-date {
      border-bottom: 1px solid white;
      display: flex;
      height: 80px;
      padding-top: 12px;
      padding-bottom: 78px; // checkboxの謎のCSSに影響されてこのスタイルを当てている
      .option-selector {
        display: flex;
        justify-content: space-between;
        margin-bottom: 4px;
        .comment {
          cursor: pointer;
          margin-top: 10px;
        }
      }
    }
    .input-time {
      display: flex;
      align-items: center;
      line-height: 1.5;
      .input {
        margin: 0 12px;
        width: 120px;
      }
    }
  }
  .footer {
    border-top: 1px solid black;
    padding: 16px;
    text-align: center;
  }
}
</style>
