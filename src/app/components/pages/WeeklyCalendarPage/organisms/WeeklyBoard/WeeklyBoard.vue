<template>
  <div class="weekly-calendar">
    <Table :items="weekDays" />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { Table } from '../../../../atoms/Table'

export default defineComponent({
  components: { Table },
  props: {
    weekDays: { type: Array as PropType<Object>, default: [] },
  },
})
</script>

<style scoped lang="scss">

</style>
