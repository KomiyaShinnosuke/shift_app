<template>
  <BaseButton
    class="host"
    :size="size"
    :block="block"
    :elevation="elevation"
    v-bind="$attrs"
    @click="onClick($event)"
  >
    <slot></slot>
  </BaseButton>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import BaseButton, { ButtonProps } from './BaseButton.vue';
export default defineComponent({
  components: { BaseButton },
  inheritAttrs: false,
  props: ButtonProps,
  emits: {
    click: null,
  },
  setup(props, { emit }) {
    const onClick = (e: MouseEvent) => emit('click', e);
    return {
      onClick,
    };
  },
});
</script>

<style lang="scss" scoped>
.host {
  border-color: #dd6867;
  background-color: #dd6867;
  &:hover {
    border-color: #c13e3b;
    background-color: #c13e3b;
  }
  &:active {
    border-color: #bf2926;
    background-color: #bf2926;
  }
  &:disabled {
    border-color: #f4d1d1;
    background-color: #f4d1d1;
  }
}
</style>
