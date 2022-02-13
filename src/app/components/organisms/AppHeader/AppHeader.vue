<template>
  <div class="app-header">
    <Icon icon="mdi-cog" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Icon } from '../../atoms/Icon'

export default defineComponent({
  components: { Icon },
})
</script>

<style scoped lang="scss">
.app-header {
}
</style>
