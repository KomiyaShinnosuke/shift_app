<template>
  <div class="checkbox">
    <v-checkbox
      class="inner"
      :color="color"
      :label="label"
    />
  </div>
</template>

<script lang="ts" scoped>
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    color: { type: String, default: '' },
    label: { type: String, default: '' },
  },
  emits: {
    click: null,
  },
});
</script>

<style lang="scss" scoped>
  .checkbox {
    .inner {
      --v-input-control-height: auto; // checkboxの謎のCSSに影響されてこのスタイルを当てている
    }
  }
</style>
