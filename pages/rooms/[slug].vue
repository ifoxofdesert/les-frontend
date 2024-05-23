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
            :title="content.gallaryTitle"
            :description="content.gallaryDescription"
            :numberSlides="content.gallary.length"
            :slidesPerView="'auto'"
            :fixNumberSlides="2"
            :spaceBetween="20"
          >
            <SwiperSlide
              v-for="(item, index) in content.gallary"
              :key="index"
              class="roomPage__gallaryBlock__slide"
              :class="`roomPage__gallaryBlock__slide_${getSchemaIndex(index)}`"
              :id="index"
            >
              <div class="roomPage__gallaryBlock__slide__imageBlock">
                <span class="roomPage__gallaryBlock__slide__imageBlock__number">{{ formatingNumber(index + 1) }}</span>

                <img
                  :src="useImage(item.src)"
                  :alt="item.src"
                  class="roomPage__gallaryBlock__slide__imageBlock__image"
                />
              </div>
            </SwiperSlide>
          </RoomGallary>
        </div>

        <div class="roomPage__welcomeBlock" v-if="content?.roomWelcome">
          <RoomWelcomeBlock :data="content.roomWelcome" />
        </div>
      </ContainerBlock>
    </Container>

    <div class="roomPage__offersBlock" v-if="content?.offersSlider?.slids?.length">
      <OffersSlider :data="content.offersSlider" />
    </div>

    <Container>
      <ContainerBlock>
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

  const { formatingNumber } = useFormating();

  let repeatIndex = 0;

  function getSchemaIndex(i: number) {
    if (i == 0) {
      repeatIndex = 0;
    }
    let index = i + 1 - repeatIndex;

    if (index <= 4) {
      return index;
    } else if (index > 4) {
      repeatIndex = i;
      return i + 1 - repeatIndex;
    }
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

      @media (max-width: 1200px) {
        margin: 0 0 100px 0;
      }

      @media (max-width: 1024px) {
        margin: 0 0 80px 0;
      }

      @media (max-width: 550px) {
        margin: 0 0 40px 0;
      }
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

      @media (max-width: 1440px) {
        margin: 0 0 100px 0;
      }

      @media (max-width: 1024px) {
        margin: 0 0 80px 0;
      }
    }

    &__accordionBlock {
      margin: 0 0 150px 0;

      @media (max-width: 1024px) {
        margin: 0 0 80px 0;
      }
    }

    &__gallaryBlock {
      margin: 0 0 225px 0;

      &__slide {
        margin: 0 20px 0 0;
        display: flex;
        flex-direction: column;

        &__imageBlock {
          display: flex;
          flex-direction: column;
          height: 100%;

          &__number {
            font-family: Manrope;
            font-size: 20px;
            font-weight: 300;
            line-height: 110%;
            color: $gray;
            margin: 0 auto 0 0;
          }

          &__image {
            object-fit: cover;
            height: 100%;
          }
        }

        &_1 {
          width: 445px !important;
          height: 465px !important;
          margin: 0 155px 0 0 !important;

          @media (max-width: 768px) {
            margin: 0 15px 0 0 !important;
            width: 280px !important;
            height: 290px !important;
          }
        }
        &_2 {
          width: 290px !important;
          height: 355px !important;

          @media (max-width: 768px) {
            width: 204px !important;
            height: 249px !important;
          }
        }
        &_3 {
          width: 445px !important;
          height: 477px !important;

          @media (max-width: 768px) {
            width: 312px !important;
            height: 335px !important;
          }
        }
        &_4 {
          width: 600px !important;
          height: 397px !important;

          @media (max-width: 768px) {
            width: 422px !important;
            height: 279px !important;
          }
        }
      }

      @media (max-width: 1200px) {
        margin: 0 0 150px 0;
      }

      @media (max-width: 1024px) {
        margin: 0 0 80px 0;
      }
    }

    &__welcomeBlock {
      margin: 0 0 225px 0;

      @media (max-width: 1200px) {
        margin: 0 0 150px 0;
      }

      @media (max-width: 1024px) {
        margin: 0 0 80px 0;
      }
    }

    &__offersBlock {
      margin: 0 0 150px 0;

      @media (max-width: 1200px) {
        margin: 0 0 100px 0;
      }

      @media (max-width: 1024px) {
        margin: 0;
      }
    }

    @media (max-width: 1024px) {
      padding: 130px 0 100px 0;
    }
  }
</style>
