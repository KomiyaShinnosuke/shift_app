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
  max-width: 1200px;
  .sub-header {
    padding: 40px 0 20px;

  }
  .main-contents {
    margin: 0 auto;
    padding: 0 40px;
  }
}
</style>
