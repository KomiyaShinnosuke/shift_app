<template>
  <div class="body-layout">
    <header class="sub-header">
      <slot name="sub-header"></slot>
    </header>
    <main class="main-contents">
      <slot name="contents"></slot>
    </main>
  </div>
</template>

<style scoped lang="scss">
.body-layout {
  min-width: 800px;
  .main-contents {
    margin: 0 auto;
    padding: 40px;
  }
}
</style>
