<template>
  <div class="mainBlock">
    <Container>
      <img src="assets/images/DSC_3610.jpg" alt="Обложка" class="mainBlock__backgroundImage" />
      <ContainerBlock>
        <div class="mainBlock__contentBlock">
          <h1 class="mainBlock__contentBlock__title">
            Природа снаружи —
            <span>Уют внутри</span>
          </h1>
          <span class="mainBlock__contentBlock__coordinate">
            <span>44º65′33″63.N</span>
            <span>34º39′48″30.E</span>
          </span>
          <button class="mainBlock__contentBlock__button">
            Забронировать номер
            <IconComponent name="arrow_right" />
          </button>
        </div>
      </ContainerBlock>
    </Container>
  </div>
</template>

<script setup lang="ts">
  import Container from './Container.vue';
  import ContainerBlock from './ContainerBlock.vue';
  import IconComponent from './IconComponent.vue';
</script>
