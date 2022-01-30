<template>
  <div class="table">
    <v-table>
      <tbody>
        <tr
          v-for="item in items"
          :key="item.key"
        >
          <td>{{ item.name }}</td>
          <td>{{ item.carolies }}</td>
        </tr>
      </tbody>
    </v-table>
  </div>
</template>

<script lang="ts" scoped>
import { defineComponent, PropType } from 'vue'

export default defineComponent({
  props: {
    items: { type: Array as PropType<Object>, default: [] },
  },
});
</script>

<style lang="scss" scoped>
.table {
  cursor: pointer;
}
</style>
