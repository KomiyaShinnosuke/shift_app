<template>
  <BaseButton
    class="host"
    :size="size"
    :block="block"
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
  border-color: #82a5ce;
  background-color: #82a5ce;
  &:hover {
    border-color: #7a9cc3;
    background: #7a9cc3;
  }
  &:active {
    border-color: #7291b5;
    background-color: #7291b5;
  }
  &:disabled {
    border-color: #d1ddea;
    background-color: #d1ddea;
  }
}
</style>
