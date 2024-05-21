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

  useListen('popup:close', () => {
    if (isOpenedFeedbackRequests.value) {
      closeFeedbackRequests();
    }
  });

  const isOpenedFeedbackRequests = ref(false);

  function closeFeedbackRequests() {
    isOpenedFeedbackRequests.value = false;

    useEvent('popup:close');
    useEvent('scroll:on');
  }

  function openFeedbackRequests() {
    isOpenedFeedbackRequests.value = true;

    useEvent('popup:open');
    useEvent('scroll:no');
  }
</script>
