<template>
  <div class="icon">
    <v-icon class="arrow" @click="handleClick">mdi-menu-left</v-icon>
  </div>
</template>

<script lang="ts" scoped>
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    icon: { type: String , default: '' },
  },
  setup(_, context) {
    const handleClick = () => {
      context.emit('handleClick')
    }
    return {
      handleClick,
    }
  }
});
</script>

<style lang="scss" scoped>
.icon {
  cursor: pointer;
}
</style>
