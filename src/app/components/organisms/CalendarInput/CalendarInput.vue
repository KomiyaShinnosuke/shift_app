<template>
  <div class="calendar-input">
    <header class="header">
      <span class="title">シフト希望提出フォーム</span>
      <v-icon @click="handleClickClose">mdi-close</v-icon>
    </header>
    <main class="body">
      <div class="each-date" v-for="(shift, index) in myShifts">
        <div class="date">{{ new Date(shift.date).getDate() }}日（{{ DAY_OF_WEEK_STR[new Date(shift.date).getDay()] }}）</div>
        <div>
          <div class="input-time">
            開始時刻<Datepicker class="input" :minutesIncrement="15" v-model="shift.startTime" @update:modelValue="handleInputStartTime($event, index)" timePicker />〜
            終了時刻<Datepicker class="input" :minutesIncrement="15" v-model="shift.endTime" @update:modelValue="handleInputEndTime($event, index)" timePicker />
          </div>
          <div class="option-selector">
            <Checkbox
              :checked="shift.isRest"
              :dateKey="shift.date"
              color="secondary"
              label="休み"
              @click="handleClickRest($event, index)"
            />
            <Checkbox
              :checked="shift.isFree"
              :dateKey="shift.date"
              color="secondary"
              label="free"
              @click="handleClickFree($event, index)"
            />
            <TextWithIcon @click="handleClickComment(shift.date)" class="comment" icon="mdi-plus" text="コメント追加" />
          </div>
          <div v-if="openComment.dateKey" class="comment-area"><v-textarea /></div>
        </div>
      </div>
    </main>
    <footer class="footer">
      <v-btn color="blue">シフト送信</v-btn>
    </footer>
  </div>
</template>

<script lang="ts">
import { reactive, defineComponent } from 'vue'
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
    myShifts: { type: Array, default: [] },
  },
  setup(props, context) {
    const openComment = reactive({ dateKey: false });
    const handleClickClose = () => {
      context.emit('handleClose');
    }
    const handleClickComment = (dateKey: string) => {
      const open = true
      openComment[dateKey].value = open
    };
    // onMounted(() => {
    //   props.myShifts.forEach(())
    //   openComment[dateKey].value = open
    // });
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
      handleClickClose,
      handleClickComment,
      handleInputStartTime,
      handleInputEndTime,
      handleClickRest,
      handleClickFree,
      openComment,
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
