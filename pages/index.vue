<template>
  <div class="homePage">
    <MainBlock
      v-if="content?.mainBlock?.mainImage?.src"
      :coordinate="content?.mainBlock?.coordinate"
      :title="content?.mainBlock?.mainTitle"
      :image="content?.mainBlock?.mainImage"
    />
    <OffersSlider v-if="content?.offersSlider?.slids?.length" :data="content.offersSlider" />
    <RoomsListBlock v-if="content?.roomsListBlock && rooms?.length" :rooms="rooms" :content="content.roomsListBlock" />
    <QuestionsBlock v-if="content?.questions" :content="content.questions" />
    <div class="videoBlock">
      <VideoBlock :video="content?.video" />
    </div>

    <div class="homePage__gallaryBlock" v-if="content?.gallaryBlock?.gallary?.length">
      <Container>
        <ContainerBlock>
          <RoomGallaryBlock
            :title="content.gallaryBlock?.gallaryTitle"
            :description="content.gallaryBlock?.gallaryDescription"
            :gallary="content.gallaryBlock?.gallary"
          />
        </ContainerBlock>
      </Container>
    </div>

    <AfishaEventsBlock v-if="news?.result?.length" :data="content?.afishaEvents" :content="news?.result" />
    <div class="homePage__reviewSlider">
      <Container>
        <ContainerBlock>
          <ReviewSlider
            v-if="content?.reviewSlider?.slides?.length"
            :title="content.reviewSlider.title"
            :description="content.reviewSlider.description"
            :slides="content.reviewSlider.slides"
          />
        </ContainerBlock>
      </Container>
    </div>
  </div>
</template>

<script setup lang="ts">
  const { getHome, getPreviewsNews, getPreviewsRoom } = useApi();

  const content = ref(await getHome());

  const news = ref(
    await getPreviewsNews({
      populate: 'deep',
      pageSize: 4,
      sort: ['order', 'createdAt:desc'],
    })
  );

  const rooms = ref(
    await getPreviewsRoom({
      populate: 'deep',
      sort: 'order:asc',
    })
  );

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
  .homePage {
    .videoBlock {
      margin: -290px 0 100px 0;

      @media (max-width: 768px) {
        margin: 0px 0 100px 0;
      }

      @media (max-width: 550px) {
        margin: 0 0 50px 0;
      }
    }

    &__gallaryBlock {
      margin: 0 0 100px 0;

      @media (max-width: 768px) {
        margin: 0px 0 100px 0;
      }

      @media (max-width: 550px) {
        margin: 0 0 50px 0;
      }
    }

    &__reviewSlider {
      margin: 0 0 125px 0;

      @media (max-width: 768px) {
        margin: 0 0 80px 0;
      }
    }
  }
</style>
