<template>
  <div class="banner">
    <ContainerComponent>
      <Swiper
        :pagination="{ clickable: true }"
        :autoplay="{ delay: 3000, disableOnInteraction: false }"
        :modules="modules"
      >
        <SwiperSlide v-for="item in statisticBanners?.data" :key="item.id">
          <div
            class="banner__slid"
            :style="{ background: `url(${isDesktop(item)})` }"
          >
            <div
              v-if="
                item.title.length ||
                item.text.length ||
                item.textLinc.length ||
                item.url.length ||
                item.discount.length ||
                item.discountText.length
              "
              class="banner__content"
            >
              <h2>{{ item.title }}</h2>
              <p>{{ item.text }}</p>
              <CustomButton
                v-if="item.textLinc.length"
                :disabled="item.url.length === 0"
                class="banner__content__btn"
                :text="item.textLinc"
                @click="reviewSite(item.url)"
              />
              <div
                v-if="item.discount.length || item.discountText.length"
                class="banner__circle"
              >
                <div v-if="item.discount.length" class="circle">
                  <span>{{ item.discount }}</span>
                </div>
                <p v-if="item.discountText.length">
                  {{ item.discountText }}
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </ContainerComponent>
  </div>
</template>

<script setup>
import "swiper/css";
import "swiper/css/pagination";

import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Pagination } from "swiper/modules";
import CustomButton from "~/src/components/Reusable/CustomButton.vue";
import ContainerComponent from "~/src/components/Reusable/ContainerComponent.vue";

const props = defineProps({
  statisticBanners: {
    type: Object,
    required: false,
    default: () => ({}),
  },
});

const modules = [Autoplay, Pagination];
const items = [
  {
    title: "Harness the Power of the Sun with Solar Panel Installation",
    text: "Switch to clean, renewable energy. Reduce your carbon footprint and save on energy costs. Our expert team ensures a seamless transition to solar power for your home or business. Start your sustainable future today!",
    discount: "-20",
    label: "on the first request",
  },
  {
    title: "Harness the Power of the Sun with Solar Panel Installation",
    text: "Switch to clean, renewable energy. Reduce your carbon footprint and save on energy costs. Our expert team ensures a seamless transition to solar power for your home or business. Start your sustainable future today!",
    discount: "-20",
    label: "on the first request",
  },
  {
    title: "Harness the Power of the Sun with Solar Panel Installation",
    text: "Switch to clean, renewable energy. Reduce your carbon footprint and save on energy costs. Our expert team ensures a seamless transition to solar power for your home or business. Start your sustainable future today!",
    discount: "-20",
    label: "on the first request",
  },
  {
    title: "Harness the Power of the Sun with Solar Panel Installation",
    text: "Switch to clean, renewable energy. Reduce your carbon footprint and save on energy costs. Our expert team ensures a seamless transition to solar power for your home or business. Start your sustainable future today!",
    discount: "-20",
    label: "on the first request",
  },
];

const reviewSite = (data) => {
  const link = data;
  const newTab = window.open(link, "_blank");

  if (!newTab) {
    window.location.replace(link);
  }
};

const isDesktop = (item) => {
  return window.innerWidth >= 768 ? item.img : item.imgMobile;
};
</script>

<style lang="scss" scoped>
:global(.swiper-pagination-bullet-active) {
  background-color: $green;
}

.banner {
  padding-top: 32px;

  @media (max-width: 991px) {
    padding-top: 0;
  }

  &__slid {
    width: 100%;
    height: 313px;
    position: relative;
    background-size: cover !important;
    background-repeat: no-repeat;
    background-position: center center;
    padding: 30px 56px;
    margin-bottom: 50px;

    @media (max-width: 991px) {
      height: 406px;
      padding: 76px 16px;
      margin-bottom: 35px;
    }
  }

  &__content {
    width: 680px;

    @media (max-width: 991px) {
      width: 100%;
    }

    h2 {
      width: 589px;
      height: 96px;
      color: $white;
      font-family: $font-main;
      font-size: 32px;
      font-weight: 700;
      line-height: 150%;
      margin-bottom: 20px;

      @media (max-width: 991px) {
        height: 60px;
        font-size: 20px;
        width: 100%;
      }
    }

    p {
      color: $white;
      height: 54px;
      font-family: $font-main;
      font-size: 18px;
      font-weight: 400;
      line-height: 150%;
      margin-bottom: 40px;

      @media (max-width: 991px) {
        height: 100px;
        font-size: 13px;
      }
    }

    &__btn {
      border-radius: 5px;
      background: $white;
      line-height: 15px;
      border: none;
      width: 168px;
      height: 44px;
      color: $black;
      font-size: 14px;

      @media (max-width: 991px) {
        font-size: 12px;
        width: 156px;
        height: 32px;
      }
    }
  }

  &__circle {
    @include flex(column, center, center);
    position: absolute;
    top: 30px;
    right: 30px;

    @media (max-width: 991px) {
      top: 15px;
      right: 15px;
    }

    .circle {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 121px;
      height: 121px;
      background-color: $white;
      border-radius: 50%;
      margin-bottom: 6px;

      @media (max-width: 991px) {
        width: 45px;
        height: 45px;
        margin-bottom: 0;
      }

      span {
        color: $black;
        font-family: $font-main;
        font-size: 32px;
        font-weight: 700;
        line-height: 150%;

        @media (max-width: 991px) {
          font-size: 12px;
        }
      }
    }

    p {
      color: $white;
      font-family: $font-main;
      font-size: 20px;
      font-weight: 700;
      line-height: 150%;

      @media (max-width: 991px) {
        display: none;
      }
    }
  }
}
</style>
