<template>
  <div class="app-footer">
    <v-btn>シフト提出</v-btn>
    <section class="description">
      <div class="items">
        <div class="item"><canvas :style="canvasStyle('#7A9CC3')"></canvas>確定シフト</div>
        <div class="item"><canvas :style="canvasStyle('#E96B6B')"></canvas>確定休み</div>
      </div>
      <div class="items">
        <div class="item"><canvas :style="canvasStyle('#BEDAFA')"></canvas>希望シフト</div>
        <div class="item"><canvas :style="canvasStyle('#EAB5B5')"></canvas>希望休み</div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    const canvasStyle = ((color: string) => {
      return {
        'background-color': color,
        'border-radius': '20px',
        bottom: '1px',
        height: '15px',
        'margin-right': '4px',
        position: 'relative',
        width: '60px',
      }
    })
    return {
      canvasStyle,
    }
  },
})
</script>

<style scoped lang="scss">
.app-footer {
  background-color: #efeded;
  display: flex;
  justify-content: space-between;
  padding: 12px;
  width: 100%;
  .description {
    font-size: 14px;
    .items {
      display: flex;
      .item {
        margin-right: 20px;
      }
    }
  }
}
</style>
