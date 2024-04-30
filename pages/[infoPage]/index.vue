<template>
  <div class="contacts">
    <Container>
      <ContainerBlock>
        <InfoPagesMenuSlider :buttons="menu" class="contacts__menuBlock" />
        <InfoPagesStructureBlock :title="content.title" :lastUpdate="content.lastUpdate">
          <NewsText :text="content.text" class="infoPage" />
        </InfoPagesStructureBlock>
      </ContainerBlock>
    </Container>
  </div>
</template>

<script lang="ts" setup>
  import menu from '~/src/infoPageMenu.json';

  const { getInfoPage } = useApi();

  const route = useRoute();

  console.log(route);

  const content = ref(await getInfoPage());

  useHead({
    title: content.value?.pagetitle || '',
    meta: [
      {
        property: 'og:description',
        content: content.value?.pageDescription || '',
      },
      {
        name: 'description',
        content: content.value?.pageDescription || '',
      },
    ],
  });
</script>

<style lang="scss" scoped>
  .contacts {
    margin: 180px 0 0 0;

    &__menuBlock {
      margin: 0 0 70px 0;
    }
  }
</style>
