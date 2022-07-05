<template>
  <th class="table-cell" :style="cellStyle">
    <td v-if="text" class="data">{{ text }}</td>
    <slot v-else />
  </th>
</template>

<script lang="ts" scoped>
import { defineComponent, computed } from 'vue'
export default defineComponent({
  props: {
    text: { type: String, default: null },
    style: { type: Object, default: {} },
  },
  setup(props) {
    const cellStyle = computed<Object>(() => {
      const { color, top, right, bottom, left } = props.style;
      return {
        'color': `${color}`,
        'padding-top': `${top}px`,
        'padding-left': `${left}px`,
        'padding-bottom': `${bottom}px`,
        'padding-right': `${right}px`,
      }
    })
    return {
      cellStyle,
    }
  },
})
</script>

<style lang="scss" scoped>
.table-cell {
  font-weight: 400;
  .data {
    display: inline-block;
  }
}
</style>
