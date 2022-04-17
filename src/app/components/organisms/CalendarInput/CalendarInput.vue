<template>
  <div class="calendar-input">
    <header class="header">
      <span class="title">シフト希望提出フォーム</span>
      <v-icon @click="handleClickClose">mdi-close</v-icon>
    </header>
    <main class="body">
      <div class="each-date" v-for="i in [...Array(30)].map((_, i) => i)">
        <div class="date">{{ i+1 }}日（月）</div>
        <div>
          <div class="input-time">
            開始時刻<Datepicker class="input" :minutesIncrement="15" v-model="time" timePicker />〜
            終了時刻<Datepicker class="input" :minutesIncrement="15" v-model="time" timePicker />
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
import Datepicker from 'vue3-date-time-picker';
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
    const shiftInput = reactive<{ start: string, end: string }>({
      start: "",
      end: "",
    })
    const handleClickClose = () => {
      context.emit('handleClose');
    }
    // 何故かこのイベントが発火しないのとモーダル表示が遅い
    const handleClickComment = () => {
      const open = true
      openComment.value = open
    }
    const handleInput = (data: string) => {
      shiftInput.start = data
    };
    const time = ref({
      hours: new Date().getHours(),
      minutes: new Date().getMinutes()
    });
    const inputDates = computed(() => {
      return Object.keys(props.myShift).map(date => new Date(date))
    })
    return {
      openComment,
      handleClickClose,
      handleClickComment,
      handleInput,
      time,
      inputDates,
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
