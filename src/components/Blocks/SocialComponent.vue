<template>
  <div class="social">
    <ContainerComponent>
      <h2 class="social__title">{{ $t("socialMediaTitle") }}</h2>

      <div class="social__items">
        <div
          v-for="{ text, to, icon, id } in links"
          :key="id"
          class="social__item"
        >
          <a class="social__item-wrapper" :href="to" target="_blank">
            <img class="social__item-icon" :src="icon" />
            <p class="social__item-text">{{ text }}</p>
          </a>
        </div>
      </div>

      <SocialSlider />
    </ContainerComponent>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useI18n } from "vue-i18n";
import SocialSlider from "~/src/components/Sliders/SocialSlider/SocialSlider.vue";
import { socialLinks } from "~/src/components/Sliders/SocialSlider/data.js";
import ContainerComponent from "~/src/components/Reusable/ContainerComponent.vue";

const { t } = useI18n();
const links = ref(socialLinks);
</script>

<style lang="scss">
.social {
  margin-bottom: 120px;
  height: 272px;
  overflow: hidden;

  @media (max-width: 601px) {
    height: 328px;
  }

  @media (max-width: 375px) {
    height: 210px;
    margin-bottom: 106px;
  }

  &__title {
    color: #151515;
    font-family: Montserrat;
    text-align: center;
    font-size: 41px;
    font-weight: 700;
    line-height: 57px;
    letter-spacing: 0px;
    margin-bottom: 60px;

    @media (max-width: 375px) {
      font-weight: 600;
      font-size: 21px;
      line-height: 30px;
      margin-bottom: 24px;
    }
  }

  &__items {
    display: none;
    justify-content: space-between;
    gap: 20px;

    @media (min-width: 835px) {
      display: flex;
    }
  }

  &__item {
    padding: 32px 24px;
    max-width: 325px;
    width: 100%;
    height: 120px;
    box-shadow: 0px 0px 14px 0px rgba(0, 0, 0, 0.15);
    background-color: #fff;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;

    &-wrapper {
      display: flex;
      align-items: center;
      cursor: pointer;

      @media (max-width: 1100px) {
        flex-direction: column;
      }
    }

    &-icon {
      margin-right: 24px;
      width: 56px;
      height: 56px;

      @media (max-width: 1100px) {
        margin-right: 0px;
        margin-bottom: 6px;
      }
    }

    &-text {
      color: #1e1e1e;
      font-family: Montserrat;
      font-size: 21px;
      font-weight: 600;
      line-height: 29px;
      letter-spacing: 0px;
    }
  }
}
</style>
