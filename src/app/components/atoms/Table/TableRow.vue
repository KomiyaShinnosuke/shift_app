<template>
  <tr class="table-header">
    <TableCell
      v-for="i in item"
      :text="i.text"
      :style="i.style"
    />
  </tr>
</template>

<script lang="ts" scoped>
import { defineComponent } from 'vue'
import TableCell from './TableCell.vue'

export default defineComponent({
  components: { TableCell },
  props: {
    item: { type: Array, required: true },
  },
})
</script>

<style lang="scss" scoped>
</style>
