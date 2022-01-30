<template>
  <BodyLayout class="monthly-calendar-page">
    <template v-slot:sub-header>
      <CalendarHeader
        type = "monthly"
        :viewDate="viewDate"
        @clickChangeDate="handleChangeViewDate"
        @clickToday="handleClickToday"
      />
      <!-- 後でここはコンポーネント化したい -->
      <SlotModal :isOpen="isOpen">
        <div>
          <header class="header">
            <v-icon @click="handleClickClose">mdi-close</v-icon>
            <span class="title">11月シフト希望提出フォーム</span>
          </header>
          <main class="body">
            <div class="each-date" v-for="i in [...Array(30)].map((_, i) => i)">
              <div class="date">{{ i+1 }}日（月）</div>
              <div>
                <div class="input-time">
                  <InputWithLabel2
                    label="開始日時："
                    height="24px"
                    width="100px"
                    @input="handleInput($event)"
                  />〜
                  <InputWithLabel2
                    label="終了日時："
                    height="24px"
                    width="100px"
                    @input="handleInput($event)"
                  />
                </div>
                <div class="option-selector">
                  <Checkbox color="secondary" label="休み" />
                  <Checkbox color="secondary" label="free" />
                  <TextWithIcon icon="mdi-plus" text="コメント追加" />
                </div>
              </div>
            </div>
          </main>
          <footer class="footer">
            <v-btn color="blue">シフト送信</v-btn>
          </footer>
        </div>
      </SlotModal>
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
import { BodyLayout } from '../../atoms/Layout'
import { CalendarHeader } from '../../organisms/CalendarHeader'
import { Checkbox } from '../../atoms/Checkbox'
import { InputWithLabel2 } from '../../atoms/Input'
import { MonthlyCalendar } from './organisms/MonthlyCalendar'
import { SlotModal } from '../../atoms/Modal'
import { TextWithIcon }  from '../../molecules/TextWithIcon'
import { addMonths } from 'date-fns'

export default defineComponent({
  components: {
    BodyLayout,
    CalendarHeader,
    Checkbox,
    InputWithLabel2,
    MonthlyCalendar,
    SlotModal,
    TextWithIcon,
  },
  setup() {
    const currentDate = new Date();
    const viewDate = ref<Date>(new Date());
    const isOpen = ref<Boolean>(false);
    const shiftInput = reactive<{ start: string, end: string }>({
      start: "",
      end: "",
    })
    const handleChangeViewDate = (value: number) => {
      viewDate.value = addMonths(viewDate.value, value)
    };
    const handleClickToday = () => {
      viewDate.value = currentDate
    };
    const handleClickClose = () => {
      isOpen.value = false;
    }
    const handleClickOpen = () => {
      isOpen.value = true;
    }
    const handleInput = (data: string) => {
      shiftInput.start = data
    };
    return {
      isOpen,
      // shiftInput,
      viewDate,
      handleChangeViewDate,
      handleClickToday,
      handleClickClose,
      handleClickOpen,
      handleInput,
    }
  },
})
</script>

<style scoped lang="scss">
.monthly-calendar-page {
  .header {
    border-bottom: 1px solid black;
    height: 60px;
    padding: 20px;
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
    max-height: 600px;
    overflow-y: scroll;
    padding: 24px;
    .each-date {
      border-bottom: 1px solid white;
      display: flex;
      height: 80px;
      padding: 12px 0;
      .option-selector {
        display: flex;
      }
    }
    .input-time {
      display: flex;
      align-items: center;
      line-height: 1.5;
    }
  }
  .footer {
    border-top: 1px solid black;
    padding: 16px;
    text-align: center;
  }
}
</style>
