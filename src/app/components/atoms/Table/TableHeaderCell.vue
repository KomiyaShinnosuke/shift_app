<template>
  <th class="table-header-cell" :style="cellPadding">
    <td v-if="text">{{ text }}</td>
    <slot v-else />
  </th>
</template>

<script lang="ts" scoped>
import { defineComponent, computed } from 'vue'
export default defineComponent({
  props: {
    text: { type: String, default: null },
    padding: { type: Object, required: false },
    // width: { type: Number, required: false },
  },
  setup() {
    const cellPadding = computed<Object>(() => {
      return {
        'padding-top': '${top}px',
        'padding-left': '${left}px',
        'padding-bottom': '${bottom}px',
        'padding-right': '${right}px',
      }
    })
    return {
      cellPadding,
    }
  },
})
</script>

<style lang="scss" scoped>
</style>
