<template>
  <form onsubmit="return false;">
    <div class="basic-form">
      <div class="label">{{ label }}</div>
      <Input
        @input="handleInput($event)"
        :height="height"
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
    height: { type: String, default: '36px' },
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
  align-items: center;
  display: flex;
  text-align: left;
}
</style>
