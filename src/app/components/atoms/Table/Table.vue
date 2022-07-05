<template>
  <div class="table">
    <v-table>
      <TableHeader :columns="columns" />
      <tbody>
        <template v-for="item in items">
          <TableRow :item="item" />
        </template>
      </tbody>
    </v-table>
  </div>
</template>

<script lang="ts" scoped>
import { defineComponent, PropType } from 'vue'
import TableHeader from './TableHeader.vue'
import TableRow from './TableRow.vue'

export default defineComponent({
  components: { TableHeader, TableRow },
  props: {
    items: { type: Array as PropType<Object>, default: [] },
    columns: { type: Array as PropType<Object>, default: [] },
  },
  setup(props) {
  }
});
</script>

<style lang="scss" scoped>
.table {
  cursor: pointer;
}
</style>
