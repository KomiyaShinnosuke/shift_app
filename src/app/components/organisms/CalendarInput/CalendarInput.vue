<template>
  <SlotModal class="calendar-input" :isOpen="isOpen">
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

<script lang="ts">
import { ref,reactive, defineComponent } from 'vue'
import { Checkbox } from '../../atoms/Checkbox'
import { InputWithLabel2 } from '../../atoms/Input'
import { SlotModal } from '../../atoms/Modal'
import { TextWithIcon }  from '../../molecules/TextWithIcon'

export default defineComponent({
  components: {
    Checkbox,
    InputWithLabel2,
    SlotModal,
    TextWithIcon,
  },
  props: {
    isOpen: { type: Boolean, default: false },
  },
  setup(props, context) {
    const shiftInput = reactive<{ start: string, end: string }>({
      start: "",
      end: "",
    })
    const handleClickClose = () => {
      context.emit('handleClose');
    }
    const handleInput = (data: string) => {
      shiftInput.start = data
    };
    return {
      handleClickClose,
      handleInput,
    }
  },
})
</script>

<style scoped lang="scss">
.calendar-input {
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
