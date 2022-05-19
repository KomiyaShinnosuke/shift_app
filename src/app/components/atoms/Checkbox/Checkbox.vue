<template>
  <div class="checkbox">
    <v-checkbox
      v-model="value"
      class="inner"
      :color="color"
      :label="label"
      @change="handleChange"
    />
  </div>
</template>

<script lang="ts" scoped>
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      value: false,
    }
  },
  props: {
    checked: { type: Boolean, default: false },
    color: { type: String, default: '' },
    dateKey: { type: String, default: '' },
    label: { type: String, default: '' },
  },
  methods: {
    handleChange() {
      this.$emit('click', !this.checked, this.dateKey)
    },
  },
  mounted() {
    this.value = this.checked
  }
});
</script>

<style lang="scss" scoped>
  .checkbox {
    .inner {
      --v-input-control-height: auto; // checkboxの謎のCSSに影響されてこのスタイルを当てている
    }
  }
</style>
