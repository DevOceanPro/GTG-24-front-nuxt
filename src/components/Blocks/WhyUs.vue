<template>
  <div class="why-us">
    <div class="why-us__bg">
      <img src="@/assets/home/why-us-bg.png" alt="background"/>
    </div>
    <Container>
      <div class="why-us__title">
        <p>{{ t("WhyUs") }}</p>
        <h2>{{ t("FeaturesOfOurPlatform") }}</h2>
      </div>
      <Swiper
          :space-between="40"
          :centeredSlides="false"
          :pagination="{ clickable: true }"
          :modules="modules"
          :breakpoints="breakpoints"
          class="why-us__list"
      >
        <SwiperSlide
            v-for="(item, index) in items"
            :key="index"
            class="why-us__item"
        >
          <div class="why-us__content">
            <img :src="item.icon" :alt="item.subtitle"/>
            <p class="pre-title">{{ item.subtitle }}</p>
            <h4 class="title">{{ item.title }}</h4>
            <div class="text__wrapper">
              <span v-for="text in item.text" :key="text" class="text">{{ text }}</span>
            </div>
            <router-link
                class="arr"
                :to="getLinkPath"
            ><img src="@/assets/home/square-arr.svg" alt="arr"
            /></router-link>
          </div>
          <img class="why-us__img" :src="item.image" alt="service"/>
        </SwiperSlide>
      </Swiper>
      <div class="why-us__banner">
        <h2>{{ t("Unlock") }}</h2>
        <p>{{ t("UnlockDesc") }}</p>
        <a
            href="https://www.kfw.de/inlandsfoerderung/Unternehmen/Energie-und-Umwelt/?kfwmc=kom.sea.google.kfwcorporate.run-of-site.sitelink%7Cenergieeffizienz&wt_cc1=brand&wt_cc2=coi"
            target="_blank"
        >
          <Button type="button" name="white">{{ t("SeeMore") }}</Button>
        </a>
        <div class="why-us__banner-bank-logo">
          <div class="why-us__banner-bank-logo--wrap">
            <div>
              <img alt="bank kfw icon" :src="icons.IconBankKFW"/>
            </div>
            <div class="divider"/>
            <div>
              <img alt="bank energie icon" :src="icons.IconBankEnergie"/>
            </div>
            <div class="divider"/>
            <div>
              <img alt="bank bundesamt icon" :src="icons.IconBankBundesamt"/>
            </div>
          </div>
        </div>
      </div>
    </Container>
  </div>
</template>

<script setup>
import "swiper/css";
import "swiper/css/pagination";

import {useRouter} from 'vue-router';
import {computed} from 'vue';
import {Swiper, SwiperSlide} from "swiper/vue";
import {Pagination} from "swiper/modules";
import {WHY_US_DATA} from "~/src/core/mock-data/why-us/why_us_mock_data";
import {useI18n} from 'vue-i18n';

import IconBankKFW from "@/assets/icons/section-bank/bank-kfw.svg";
import IconBankEnergie from "@/assets/icons/section-bank/bank-energie.svg";
import IconBankBundesamt from "@/assets/icons/section-bank/bank-bundesamt.svg";

import Button from "~/src/components/Reuseble/Button.vue";
import Container from "~/src/components/Reuseble/Container.vue";

// const loginStore = useLogin(); // Закоментовано поки відсутній стор
const icons = {
  IconBankKFW,
  IconBankEnergie,
  IconBankBundesamt,
};
const modules = [Pagination];

const breakpoints = {
  480: {
    slidesPerView: 1,
    spaceBetween: 40,
  },
  768: {
    slidesPerView: 2,
    spaceBetween: 50,
  },
  991: {
    slidesPerView: 3,
    spaceBetween: 85,
  },
  1200: {
    slidesPerView: 4,
    spaceBetween: 85,
  },
};

const {t} = useI18n();

const items = WHY_US_DATA.map((item) => ({
  ...item,
  title: t(item.title),
  subtitle: t(item.subtitle),
  text: item.text.map((text) => t(text)),
}));

const getLinkPath = computed(() => {
  // Закоментовано, замінено заглушкою
  // if (loginStore.userInfo === undefined || loginStore.roleName === 'customer') {
  //   return '/user-request-send';
  // }
  // return 'offers-list';
  return '/'; // Замінити на правильний шлях після переноса стора
});
</script>

<style lang="scss" scoped>
@import "@/assets/styles/main.scss";
@import "@/assets/styles/components/WhyUs.scss";

::v-global(.swiper-pagination-bullet) {
  background-color: white;
  border: 1px solid #3fd209;
}

::v-global(.swiper-pagination-bullet-active) {
  background-color: #9fdd88;
  border: none;
}

::v-global(.swiper-pagination-fraction),
::v-global(.swiper-pagination-custom),
::v-global(.swiper-horizontal > .swiper-pagination-bullets),
::v-global(.swiper-pagination-bullets.swiper-pagination-horizontal) {
  position: absolute;
  bottom: 0px;
  left: 0;
}
</style>
