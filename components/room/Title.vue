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

    @media (max-width: 1440px) {
      font-size: 150px;
    }

    @media (max-width: 1200px) {
      font-size: 100px;
      text-align: left;
    }

    @media (max-width: 1024px) {
      font-size: 80px;
    }

    @media (max-width: 768px) {
      font-size: 60px;
    }
  }
</style>
