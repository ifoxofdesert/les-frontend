<template>
  <div class="contacts">
    <Container v-if="content">
      <ContainerBlock>
        <InfoPagesMenuSlider v-if="menu?.length" :buttons="menu" class="contacts__menuBlock" />
        <InfoPagesStructureBlock :title="content.title" :lastUpdate="content.lastUpdate">
          <NewsText class="infoPage">
            <div>
              <h2>Отдел бронирования</h2>
              <span v-if="content.reservations?.phones?.length" class="gap-10 mb-15">
                <span>Стойка Reception (круглосуточно):</span>
                <Button
                  v-for="item in content.reservations?.phones"
                  type="external"
                  mod="text"
                  :url="`tel:${item.url}`"
                >
                  {{ item.text }}
                </Button>
              </span>

              <span v-if="content.reservations?.emails?.length" class="gap-10">
                <span>E-mail для связи:</span>
                <Button v-for="item in content.reservations?.emails" type="external" mod="text" :url="`mailto:${item}`">
                  {{ item }}
                </Button>
              </span>
            </div>

            <div>
              <h2>Банкеты и корпоративные мероприятия</h2>
              <span v-if="content.banquets?.phones?.length" class="gap-10 mb-15">
                <span>Номер телефона:</span>
                <Button v-for="item in content.banquets?.phones" type="external" mod="text" :url="`tel:${item.url}`">
                  {{ item.text }}
                </Button>
              </span>

              <span v-if="content.banquets?.emails?.length" class="gap-10">
                <span>Номер телефона:</span>
                <Button v-for="item in content.banquets?.emails" type="external" mod="text" :url="`mailto:${item}`">
                  {{ item }}
                </Button>
              </span>
            </div>

            <div>
              <div class="gap-10 mb-0">
                <h2>Адрес и Юридическая информация</h2>
                <span v-if="content.address" class="gap-10 mb-15">
                  <span>Место нахождения</span>
                  {{ content.address }}
                </span>

                <span>Информация о компании:</span>

                <p v-if="content.llcName">{{ content.llcName }}</p>

                <span v-if="content.inn">
                  <span>ИНН:</span>
                  {{ content.inn }}
                </span>

                <span v-if="content.ogrn">
                  <span>ОГРН:</span>
                  {{ content.ogrn }}
                </span>

                <span v-if="content.kpp">
                  <span>КПП:</span>
                  {{ content.kpp }}
                </span>

                <span>
                  <span v-if="content.legalAddress">Юридический адрес:</span>
                  {{ content.legalAddress }}
                </span>
              </div>
            </div>
          </NewsText>
        </InfoPagesStructureBlock>
      </ContainerBlock>
    </Container>
  </div>
</template>

<script lang="ts" setup>
  const { getContacts, getInfoPageMenu } = useApi();

  const content = ref(await getContacts());

  const menu = ref(await getInfoPageMenu());

  if (!content.value?.pagetitle) {
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
  .contacts {
    margin: 180px 0 0 0;

    &__menuBlock {
      margin: 0 0 70px 0;

      @media (max-width: 768px) {
        margin: 0 0 50px 0;
      }
    }

    @media (max-width: 1024px) {
      margin: 130px 0 0 0;
    }

    @media (max-width: 768px) {
      margin: 120px 0 0 0;
    }
  }
</style>
