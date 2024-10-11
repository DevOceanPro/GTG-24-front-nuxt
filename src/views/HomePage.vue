<template>
  <div v-if="show" class="loader">
    <Loader :show="show" />
  </div>
  <div v-else>
    <HomeBlock v-if="userInfo === undefined" />
    <BannerComponent v-else :statistic-banners="statisticBanners" />
    <OurOpportunities />
    <SocialComponent />
    <ForClients
      v-if="userInfo === undefined || roleName === 'customer'"
      :object="userInfo === undefined ? client : clientLogin"
    />
    <ForCompanies
      v-if="roleName === 'company-admin'"
      :object="userInfo === undefined ? company : companyLogin"
    />
    <OurPartners />
    <ForCompanies
      v-if="userInfo === undefined"
      :object="userInfo === undefined ? company : companyLogin"
    />
    <WhyUs />
    <WhyChooseUs :home-page-statistic="homePageStatistic" />
    <OurClients :home-page-statistic="homePageStatistic" />
    <ContainerComponent>
      <OurTestimonials :review-site="reviewSite" />
    </ContainerComponent>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
// закоментовано поки стор не доступний
// import { useLogin } from "@/stores/loginStore";
// import { useStatisticStore, statisticEvent, statisticName } from "@/stores/statisticStore";
import { useHead } from "@unhead/vue";
import { useI18n } from "vue-i18n";
// Importing components
import HomeBlock from "~/src/components/Blocks/HomeBlock.vue";
import OurOpportunities from "~/src/components/Blocks/OurOpportunities.vue";
import ForClients from "~/src/components/Blocks/ForClients.vue";
import ForCompanies from "~/src/components/Blocks/ForCompanies.vue";
import WhyUs from "~/src/components/Blocks/WhyUs.vue";
import WhyChooseUs from "~/src/components/Blocks/WhyChooseUs.vue";
import OurClients from "~/src/components/Blocks/OurClients.vue";
import OurTestimonials from "~/src/components/Blocks/OurTestimonials.vue";
import Loader from "~/src/components/Reusable/AnimationBlock.vue";
import BannerComponent from "~/src/components/Blocks/BannerComponent.vue";
import OurPartners from "~/src/components/Blocks/OurPartners.vue";
import SocialComponent from "~/src/components/Blocks/SocialComponent.vue";
import ContainerComponent from "~/src/components/Reusable/ContainerComponent.vue";

useHead({ title: "GTG 24" });
const { t } = useI18n();

const show = ref(false);
const userInfo = undefined; // Temporary placeholder, replace with actual logic
const roleName = "customer"; // Temporary placeholder, replace with actual logic
const statisticBanners = undefined;
const homePageStatistic = undefined;
const reviewSite = undefined;

const company = {
  preTitle: t("ForCompanies"),
  title: t("ForCompaniesTitle"),
  items: [
    {
      title: t("ForCompaniesItemOne"),
      url: "login",
    },
    {
      title: t("ForCompaniesItemTwo"),
      url: "login",
    },
    {
      title: t("ForCompaniesItemThree"),
      url: "login",
    },
  ],
};

const companyLogin = {
  preTitle: t("ForCompanies"),
  title: t("ForCompaniesTitle"),
  items: [
    {
      title: t("ForCompaniesItemOne"),
      url: "offers-list",
    },
    {
      title: t("ForCompaniesItemTwo"),
      url: "active-offers",
    },
    {
      title: t("ForCompaniesItemThree"),
      url: "clients",
    },
  ],
};

const client = {
  preTitle: t("ForClients"),
  title: t("PlaceAnAd"),
  items: [
    {
      title: t("HireCompany"),
      url: "login",
    },
    {
      title: t("ConsiderCompanies"),
      url: "login",
    },
    {
      title: t("LetUsHelp"),
      url: "login",
    },
  ],
};
const clientLogin = {
  preTitle: t("ForClients"),
  title: t("PlaceAnAd"),
  items: [
    {
      title: t("HireCompany"),
      url: "user-offers",
    },
    {
      title: t("ConsiderCompanies"),
      url: "user-offers",
    },
    {
      title: t("LetUsHelp"),
      url: "user-contact",
    },
  ],
};

// Закоментовано поки стор не доступний
// const seeBanners = (data) => {
//   if (data instanceof Error) {
//     return;
//   }
//   statisticBanners.value = data;
// };
// const seeHomePageStatistic = (data) => {
//   if (data instanceof Error) {
//     return;
//   }
//   homePageStatistic.value = data;
// };
// const seeReviewSite = (data) => {
//   if (data instanceof Error) {
//     return;
//   }
//   reviewSite.value = data;
// };

onMounted(() => {
  // Закоментовано поки стор не доступний
  // if (loginStore.userInfo !== undefined) {
  //   statisticStore.getBanners();
  // }
  // statisticStore.getHomePageStatistic();
  // statisticStore.getReviewSite();
});

// Закоментовано поки стор не доступний
// onBeforeUnmount(() => {
//   statisticEvent.unsubscribe(statisticName.getBanners, seeBanners);
//   statisticEvent.unsubscribe(statisticName.getHomePageStatistic, seeHomePageStatistic);
//   statisticEvent.unsubscribe(statisticName.getReviewSite, seeReviewSite);
// });
</script>

<style lang="scss" scoped>
@import "@/assets/styles/main.scss";

.loader {
  position: absolute;
  top: 0;
  left: 0;
  @include flex(row, center, center);
  width: 100vw;
  height: 100vh;
}
</style>
