<template>
  <div class="table">
    <v-table>
      <TableHeader :columns="columns" />
      <tbody>
        <tr v-for="item in items" class="table-row">
          <!-- <TableRow :item="item" /> -->
          <td class="table-cell" @click="handleClick">{{ item.name }}</td>
          <td class="table-cell">{{ item.sunday }}</td>
          <td class="table-cell">{{ item.monday }}</td>
          <td class="table-cell">{{ item.tuesday }}</td>
          <td class="table-cell">{{ item.wednesday }}</td>
          <td class="table-cell">{{ item.thursday }}</td>
          <td class="table-cell">{{ item.friday }}</td>
          <td class="table-cell">{{ item.saturday }}</td>
        </tr>
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
    const handleClick = () => {
      console.log(777)
    }
    return {
      handleClick,
    }
  }
});
</script>

<style lang="scss" scoped>
.table {
  cursor: pointer;
  .table-row {
    background: none;
    cursor: default;
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
}
</style>
