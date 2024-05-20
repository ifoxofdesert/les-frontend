<template>
  <div class="layout">
    <Header />
    <main class="main">
      <slot />
    </main>
    <PopupFeedbackRequests
      :data="dataGeneral?.formFeedback"
      :policyUrl="dataGeneral.policyUrl"
      @close="closeFeedbackRequests()"
      v-if="isOpenedFeedbackRequests"
    />
    <Footer />
  </div>
</template>

<script setup lang="ts">
  import Header from '~/components/Header.vue';
  import Footer from '~/components/Footer.vue';
  import type { Igeneral } from '~/types/General';

  const dataGeneral = useState<Igeneral>('dataGeneral');

  useListen('popupFeedbackRequests:open', () => openFeedbackRequests());

  useListen('popup:close', () => closeFeedbackRequests());

  const isOpenedFeedbackRequests = ref(false);

  function closeFeedbackRequests() {
    useEvent('scroll:on');

    isOpenedFeedbackRequests.value = false;
  }

  function openFeedbackRequests() {
    useEvent('scroll:no');

    isOpenedFeedbackRequests.value = true;
  }

  const dataForm = {
    title: 'Заявка на обратный <span>звонок</span>',
    description: 'Оставьте заявку и наш специалист позвонит в удобное для вас время для решения вашего вопроса.',
  };
</script>
