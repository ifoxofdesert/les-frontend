<template>
  <div class="roomPage">
    <Container>
      <ContainerBlock>
        <div class="roomPage__title" v-if="content?.title">
          <RoomTitle>{{ content.title }}</RoomTitle>
        </div>
        <div class="roomPage__markBlock" v-if="content?.area || content?.persons || content?.viewRoom">
          <RoomMarkBlock :firstTitle="content.area" :secondTitle="content.persons" :thirdTitle="content.viewRoom" />
        </div>
        <div class="roomPage__descriptionBlock" v-if="content?.description">
          <RoomDescriptionBlock :text="content.description" />
        </div>
      </ContainerBlock>
    </Container>
    <div class="roomPage__videoBlock" v-if="content?.video?.sources?.length">
      <VideoBlock :video="content.video" />
    </div>
    <Container>
      <ContainerBlock>
        <div class="roomPage__aboutRoomBlock" v-if="content?.aboutRoom">
          <RoomAboutRoom :data="content.aboutRoom" />
        </div>

        <div
          class="roomPage__accordionBlock"
          v-if="content?.accorionTitle || content?.accorionDescription || content?.accordion"
        >
          <RoomAccordionBlock
            :title="content.accorionTitle"
            :description="content.accorionDescription"
            :accordion="content.accordion"
          />
        </div>

        <div class="roomPage__gallaryBlock" v-if="content?.gallary?.length">
          <RoomGallary
            :data="content.gallary"
            :title="content.gallaryTitle"
            :description="content.gallaryDescription"
          />
        </div>

        <div class="roomPage__welcomeBlock" v-if="content?.roomWelcome">
          <RoomWelcomeBlock :data="content.roomWelcome" />
        </div>

        <div class="roomPage__offersBlock" v-if="content?.offersSlider?.slids?.length">
          <OffersSlider :data="content.offersSlider" />
        </div>

        <div class="roomPage__roomList" v-if="content?.roomListTitle">
          <RoomListRoomsBlock
            :title="content.roomListTitle"
            :description="content.roomListDescription"
            :rooms="content.roomList"
          />
        </div>
      </ContainerBlock>
    </Container>
  </div>
</template>

<script setup lang="ts">
  const { getRoomPage } = useApi();

  const route = useRoute();

  const content = ref(
    await getRoomPage({
      filters: {
        slug: { $eq: route.params.slug },
      },
      populate: 'deep',
    })
  );

  if (!content?.value?.slug) {
    showError({ statusCode: 404, fatal: true });
  }

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
  .roomPage {
    padding: 200px 0 125px 0;
    width: 100%;
    display: flex;
    flex-direction: column;

    &__title {
      margin: 0 0 30px 0;
    }

    &__markBlock {
      margin: 0 0 170px 0;
    }

    &__descriptionBlock {
      margin: 0 0 30px 0;
    }

    &__videoBlock {
      width: 100%;
      margin: 0 0 50px 0;
    }

    &__aboutRoomBlock {
      margin: 0 0 150px 0;
    }

    &__accordionBlock {
      margin: 0 0 150px 0;
    }

    &__gallaryBlock {
      margin: 0 0 225px 0;
    }

    &__welcomeBlock {
      margin: 0 0 225px 0;
    }

    &__offersBlock {
      margin: 0 0 150px 0;
    }
  }
</style>
