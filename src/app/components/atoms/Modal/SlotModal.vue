<template>
    <div class="slot-modal"
      v-if="isOpen"
      :class="modifierClasses"
    >
      <div class="slot-modal-content" @click="$emit('click', $event)">
        <slot></slot>
      </div>
    </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'

export default defineComponent({
  props: {
    isOpen: { type: Boolean, default: false },
  },
  setup(props, context) {
    const modifierClasses = computed(() => {
      return {
        isOpen: props.isOpen
      }
    })
    return {
      modifierClasses,
    }
  },
})
</script>

<style lang="scss" scoped>

  .slot-modal {
    background: rgba(0,0,0,.35);
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: space-around;
    overflow: auto;
    position: absolute;
    top: 0;
    left: 0;
    right: auto;
    bottom: auto;
    width: 100%;
    height: 100%;
    &-content {
      width: auto;
      min-width: 600px;
      max-width: 880px;
      margin: auto;
      background: #FFF;
      box-shadow: 0 0 2px 0 rgba(0,0,0,.3);
      text-align: left;
      border-radius: 4px;
    }
  }
</style>
