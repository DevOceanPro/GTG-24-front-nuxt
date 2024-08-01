<template>
  <div class="social">
    <Container>
      <h2 class="social__title">{{ $t('socialMediaTitle') }}</h2>

      <div class="social__items">
        <div v-for="({ text, to, icon, id }) in links" :key="id" class="social__item">
          <a class="social__item-wrapper" :href="to" target="_blank">
            <img class="social__item-icon" :src="icon"/>
            <p class="social__item-text">{{ text }}</p>
          </a>
        </div>
      </div>

      <SocialSlider/>
    </Container>
  </div>
</template>

<script setup>
import {ref} from 'vue';
import {useI18n} from 'vue-i18n';
import Container from '~/src/components/Reuseble/Container.vue';
import SocialSlider from '~/src/components/Sliders/SocialSlider/SocialSlider.vue';
import {socialLinks} from '~/src/components/Sliders/SocialSlider/data';

const {t} = useI18n();
const links = ref(socialLinks);
</script>

<style lang="scss">
@import "@/assets/styles/main";
@import "@/src/components/Blocks/Social/Social.scss";
</style>
