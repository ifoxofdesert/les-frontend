<template>
  <div class="layout">
    <Header />
    <main class="main">
      <slot />
    </main>
    <FormPopup :data="dataForm" />
    <Footer />
  </div>
</template>

<script setup lang="ts">
  import Header from '~/components/Header.vue';
  import Footer from '~/components/Footer.vue';

  const dataForm = {
    title: 'Заявка на обратный <span>звонок</span>',
    description: 'Оставьте заявку и наш специалист позвонит в удобное для вас время для решения вашего вопроса.',
  };
</script>
