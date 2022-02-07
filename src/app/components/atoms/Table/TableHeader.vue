<template>
  <tr class="table-header">
    <TableHeaderCell
      v-for="column in columns"
      :text="column.text"
      :padding="column.padding"
    />
  </tr>
</template>

<script lang="ts" scoped>
import { defineComponent } from 'vue'
import TableHeaderCell from './TableHeaderCell.vue'

export default defineComponent({
  components: { TableHeaderCell },
  props: {
    columns: { type: Array, required: true },
  },
})
</script>

<style lang="scss" scoped>
</style>
