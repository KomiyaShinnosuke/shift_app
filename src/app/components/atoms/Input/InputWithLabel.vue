<template>
  <form onsubmit="return false;">
    <div class="basic-form">
      <div class="label">{{ label }}</div>
      <Input
        @input="handleInput($event)"
        :width="width"
        :placeholder="placeholder"
        :type="type"
        :value="value"
      />
    </div>
  </form>
</template>

<script lang="ts" scoped>
import { defineComponent } from 'vue'
import Input from './Input.vue';

export default defineComponent({
  components: { Input },
  props: {
    label: { type: String, default: '' },
    placeholder: { type: String, default: '' },
    value: { type: String, default: '' },
    type: { type: String, default: 'text' },
    width: { type: String, default: '200px' },
  },
  emits: {
    input: null,
  },
  setup(props, context) {
    const handleInput = (data: string) => {
      context.emit('input', data);
    };
    return {
      handleInput,
    };
  },
});
</script>

<style lang="scss" scoped>
.basic-form {
  text-align: left;
  .label {
    margin-bottom: 8px;
  }
}
</style>
