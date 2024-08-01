<template>
  <div class="for-companies">
    <Container>
      <div class="content">
        <div class="content__bg">
          <div class="content__bg__overlay"></div>
        </div>
        <div class="content__info">
          <p class="content__pre-title">{{ object.preTitle }}</p>
          <h2 class="content__title" v-html="object.title"/>
          <ul class="content__list">
            <li
                v-for="(item, index) in object.items"
                :key="index"
                class="content__item"
            >
              <p>{{ item.title }}</p>
              <router-link :to="{ name: item.url }">
                <span>{{ $t("GetStarted") }}</span>
                <i class="icon-arr-long-right"></i>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </Container>
  </div>
</template>

<script setup>
import {defineProps} from 'vue';
import Container from "~/src/components/Reuseble/Container.vue";

const props = defineProps({
  object: {
    type: Object,
    required: true,
  }
});
</script>

<style lang="scss" scoped>
@import "@/assets/styles/main.scss";

.content {
  position: relative;
  background-image: url(@/assets/home/for-companies_2.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  border-radius: 20px;
  overflow: hidden;
  @media (max-width: 768px) {
    background-image: url(@/assets/home/for-companies_2_mob.png);
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3);
  }

  &__info {
    position: relative;
    z-index: 2;
    padding: 57px 50px 40px 50px;
    @media (max-width: 991px) {
      padding: 60px 18px 53px 16px;
    }
  }

  &__pre-title {
    color: $white;
    font-family: $font-main;
    font-size: 24px;
    font-weight: 700;
    line-height: 170%;
    margin-bottom: 32px;
    @media (max-width: 991px) {
      font-size: 15px;
      margin-bottom: 12px;
    }
  }

  &__title {
    color: $white;
    font-family: $font-main;
    font-size: 45px;
    font-weight: 700;
    line-height: 150%;
    margin-bottom: 150px;
    @media (max-width: 991px) {
      font-size: 24px;
      margin-bottom: 51px;
    }
  }

  &__list {
    @include flex(row, space-between, center);
    gap: 10px;
    @media (max-width: 991px) {
      @include flex(column, center, center);
      gap: 60px;
    }
  }

  &__item {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 400px;
    height: 200px;
    padding: 26px 29px;
    border-radius: 15px;
    background: $white;
    @media (max-width: 1310px) {
      height: 250px;
    }
    @media (max-width: 991px) {
      gap: 24px;
      padding: 26px 16px;
      width: 100%;
      height: auto;
    }

    p {
      color: $black;
      font-family: $font-main;
      font-size: 25px;
      font-weight: 600;
      line-height: 150%;
      @media (max-width: 991px) {
        font-size: 15px;
      }
    }

    a {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 11px;
      margin-top: auto;
      color: $green;
      font-family: $font-main;
      font-weight: 700;
      line-height: 26px;
      @media (max-width: 991px) {
        font-size: 13px;
      }
    }
  }
}
</style>
