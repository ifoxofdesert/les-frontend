<template>
  <h1 class="title">
    <slot />
  </h1>
</template>

<style lang="scss" scoped>
  .title {
    font-family: 'Playfair Display';
    font-size: 142px;
    font-weight: 400;
    line-height: 100%;
    letter-spacing: 0%;
    text-transform: uppercase;
    color: $black;
    text-align: center;
    width: 100%;
    margin: 0 0 60px 0;

    @media (max-width: 1440px) {
      font-size: 100px;
    }

    @media (max-width: 1200px) {
      font-size: 80px;
    }

    @media (max-width: 1024px) {
      margin: 0 0 30px 0;

      font-size: 55px;
    }

    @media (max-width: 768px) {
      font-size: 42px;
    }

    @media (max-width: 550px) {
      font-size: 30px;
    }
  }
</style>
