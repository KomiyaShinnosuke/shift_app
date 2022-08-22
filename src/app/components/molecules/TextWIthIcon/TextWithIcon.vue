<template>
  <div class="text-with-icon" @click="onClick">
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
  setup(_, context) {
    const onClick = () => {
      context.emit('clickTextWithIcon')
    };
    return {
      onClick,
    }
  }
});
</script>

<style lang="scss" scoped>
</style>
