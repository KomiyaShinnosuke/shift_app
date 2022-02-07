<template>
  <div class="table">
    <v-table>
      <TableHeader :columns="columns" />
      <tbody>
        <tr
          v-for="item in items"
          :key="item.key"
        >
          <td>{{ item.name }}</td>
          <td>{{ item.sunday }}</td>
          <td>{{ item.monday }}</td>
          <td>{{ item.tuesday }}</td>
          <td>{{ item.wednesday }}</td>
          <td>{{ item.thursday }}</td>
          <td>{{ item.friday }}</td>
          <td>{{ item.saturday }}</td>
        </tr>
      </tbody>
    </v-table>
  </div>
</template>

<script lang="ts" scoped>
import { defineComponent, PropType } from 'vue'
import TableHeader from './TableHeader.vue'

export default defineComponent({
  components: { TableHeader },
  props: {
    items: { type: Array as PropType<Object>, default: [] },
    columns: { type: Array as PropType<Object>, default: [] },
  },
});
</script>

<style lang="scss" scoped>
.table {
  cursor: pointer;
}
</style>
