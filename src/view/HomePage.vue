<template>
  <div class="loader" v-if="show">
    <Loader :show="show"/>
  </div>
  <div v-else>
    <HomeBlock v-if="userInfo === undefined"/>
    <Banner v-else :statistic-banners="statisticBanners"/>
    <OurOpportunities/>
    <Social/>
    <ForClients
        v-if="
        userInfo === undefined ||
        roleName === 'customer'
      "
        :object="userInfo === undefined ? client : clientLogin"
    />
    <ForCompanies
        v-if="roleName === 'company-admin'"
        :object="userInfo === undefined ? company : companyLogin"
    />
    <Partners/>
    <ForCompanies
        v-if="userInfo === undefined"
        :object="userInfo === undefined ? company : companyLogin"
    />
    <WhyUs/>
    <WhyChooseUs :home-page-statistic="homePageStatistic"/>
    <OurClients :home-page-statistic="homePageStatistic"/>
    <Container>
      <OurTestimonials :review-site="reviewSite"/>
    </Container>
  </div>
</template>

<script setup>
import {ref, onMounted, onBeforeUnmount} from 'vue';
// закоментовано поки стор не доступний
// import { useLogin } from "@/stores/loginStore";
// import { useStatisticStore, statisticEvent, statisticName } from "@/stores/statisticStore";
import Banner from "~/src/components/Blocks/Banner.vue";
import HomeBlock from "~/src/components/Blocks/HomeBlock.vue";
import OurOpportunities from "~/src/components/Blocks/OurOpportunities.vue";
import ForClients from "~/src/components/Blocks/ForClients.vue";
import ForCompanies from "~/src/components/Blocks/ForCompanies.vue";
import Partners from "~/src/components/Blocks/Partners.vue";
import WhyUs from "~/src/components/Blocks/WhyUs.vue";
import WhyChooseUs from "~/src/components/Blocks/WhyChooseUs.vue";
import OurClients from "~/src/components/Blocks/OurClients.vue";
import OurTestimonials from "~/src/components/Blocks/OurTestimonials.vue";
import Container from "~/src/components/Reuseble/Container.vue";
import Loader from "~/src/components/Reuseble/AnimationBlock.vue";
import Social from "~/src/components/Blocks/Social/Social.vue";
import {useHead} from "@unhead/vue";

useHead({title: "GTG 24"});

const show = ref(false);
// Захардкоджені данні, поки стор не доступний
const userInfo = undefined; // Закомментовано: const loginStore = useLogin();
const roleName = 'customer'; // Закомментовано: const roleName = loginStore.roleName;
const statisticBanners = undefined;
const homePageStatistic = undefined;
const reviewSite = undefined;
const company = {
  preTitle: "ForCompanies",
  title: "ForCompaniesTitle",
  items: [
    {
      title: "ForCompaniesItemOne",
      url: "login",
    },
    {
      title: "ForCompaniesItemTwo",
      url: "login",
    },
    {
      title: "ForCompaniesItemThree",
      url: "login",
    },
  ],
};
const companyLogin = {
  preTitle: "ForCompanies",
  title: "ForCompaniesTitle",
  items: [
    {
      title: "ForCompaniesItemOne",
      url: "offers-list",
    },
    {
      title: "ForCompaniesItemTwo",
      url: "active-offers",
    },
    {
      title: "ForCompaniesItemThree",
      url: "clients",
    },
  ],
};
const client = {
  preTitle: "ForClients",
  title: "PlaceAnAd",
  items: [
    {
      title: "HireCompany",
      url: "login",
    },
    {
      title: "ConsiderCompanies",
      url: "login",
    },
    {
      title: "LetUsHelp",
      url: "login",
    },
  ],
};
const clientLogin = {
  preTitle: "ForClients",
  title: "PlaceAnAd",
  items: [
    {
      title: "HireCompany",
      url: "user-offers",
    },
    {
      title: "ConsiderCompanies",
      url: "user-offers",
    },
    {
      title: "LetUsHelp",
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
