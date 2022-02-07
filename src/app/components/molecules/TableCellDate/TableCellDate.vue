<template>
  <div class="table-cell-date">
    <td>
      <span>{{ cell.date }}</span>
      <span>{{ cell.day }}</span>
    </td>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    cell: { type: Object, default: {} },
  },
})
</script>

<style scoped lang="scss">

</style>
