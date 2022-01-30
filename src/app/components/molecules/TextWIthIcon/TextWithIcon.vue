<template>
  <div class="text-with-icon">
    <v-icon>{{ icon }}</v-icon>{{ text }}
  </div>
</template>

<script lang="ts" scoped>
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    icon: { type: String, default: '' },
    text: { type: String, default: '' },
  },
  emits: {
    click: null,
  },
});
</script>

<style lang="scss" scoped>
</style>
