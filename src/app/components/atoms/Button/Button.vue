<template>
  <button
    class="basic-button"
    :disabled="disabled"
    :style="buttonStyle"
    @click.prevent="onClick"
  >
    <slot />
  </button>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';

enum Size {
  Small = 'small',
  Medium = 'medium',
  Large = 'large',
}

export default defineComponent({
  inheritAttrs: false,
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: Size.Medium,
    },
  },
  emits: {
    click: null,
  },
  setup(props, { emit }) {
    const buttonStyle = computed(() => {
      switch (props.size) {
        case Size.Small:
          return 'sp-small';
        case Size.Medium:
          return 'sp-medium';
        case Size.Large:
          return 'sp-large';
        default:
          return 'sp-medium';
      }
    });
    return { buttonStyle, emit };
  },
});
</script>
