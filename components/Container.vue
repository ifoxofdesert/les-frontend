<template>
  <div class="container">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
  .container {
    width: 100%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
