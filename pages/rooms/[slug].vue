<template>
  <div class="roomPage">
    <Container>
      <ContainerBlock>
        <div class="roomPage__title">
          <RoomTitle>{{ content.title }}</RoomTitle>
        </div>
        <div class="roomPage__markBlock">
          <RoomMarkBlock :firstTitle="content.area" :secondTitle="content.persons" :thirdTitle="content.viewRoom" />
        </div>
        <div class="roomPage__descriptionBlock">
          <RoomDescriptionBlock :text="content.description" />
        </div>
      </ContainerBlock>
    </Container>
    <div class="roomPage__videoBlock">
      <VideoBlock :video="content.video" />
    </div>
    <Container>
      <ContainerBlock>
        <div class="roomPage__aboutRoomBlock">
          <RoomAboutRoom :data="content.aboutRoom" />
        </div>

        <div class="roomPage__accordionBlock">
          <RoomAccordionBlock
            :title="content.accorionTitle"
            :description="content.accorionDescription"
            :accordion="content.accordion"
          />
        </div>

        <div class="roomPage__gallaryBlock">
          <RoomGallary
            :data="content.gallary"
            :title="content.gallaryTitle"
            :description="content.gallaryDescription"
          />
        </div>

        <div class="roomPage__welcomeBlock">
          <RoomWelcomeBlock :data="content.roomWelcome" />
        </div>

        <div class="roomPage__offersBlock">
          <OffersSlider v-if="content?.offersSlider?.slids?.length" :data="content.offersSlider" />
        </div>

        <div class="roomPage__roomList">
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
  const { getRoom } = useApi();

  const content = ref(await getRoom());

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
