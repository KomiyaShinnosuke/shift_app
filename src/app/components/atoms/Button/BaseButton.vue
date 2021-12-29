<template>
  <button
    class="button"
    :class="[sizeClass, { block: block }]"
    v-bind="$attrs"
    @click="$emit('click', $event)"
  >
    <slot />
  </button>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'

export enum Size {
  Small = 'small',
  Medium = 'medium',
  Large = 'large',
  XLarge = 'x-large',
}

export const ButtonProps = {
  size: {
    type: String,
    default: Size.Medium,
  },
  block: {
    type: Boolean,
    default: false,
  },
};

export default defineComponent({
  inheritAttrs: false,
  props: ButtonProps,
  emits: {
    click: null,
  },
  setup(props, { emit }) {
    const sizeClass = computed(() => `size_${props.size}`);
    return { sizeClass, emit };
  },
});
</script>

<style lang="scss" scoped>
.button {
  padding: 0 16px;
  border-radius: 2px;
  border-width: 1px;
  border-style: solid;
  font-size: 14px;
  font-weight: normal;
  text-align: center;
  letter-spacing: inherit;
  color: #fff;
  cursor: pointer;
  transition: all 0.2s ease;
  &.block {
    width: 100%;
  }
  &.size_small {
    min-width: 80px;
    height: 28px;
  }
  &.size_medium {
    min-width: 120px;
    height: 36px;
  }
  &.size_large {
    min-width: 200px;
    height: 44px;
  }
  &.size_x-large {
    min-width: 200px;
    height: 52px;
  }
  &:hover {
    box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.25);
    outline: none;
  }
  &:active {
    box-shadow: none;
  }
  &:disabled {
    box-shadow: none;
    cursor: default;
  }
}
</style>
