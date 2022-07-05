<template>
  <tr class="table-row">
    <TableCell :text="item.label" />
    <TableCell
      v-for="shift in item.shifts"
      :text="shift"
    />
  </tr>
</template>

<script lang="ts" scoped>
import { defineComponent } from 'vue'
import TableCell from './TableCell.vue'

export default defineComponent({
  components: { TableCell },
  props: {
    item: { type: Object, required: true },
  },
})
</script>

<style lang="scss" scoped>
.table-row {
  &:hover {
    background: none;
  }
  .table-cell {
    border: thin solid rgba(var(--v-border-color), var(--v-border-opacity));
    &:hover {
      background: rgba(var(--v-border-color), var(--v-hover-opacity));
      cursor: pointer;
    }
  }
}
</style>
