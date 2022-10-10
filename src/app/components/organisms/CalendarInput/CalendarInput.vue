<template>
  <div class="calendar-input">
    <header class="header">
      <span class="title">シフト希望提出フォーム</span>
      <v-icon @click="handleClickClose">mdi-close</v-icon>
    </header>
    <main class="body">
      <div class="each-date" v-for="(shift, index) in myShifts">
        <CalendarInputRow
          :calendarIndex="index"
          :shift="shift"
          :isOpen="openComment.includes(index)"
          @clickComment="handleClickComment"
          @inputStartTime="handleInputStartTime"
          @inputEndTime="handleInputEndTime"
          @clickRest="handleClickRest"
          @clickFree="handleClickFree"
        />
      </div>
    </main>
    <footer class="footer">
      <v-btn color="blue">シフト送信</v-btn>
    </footer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import CalendarInputRow from './CalendarInputRow.vue'
import 'vue3-date-time-picker/dist/main.css'

export default defineComponent({
  components: {
    CalendarInputRow,
  },
  props: {
    myShifts: { type: Array, default: [] },
  },
  setup(_, context) {
    const openComment = [] as number[];
    const handleClickClose = () => {
      context.emit('handleClose');
    }
    const handleClickComment = (comment: number) => {
      const index = openComment.indexOf(comment)
      if (index == -1) {
        openComment.push(comment)
      } else {
        openComment.splice(index, 1)
      }
    };
    const handleInputStartTime = (data: { hours: number, minutes: number }, index: number) => {
      context.emit('inputStartTime', data, index)
    };
    const handleInputEndTime = (data: { hours: number, minutes: number }, index: number) => {
      context.emit('inputEndTime', data, index)
    };
    const handleClickRest = (checked: boolean, index: number) => {
      context.emit('clickRest', checked, index);
    };
    const handleClickFree = (checked: boolean, index: number) => {
      context.emit('clickFree', checked, index);
    };
    return {
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
      // height: 80px;
      padding-top: 12px;
      padding-bottom: 78px; // checkboxの謎のCSSに影響されてこのスタイルを当てている
    }
  }
  .footer {
    border-top: 1px solid black;
    padding: 16px;
    text-align: center;
  }
}
</style>
