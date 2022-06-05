<template>
  <div class="calendar-cell">
    {{ date }}
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'

export default defineComponent({
  name: 'CalendarCell',
  props: {
    date: { type: Number, required: true },
    shift: { type: Object, required: true },
  },
  setup(props) {
  },
})
</script>

<style scoped lang="scss">
.calendar-cell {
}
</style>
