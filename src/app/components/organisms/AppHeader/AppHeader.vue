<template>
  <div class="app-header">
    <ul class="menus">
      <li class="menu" @click="handleClickCalendar">
        <Icon icon="mdi-calendar-blank" /><v-btn class="button">カレンダー</v-btn>
      </li>
      <li class="menu">
        <Icon icon="mdi-calendar-edit" /><v-btn class="button">シフト作成</v-btn>
      </li>
    </ul>
    <Icon icon="mdi-cog"  @click="handleClickSetting" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'
import { Button } from '@/components/atoms/Button'
import { Icon } from '@/components/atoms/Icon'

export default defineComponent({
  components: { Button, Icon },
  setup() {
    const router = useRouter()
    const handleClickCalendar = () => {
      router.push({ name: 'MonthlyCalendar' })
    }
    const handleClickSetting = () => {
      router.push({ name: 'Setting' })
    }
    return {
      handleClickCalendar,
      handleClickSetting,
    }
  },
})
</script>

<style scoped lang="scss">
.app-header {
  display: flex;
  justify-content: space-between;
  padding: 20px 40px;
  width: 100%;
  .menus {
    display: flex;
    justify-content: space-between;
    width: 25%;
    .menu {
      display: flex;
      .button {
        height: 24px;
        padding-left: 4px;
      }
    }
  }
}
</style>
