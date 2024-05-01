<template>
  <div class="containerBlock">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
  .containerBlock {
    width: calc(100% - 80px);

    @media (max-width: 650px) {
      width: calc(100% - 40px);
    }

    @media (max-width: 550px) {
      width: calc(100% - 20px);
    }
  }
</style>
