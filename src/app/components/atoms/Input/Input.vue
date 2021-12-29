<template>
  <div class="basic-input" :style="styles">
    <input
      v-model="inputValue"
      :placeholder="placeholder"
      :type="type"
      min="0"
      max="20"
      class="basic-form-input input-border"
      :style="styles"
      @input="handleInput(inputValue)"
    />
  </div>
</template>

<script lang="ts" scoped>
import { defineComponent, ref, computed, watch } from 'vue'

export default defineComponent({
  props: {
    value: { type: String, default: '' },
    placeholder: { type: String, default: '' },
    type: { type: String, default: 'text' },
    width: { type: String, default: '200px' },
  },
  emits: {
    input: null,
  },
  setup(props, context) {
    const inputValue = ref<string>('');
    watch(
      () => props.value,
      () => {
        inputValue.value = props.value;
      }
    );
    const handleInput = (data: string) => {
      context.emit('input', data);
    };
    const styles = computed<Record<string, string>>(() => {
      return {
        width: props.width,
        'background-color': inputValue.value === '' ? '#FAFAFB' : '#FFFFFF',
      };
    });
    return {
      handleInput,
      inputValue,
      styles,
    };
  },
});
</script>

<style lang="scss" scoped>
.basic-input {
  position: relative;
}
.basic-form-input {
  appearance: none;
  border: 1px solid transparent;
  box-shadow: inset 0 1px 3px 0 rgb(0 0 0 / 5%);
  color: #2D2D2D;
  height: 36px;
  width: 100%; // 一旦
  font-size: 14px;
  padding: 0 16px;
  border-color: #DBDBDB;
  border-radius: 2px;
  padding-right: 20px;
  background-color: #FAFAFB;
  border-left: 0px;
  &:focus {
    box-shadow: 0 0 8px 0 rgba(221, 104, 103, 0.3);
    border: 1px solid #DD6867;
    border-left-width: 1px;
    z-index: 1;
    outline: none;
    padding: 0 15px;
  }
  &::placeholder {
    font-family: 'Heebo', 'Yu Gothic', '游ゴシック', 'YuGothic', '游ゴシック体',
      'Helvetica Neue', 'Hiragino Kaku Gothic ProN', 'ヒラギノ角ゴ Pro W3',
      メイリオ, sans-serif;
    font-size: 14px;
    font-weight: normal;
    line-height: 1.5;
    letter-spacing: 1.4px;
    color: #999999;
  }
}
</style>
