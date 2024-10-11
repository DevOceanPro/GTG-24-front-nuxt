<template>
  <div class="partners">
    <div v-if="isMobileDevice" class="partners__mobile-hints">
      <div class="partners__mobile-hints--top">
        <img
          class="partners__mobile-hints--top-icon"
          :src="icons.HoverIcon"
          alt="hints hover icon"
        />
        <span class="partners__mobile-hints--top-text">{{
          $t("clickHere")
        }}</span>
      </div>
      <img
        class="partners__mobile-hints--bottom"
        :src="icons.WavyArrow"
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
            <img
              class="partners__hints--top-icon"
              :src="icons.HoverIcon"
              alt="hints hover icon"
            />
            <span class="partners__hints--top-text">{{ $t("hoverHere") }}</span>
          </div>
          <img
            class="partners__hints--bottom"
            :src="icons.WavyArrow"
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
                  <img :src="icons.PlayIcon" alt="play icon" />
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

import VideoViewModal from "@/src/components/Modal/VideoViewModal.vue";

import HoverIcon from "@/assets/icons/partners/hover-here.svg";
import WavyArrow from "@/assets/icons/partners/wavy-arrow.svg";
import PlayIcon from "@/assets/icons/buttons/play.svg";
import defaultVideoImage from "../../assets/video-placeholder.png";

// DE videos
import stepRegistrationVideoDe1 from "../../assets/video/step-registration/step-de-1.mp4";
import stepRegistrationVideoDe2 from "../../assets/video/step-registration/step-de-2.mp4";
import stepRegistrationVideoDe3 from "../../assets/video/step-registration/step-de-3.mp4";
import stepRegistrationVideoDe4 from "../../assets/video/step-registration/step-de-4.mp4";
import stepRegistrationVideoDe5 from "../../assets/video/step-registration/step-de-5.mp4";
import stepRegistrationVideoDe6 from "../../assets/video/step-registration/step-de-6.mp4";
import stepRegistrationVideoDe7 from "../../assets/video/step-registration/step-de-7.mp4";
// EN videos
import stepRegistrationVideoEn1 from "../../assets/video/step-registration/step-en-1.mp4";
import stepRegistrationVideoEn2 from "../../assets/video/step-registration/step-en-2.mp4";
import stepRegistrationVideoEn3 from "../../assets/video/step-registration/step-en-3.mp4";
import stepRegistrationVideoEn4 from "../../assets/video/step-registration/step-en-4.mp4";
import stepRegistrationVideoEn5 from "../../assets/video/step-registration/step-en-5.mp4";
import stepRegistrationVideoEn6 from "../../assets/video/step-registration/step-en-6.mp4";
import stepRegistrationVideoEn7 from "../../assets/video/step-registration/step-en-7.mp4";

import stepRegistration1 from "../../assets/img/step-registration/step-1.jpeg";
import stepRegistration2 from "../../assets/img/step-registration/step-2.jpeg";
import stepRegistration3 from "../../assets/img/step-registration/step-3.jpeg";
import stepRegistration4 from "../../assets/img/step-registration/step-4.jpeg";
import stepRegistration5 from "../../assets/img/step-registration/step-5.jpeg";
import stepRegistration6 from "../../assets/img/step-registration/step-6.jpeg";
import stepRegistration7 from "../../assets/img/step-registration/step-7.jpeg";

import { PARTNERS_SLIDER_BREAKPOINTS } from "../../core/mock-data/partners/partners_mock_data";
import { isMobileBrowser } from "~/src/utils/helpers/isMobileBrowser.js";
import ContainerComponent from "~/src/components/Reusable/ContainerComponent.vue";

export default {
  name: "OurPartners",
  components: {
    ContainerComponent,
    VideoViewModal,
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      icons: {
        HoverIcon,
        WavyArrow,
        PlayIcon,
      },
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

<style lang="scss">
@import "@/assets/styles/components/Partners.scss";
</style>
