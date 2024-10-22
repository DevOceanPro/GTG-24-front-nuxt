<template>
  <div class="partners">
    <div v-if="isMobileDevice" class="partners__mobile-hints">
      <div class="partners__mobile-hints--top">
        <NuxtImg
          class="partners__mobile-hints--top-icon"
          src="/images/icons/partners/hover-here.svg"
          alt="hints hover icon"
        />
        <span class="partners__mobile-hints--top-text">{{
          $t("clickHere")
        }}</span>
      </div>
      <NuxtImg
        class="partners__mobile-hints--bottom"
        src="/images/icons/partners/wavy-arrow.svg"
        alt="hints wavy arrow icon"
      />
    </div>

    <div
      class="partners__title"
      :style="{ marginBottom: isMobileDevice ? '20px' : '52px' }"
    >
      <h3>{{ $t("stepRegistrationTitle") }}</h3>
    </div>

    <ContainerComponent>
      <div class="partners__cards">
        <div v-if="!isMobileDevice" class="partners__hints">
          <div class="partners__hints--top">
            <NuxtImg
              class="partners__hints--top-icon"
              src="/images/icons/partners/hover-here.svg"
              alt="hints hover icon"
            />
            <span class="partners__hints--top-text">{{ $t("hoverHere") }}</span>
          </div>
          <NuxtImg
            class="partners__hints--bottom"
            src="/images/icons/partners/wavy-arrow.svg"
            alt="hints wavy arrow icon"
          />
        </div>

        <swiper
          :centered-slides="false"
          :modules="modules"
          :pagination="{
            clickable: true,
          }"
          :breakpoints="sliderBreakPoints"
          class="partners__items"
        >
          <swiper-slide
            v-for="(item, index) in partners"
            :key="item.id"
            class="partners__items-item"
            @mouseover="showCard(index)"
            @mouseout="hideCard(index)"
            @touchstart="showCard(index)"
            @mouseleave="hideCard(index)"
          >
            <div class="partners__items-item--card">
              <div
                class="partners__items-item--card-img"
                :style="{ backgroundImage: `url(${item.image})` }"
              />
              <p class="partners__items-item--card-title">
                {{ item.title }}
              </p>
            </div>

            <div
              :class="`card ${item.isVisible ? 'show' : ''}`"
              @click="
                () =>
                  handleOpenVideoModal(
                    isCurrentLangDe ? item.video.deVideo : item.video.enVideo,
                    item.preImage,
                  )
              "
            >
              <div class="card__text">
                <p>{{ item.subTitle }}</p>
              </div>
              <div class="card__icons">
                <div class="card__icons--first" />
                <div class="card__icons--second" />
                <div class="card__icons--third" />
                <div class="card__icons--fourth">
                  <NuxtImg
                    src="/images/icons/buttons/play.svg"
                    alt="play icon"
                  />
                </div>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
      <VideoViewModal ref="videoView" />
    </ContainerComponent>
  </div>
</template>

<script>
import "swiper/css";
import "swiper/css/pagination";

import { useCookies } from "vue3-cookies";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination } from "swiper/modules";

import defaultVideoImage from "public/images/video-placeholder.png";

// DE videos
import stepRegistrationVideoDe1 from "public/images/video/step-registration/step-de-1.mp4";
import stepRegistrationVideoDe2 from "public/images/video/step-registration/step-de-2.mp4";
import stepRegistrationVideoDe3 from "public/images/video/step-registration/step-de-3.mp4";
import stepRegistrationVideoDe4 from "public/images/video/step-registration/step-de-4.mp4";
import stepRegistrationVideoDe5 from "public/images/video/step-registration/step-de-5.mp4";
import stepRegistrationVideoDe6 from "public/images/video/step-registration/step-de-6.mp4";
import stepRegistrationVideoDe7 from "public/images/video/step-registration/step-de-7.mp4";
// EN videos
import stepRegistrationVideoEn1 from "public/images/video/step-registration/step-en-1.mp4";
import stepRegistrationVideoEn2 from "public/images/video/step-registration/step-en-2.mp4";
import stepRegistrationVideoEn3 from "public/images/video/step-registration/step-en-3.mp4";
import stepRegistrationVideoEn4 from "public/images/video/step-registration/step-en-4.mp4";
import stepRegistrationVideoEn5 from "public/images/video/step-registration/step-en-5.mp4";
import stepRegistrationVideoEn6 from "public/images/video/step-registration/step-en-6.mp4";
import stepRegistrationVideoEn7 from "public/images/video/step-registration/step-en-7.mp4";

import stepRegistration1 from "public/images/img/step-registration/step-1.jpeg";
import stepRegistration2 from "public/images/img/step-registration/step-2.jpeg";
import stepRegistration3 from "public/images/img/step-registration/step-3.jpeg";
import stepRegistration4 from "public/images/img/step-registration/step-4.jpeg";
import stepRegistration5 from "public/images/img/step-registration/step-5.jpeg";
import stepRegistration6 from "public/images/img/step-registration/step-6.jpeg";
import stepRegistration7 from "public/images/img/step-registration/step-7.jpeg";

import { PARTNERS_SLIDER_BREAKPOINTS } from "../../core/mock-data/partners/partners_mock_data";
import { isMobileBrowser } from "~/src/utils/helpers/isMobileBrowser.js";

export default {
  name: "OurPartners",
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      modules: [Pagination],
      sliderBreakPoints: PARTNERS_SLIDER_BREAKPOINTS,
      partners: [
        {
          id: 1,
          image: stepRegistration1,
          title: this.$t("stepRegistrationTitle1"),
          subTitle: this.$t("stepRegistrationSubtitle1"),
          textAlt: "Apple",
          isVisible: false,
          video: {
            deVideo: stepRegistrationVideoDe1,
            enVideo: stepRegistrationVideoEn1,
          },
          preImage: defaultVideoImage,
        },
        {
          id: 2,
          image: stepRegistration2,
          title: this.$t("stepRegistrationTitle2"),
          subTitle: this.$t("stepRegistrationSubtitle2"),
          textAlt: "Amazon",
          isVisible: false,
          video: {
            deVideo: stepRegistrationVideoDe2,
            enVideo: stepRegistrationVideoEn2,
          },
          preImage: defaultVideoImage,
        },
        {
          id: 3,
          image: stepRegistration3,
          title: this.$t("stepRegistrationTitle3"),
          subTitle: this.$t("stepRegistrationSubtitle3"),
          textAlt: "Google",
          isVisible: false,
          video: {
            deVideo: stepRegistrationVideoDe3,
            enVideo: stepRegistrationVideoEn3,
          },
          preImage: defaultVideoImage,
        },
        {
          id: 4,
          image: stepRegistration4,
          title: this.$t("stepRegistrationTitle4"),
          subTitle: this.$t("stepRegistrationSubtitle4"),
          textAlt: "Microsoft",
          isVisible: false,
          video: {
            deVideo: stepRegistrationVideoDe4,
            enVideo: stepRegistrationVideoEn4,
          },
          preImage: defaultVideoImage,
        },
        {
          id: 5,
          image: stepRegistration5,
          title: this.$t("stepRegistrationTitle5"),
          subTitle: this.$t("stepRegistrationSubtitle5"),
          textAlt: "Walmart",
          isVisible: false,
          video: {
            deVideo: stepRegistrationVideoDe5,
            enVideo: stepRegistrationVideoEn5,
          },
          preImage: defaultVideoImage,
        },
        {
          id: 6,
          image: stepRegistration6,
          title: this.$t("stepRegistrationTitle6"),
          subTitle: this.$t("stepRegistrationSubtitle6"),
          textAlt: "Samsung",
          isVisible: false,
          video: {
            deVideo: stepRegistrationVideoDe6,
            enVideo: stepRegistrationVideoEn6,
          },
          preImage: defaultVideoImage,
        },
        {
          id: 7,
          image: stepRegistration7,
          title: this.$t("stepRegistrationTitle7"),
          subTitle: this.$t("stepRegistrationSubtitle7"),
          textAlt: "Meta",
          isVisible: false,
          video: {
            deVideo: stepRegistrationVideoDe7,
            enVideo: stepRegistrationVideoEn7,
          },
          preImage: defaultVideoImage,
        },
      ],
    };
  },
  computed: {
    isMobileDevice() {
      return isMobileBrowser();
    },
    isCurrentLangDe() {
      const cookies = useCookies().cookies;
      return cookies.get("lang") === "de";
    },
  },
  methods: {
    showCard(index) {
      this.partners.forEach((item) => (item.isVisible = false));
      this.partners[index].isVisible = true;
    },
    hideCard(index) {
      this.partners[index].isVisible = false;
    },
    handleOpenVideoModal(video, image) {
      if (this.$refs.videoView) {
        this.$refs.videoView.showModal(video, image);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.partners {
  margin: 85px 0;

  &__title {
    margin-bottom: 52px;
    position: relative;

    & > h3 {
      text-align: center;
      font-family: Montserrat, sans-serif;
      font-size: 41px;
      font-weight: 700;
      line-height: 57.4px;
    }
  }

  &__items {
    position: relative;
    padding-bottom: 44px;

    &-item {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-start;
      min-width: 145px;
      max-width: 145px;
      position: relative;
      z-index: 100;
      cursor: pointer;

      &--card {
        &-img {
          width: 145px;
          height: 200px;
          background-repeat: no-repeat;
          background-size: contain;
          background-position: center;
          margin-bottom: 8px;

          & > img {
            width: 100%;
            height: 100%;
          }
        }

        &-title {
          font-size: 16px;
          font-weight: 600;
          line-height: 22.4px;
          text-align: left;
        }
      }
    }
  }

  &__cards {
    position: relative;
  }
}

.partners__hints {
  position: absolute;
  top: -58px;
  left: 16px;

  &--top {
    display: flex;
    align-items: center;
    margin-bottom: 8px;

    &-icon {
      margin-right: 8px;
    }

    &-text {
      font-family: Montserrat, sans-serif;
      font-size: 12px;
      font-weight: 700;
      line-height: 16.8px;
      color: #4ea62f;
      text-transform: uppercase;
    }
  }
}

.partners__mobile-hints {
  position: relative;
  padding-left: 20px;

  &--top {
    display: flex;
    align-items: center;
    margin-bottom: 8px;

    &-icon {
      margin-right: 8px;
    }

    &-text {
      font-family: Montserrat, sans-serif;
      font-size: 12px;
      font-weight: 700;
      line-height: 16.8px;
      color: #4ea62f;
      text-transform: uppercase;
    }
  }
}

@keyframes show {
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }

  100% {
    transform: translateX(0%);
    opacity: 1;
  }
}

.card {
  background-color: #4ea62fcc;
  height: 200px;
  min-width: 145px;

  border-radius: 8px;
  padding: 16px 9px;
  z-index: 100;
  cursor: default;
  display: none;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  animation-name: show;
  animation-duration: 1s;

  &__text {
    & > p {
      font-family: Montserrat, sans-serif;
      font-size: 14px;
      font-weight: 500;
      line-height: 19.6px;
      text-align: left;
      color: #fff;
      margin-bottom: 12px;
    }
  }

  &__icons {
    position: relative;
    cursor: pointer;
    width: 100%;
    height: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

    &--first {
      position: absolute;
      z-index: 1;
      width: 82px;
      height: 82px;
      background-color: #fff;
      opacity: 0.1;
      border-radius: 50%;
    }

    &--second {
      position: absolute;
      z-index: 2;
      width: 60px;
      height: 60px;
      background-color: #fff;
      opacity: 0.4;
      border-radius: 50%;
    }

    &--third {
      position: absolute;
      z-index: 3;
      width: 42px;
      height: 42px;
      background-color: #fff;
      opacity: 0.8;
      border-radius: 50%;
    }

    &--fourth {
      position: absolute;
      z-index: 4;
      width: 34px;
      height: 34px;
      background-color: #fff;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;

      & > img {
        width: 9px;
        height: 9px;
      }
    }
  }
}

.show {
  display: flex;
}

@media (max-width: 700px) {
  .partners {
    &__title {
      & > h3 {
        font-size: 21px;
        line-height: 30px;
      }
    }
  }
}

//::v-global {
//  .swiper-pagination-bullet {
//    background-color: white;
//    border: 1px solid #3fd209;
//  }
//
//  .swiper-pagination-bullet-active {
//    background-color: #9fdd88;
//    border: none;
//  }
//
//  .swiper-pagination-fraction,
//  .swiper-pagination-custom,
//  .swiper-horizontal > .swiper-pagination-bullets,
//  .swiper-pagination-bullets.swiper-pagination-horizontal {
//    position: absolute;
//    bottom: 0px;
//    left: 0;
//  }
//}
</style>
