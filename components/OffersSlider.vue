<template>
  <div class="offersSlider">
    <Container>
      <ContainerBlock>
        <div class="offersSlider__container">
          <h2 class="offersSlider__container__title">
            Специальные выгоды
            <span>для наших гостей</span>
          </h2>
          <div class="offersSlider__container__sliderContainer">
            <div class="offersSlider__container__sliderContainer__infoBlock">
              <span class="offersSlider__container__sliderContainer__infoBlock__description">
                Насладитесь неповторимым комфортом и выгодными условиями проживания, созданными специально для вас.
              </span>
              <div class="offersSlider__container__sliderContainer__infoBlock__navigationBlock">
                <button class="offersSlider__container__sliderContainer__infoBlock__navigationBlock__button left">
                  <IconComponent name="arrow_left" />
                </button>
                <div class="offersSlider__container__sliderContainer__infoBlock__navigationBlock__numberBlock">
                  01
                  <span class="delimiter">/</span>
                  <span class="all">05</span>
                </div>
                <button class="offersSlider__container__sliderContainer__infoBlock__navigationBlock__button right">
                  <IconComponent name="arrow_right" />
                </button>
              </div>
            </div>
            <div class="offersSlider__container__sliderContainer__slider">
              <Swiper :loop="false" slidesPerView="auto">
                <SwiperSlide v-for="(item, index) in slids" :key="index">
                  <div class="offersSlider__container__sliderContainer__slider__slide">
                    <div class="offersSlider__container__sliderContainer__slider__slide__imageBlock">
                      <span class="offersSlider__container__sliderContainer__slider__slide__imageBlock__number">
                        {{ index + 1 }}
                      </span>
                      <img
                        :src="item.img"
                        :alt="item.title"
                        class="offersSlider__container__sliderContainer__slider__slide__imageBlock__image"
                      />
                    </div>
                    <div class="offersSlider__container__sliderContainer__slider__slide__infoBlock">
                      <span class="offersSlider__container__sliderContainer__slider__slide__infoBlock__markText">
                        {{ item.markText }}
                      </span>
                      <span class="offersSlider__container__sliderContainer__slider__slide__infoBlock__title">
                        {{ item.title }}
                      </span>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </ContainerBlock>
    </Container>
  </div>
</template>

<script setup lang="ts">
  import Container from './Container.vue';
  import ContainerBlock from './ContainerBlock.vue';
  import IconComponent from './IconComponent.vue';

  const slids = [
    {
      title: 'Раннее бронирование',
      img: 'assets/images/DSC_3524.jpeg',
      markText: 'Скидка 20%',
    },
    {
      title: 'Дарим подарки!',
      img: 'assets/images/DSC_3527.jpeg',
      markText: 'Экскурсия и подарки',
    },
    {
      title: 'Ура! Открытие!',
      img: 'assets/images/DSC_3224.jpeg',
      markText: 'Сертификат',
    },
    {
      title: 'Дарим подарки!',
      img: 'assets/images/DSC_3527.jpeg',
      markText: 'Экскурсия и подарки',
    },
  ];
</script>
