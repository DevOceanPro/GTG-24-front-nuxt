<template>
  <swiper
      :pagination="{ clickable: true }"
      :modules="modules"
      :breakpoints="breakpoints"
      class="social__slider--items"
  >
    <swiper-slide v-for="{ text, to, icon, id } in links" :key="id" class="social__slider--item">
      <a class="social__slider--item-wrapper" :href="to" target="_blank">
        <img class="social__slider--item-icon" :src="icon"/>
        <p class="social__slider--item-text">{{ text }}</p>
      </a>
    </swiper-slide>
  </swiper>
</template>

<script setup>
import {ref} from 'vue';
import {Pagination} from 'swiper/modules';
import {Swiper, SwiperSlide} from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';

import {sliderBreakpoints} from '~/src/components/Sliders/SocialSlider/slider-config'; // Adjust the path if necessary
import {socialLinks} from '~/src/components/Sliders/SocialSlider/data'; // Adjust the path if necessary

const links = ref(socialLinks);
const modules = [Pagination];
const breakpoints = sliderBreakpoints;
</script>

<style lang="scss">
@import '@/assets/styles/main';
// Adjust the path if necessary
@import "@/src/components/Sliders/SocialSlider/SocialSlider.scss";
</style>
