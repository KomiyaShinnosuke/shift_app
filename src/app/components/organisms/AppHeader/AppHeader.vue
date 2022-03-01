<template>
  <div class="app-header">
    <Icon icon="mdi-cog"  @click="handleClickSetting" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'
import { Icon } from '@/components/atoms/Icon'

export default defineComponent({
  components: { Icon },
  setup() {
    const router = useRouter()
    const handleClickSetting = () => {
      router.push({ name: 'Setting' })
    }
    return {
      handleClickSetting,
    }
  },
})
</script>

<style scoped lang="scss">
.app-header {
}
</style>
