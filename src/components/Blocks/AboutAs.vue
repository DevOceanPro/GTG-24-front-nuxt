<template>
  <div class="about-us">
    <ContainerComponent>
      <div class="about-us__title">
        <h2>{{ $t("AboutUs") }}</h2>
        <p>{{ $t("AboutDesc") }}</p>
      </div>

      <div class="about-us__video">
        <video ref="myVideo" controls @ended="videoEnded">
          <source src="~public/images/Final.mp4" type="video/mp4" />
        </video>

        <NuxtImg
          v-if="isPlugVideo"
          src="/images/video-placeholder2.png"
          alt="video-img"
        />

        <button v-if="isPlugVideo" class="play" @click="playVideo">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 150 150"
            fill="none"
          >
            <rect width="150" height="150" rx="75" fill="white" />
            <path
              d="M97 73.2679C98.3333 74.0378 98.3333 75.9622 97 76.732L65.5 94.9186C64.1667 95.6884 62.5 94.7261 62.5 93.1865L62.5 56.8135C62.5 55.2739 64.1667 54.3116 65.5 55.0814L97 73.2679Z"
              fill="#4EA62F"
            />
          </svg>
        </button>
      </div>

      <div class="about-us__cards">
        <div v-for="(partner, index) in partners" :key="index" class="card">
          <NuxtImg :src="partner.image" :alt="partner.alt" height="70" />
          <h4>{{ $t(partner.titleKey) }}</h4>
          <p>{{ $t(partner.descrKey) }}</p>
        </div>
      </div>

      <div class="about-us__how-find">
        <div class="wrap">
          <div class="info">
            <h2>{{ $t("HowToFindACompany?") }}</h2>
            <p>{{ $t("HowToFindACompanyDesc") }}</p>
            <div class="info__btn">
              <CustomButton
                name="green-outline"
                :text="$t('ListOfCompanies')"
                type="button"
                @click="findCompany"
              />
            </div>
          </div>
          <NuxtImg
            class="image"
            src="/images/about-us/frame-company.svg"
            alt="company"
            width="456"
            height="456"
          />
        </div>

        <div class="images">
          <NuxtImg
            class="image"
            src="/images/about-us/frame-company.svg"
            alt="company"
            width="456"
            height="456"
          />
          <NuxtImg
            class="image"
            src="/images/about-us/frame-customers.svg"
            alt="customers"
            width="456"
            height="456"
          />
        </div>

        <div class="wrap">
          <NuxtImg
            class="image"
            src="/images/about-us/frame-customers.svg"
            alt="customers"
            width="456"
            height="456"
          />
          <div class="info">
            <h2>{{ $t("HowToFindCustomers?") }}</h2>
            <p>{{ $t("HowToFindCustomersDesc") }}</p>
            <div class="info__btn">
              <CustomButton
                name="green-outline"
                :text="$t('ListOfCustomers')"
                type="button"
                @click="findCustomer"
              />
            </div>
          </div>
        </div>
      </div>
    </ContainerComponent>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination } from "swiper/modules";

const router = useRouter();

const myVideo = ref(null);
const isPlugVideo = ref(true);

const playVideo = () => {
  const video = myVideo.value;
  if (video) {
    video.play();
    isPlugVideo.value = false;
  }
};

const videoEnded = () => {
  isPlugVideo.value = true;
};

const partners = [
  {
    image: "/images/home/frame-2.svg",
    alt: "icon",
    titleKey: "PhotovoltaicSystems",
    descrKey: "PhotovoltaicSystemsDescr",
  },
  {
    image: "/images/home/frame-4.svg",
    alt: "icon",
    titleKey: "SystemsWithEnergyStorage",
    descrKey: "SystemsWithEnergyStorageDescr",
  },
  {
    image: "/images/home/frame-1.svg",
    alt: "icon",
    titleKey: "WindEnergy",
    descrKey: "WindEnergyDescr",
  },
  {
    image: "/images/home/frame-1.svg",
    alt: "icon",
    titleKey: "HydrogenInstallations",
    descrKey: "HydrogenInstallationsDescr",
  },
  {
    image: "/images/home/frame-3.svg",
    alt: "icon",
    titleKey: "AirSourceHeatPumps",
    descrKey: "AirSourceHeatPumpsDescr",
  },
  {
    image: "/images/home/frame-2.svg",
    alt: "icon",
    titleKey: "GeothermalSystems",
    descrKey: "GeothermalSystemsDescr",
  },
  {
    image: "/images/home/frame-3.svg",
    alt: "icon",
    titleKey: "BiogasInstallations",
    descrKey: "BiogasInstallationsDescr",
  },
  {
    image: "/images/home/frame-4.svg",
    alt: "icon",
    titleKey: "EnergyConsultant",
    descrKey: "EnergyConsultantDescr",
  },
];

// const findCompany = () => {
//   const roleName = loginStore.userInfo?.user.roleName;
//   router.push(roleName === "customer" ? "/user-request-send" : "/login");
// };

// const findCustomer = () => {
//   const roleName = loginStore.userInfo?.user.roleName;
//   router.push(roleName === "company-admin" ? "/offers-list" : "/login");
// };
</script>

<style lang="scss" scoped>
.about-us {
  padding: 80px 0;

  @media (max-width: 991px) {
    padding: 40px 0;
  }

  &__title {
    @include flex(row, space-between, flex-start);
    margin-bottom: 116px;

    @media (max-width: 991px) {
      margin-bottom: 37px;
    }

    h2 {
      color: $black;
      font-family: $font-main;
      font-size: 36px;
      font-weight: 700;
      line-height: 130%;

      @media (max-width: 991px) {
        width: 50%;
        font-size: 24px;
        font-weight: 600;
      }
    }

    p {
      width: 867px;
      color: $black;
      font-family: $font-main;
      font-size: 18px;
      font-weight: 400;
      line-height: 170%;

      @media (max-width: 991px) {
        width: 50%;
        font-size: 12px;
      }
    }
  }

  &__video {
    @include flex(row, center, center);
    gap: 20px;
    width: 100%;
    position: relative;
    margin-bottom: 116px;

    @media (max-width: 991px) {
      margin-bottom: 80px;
    }

    video {
      width: 100%;
      height: auto;
    }

    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      filter: brightness(40%);
    }

    .play {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);

      svg {
        width: 150px;
        height: 150px;

        @media (max-width: 991px) {
          width: 70px;
          height: 70px;
        }
      }
    }
  }

  :deep() {
    .swiper-pagination-bullet {
      width: 6px;
      height: 6px;
    }

    .swiper-pagination-bullet-active {
      background-color: black;
    }

    .swiper-pagination-fraction,
    .swiper-pagination-custom,
    .swiper-horizontal > .swiper-pagination-bullets,
    .swiper-pagination-bullets.swiper-pagination-horizontal {
      position: absolute;
      bottom: 0;
      left: 0;
    }
  }

  &__cards {
    @include flex(row, space-between, flex-start);
    flex-wrap: wrap;
    row-gap: 32px;
    margin-bottom: 70px;

    @media (max-width: 991px) {
      justify-content: center;
      margin-bottom: 80px;
      row-gap: 19px;
      gap: 19px;
    }

    .card {
      width: 277px;
      height: 350px;
      padding: 30px 14px;
      border-radius: 10px;
      background: $white;
      box-shadow: 0 1px 42px 0 rgba(78, 78, 78, 0.06);

      @media (max-width: 991px) {
        padding: 18px 6px;
        border-radius: 6px;
        width: 162px;
        height: 200px;
      }

      img {
        margin-bottom: 26px;

        @media (max-width: 991px) {
          max-width: 25%;
          margin-bottom: 16px;
        }
      }

      h4 {
        color: #151515;
        font-family: $font-main;
        font-size: 20px;
        font-weight: 700;
        line-height: 31.2px;
        margin-bottom: 10px;

        @media (max-width: 991px) {
          font-size: 14px;
          font-weight: 600;
          line-height: 18.247px;
          margin-bottom: 6px;
        }
      }

      p {
        color: $grey-light;
        font-family: $font-main;
        font-weight: 400;
        line-height: 140%;

        @media (max-width: 991px) {
          font-size: 10px;
        }
      }
    }
  }

  &__how-find {
    @include flex(column, center, center);
    gap: 20px;
    margin-bottom: 120px;

    @media (max-width: 991px) {
      gap: 0;
      margin-bottom: 74px;
    }

    .wrap {
      @include flex(row, space-between, center);
      gap: 158px;

      @media (max-width: 991px) {
        @include flex(column, center, center);
        gap: 0;
      }

      img {
        @media (max-width: 991px) {
          display: none;
        }
      }
    }

    .images {
      display: none;

      @media (max-width: 991px) {
        @include flex(row, space-between, center);
        margin: 63px 0;
      }

      img {
        width: 49%;
      }
    }

    .wrap .info {
      h2 {
        color: #35404e;
        font-family: $font-main;
        font-size: 36px;
        font-weight: 700;
        line-height: 150%;
        margin-bottom: 24px;

        @media (max-width: 991px) {
          font-size: 24px;
          margin-bottom: 20px;
        }
      }

      p {
        color: $black;
        font-family: $font-main;
        font-weight: 400;
        line-height: 170%;
        margin-bottom: 40px;
        max-width: 646px;

        @media (max-width: 991px) {
          font-size: 12px;
          margin-bottom: 32px;
        }
      }

      &__btn {
        @media (max-width: 991px) {
          text-align: end;
        }
      }
    }
  }

  &__partners {
    @include flex(row, space-between, center);
    gap: 58px;

    @media (max-width: 768px) {
      gap: 37px;
    }

    &__item {
      @include flex(row, center, flex-start);
    }
  }
}
</style>
