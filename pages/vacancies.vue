<template>
  <div class="vacancies" v-if="content">
    <Container>
      <ContainerBlock>
        <InfoPagesStructureBlock
          :title="content.title"
          :lastUpdate="content.lastUpdate"
          :navigations="getNavigations"
          @changeTab="openAccordion"
        >
          <div class="vacancies__container">
            <AccordionContainer>
              <Accordion v-for="item in content.vacancies" :content="item">
                <InfoPagesAboutVacancy
                  :experience="item.experience"
                  :employment="item.employment"
                  :salary="item.salary"
                  :responsibilities="item.responsibilities"
                  :conditions="item.conditions"
                />
              </Accordion>
            </AccordionContainer>
          </div>
        </InfoPagesStructureBlock>
      </ContainerBlock>
    </Container>
  </div>
</template>

<script lang="ts" setup>
  import type { Inavigations } from '~/types/InfoPages';

  const { getVacancy } = useApi();

  const content = ref(await getVacancy());

  if (!content.value?.pagetitle) {
    showError({ statusCode: 404, fatal: true });
  }

  const getNavigations = computed<Inavigations[]>(() => {
    const vacancies = content.value?.vacancies;
    if (vacancies?.length) {
      return vacancies.map((item, index): Inavigations => {
        return {
          title: item.title,
          key: index,
          active: item.active,
        };
      });
    } else {
      return [];
    }
  });

  function openAccordion(key: string | number) {
    const vacancies = content.value?.vacancies;
    if (vacancies?.length) {
      vacancies.forEach((item, index) => {
        if (index == key) {
          item.active = true;
        } else if (index !== key) {
          item.active = false;
        }
      });
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
  .vacancies {
    padding: 180px 0 0 0;
  }
</style>
