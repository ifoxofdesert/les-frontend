<template>
  <h1 class="title">
    <slot />
  </h1>
</template>

<style lang="scss" scoped>
  .title {
    font-family: 'Playfair Display';
    font-size: 212px;
    font-weight: 400;
    line-height: 100%;
    letter-spacing: 0%;
    text-transform: uppercase;
    color: $black;
    text-align: center;
    width: 100%;
  }
</style>
