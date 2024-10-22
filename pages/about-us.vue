<template>
  <div>
    <TitleBar page="AboutUs" variant="one" />
    <AboutAs />
    <AnimationBlock v-if="show" style="margin: 250px 0 0 0" :show="show" />
    <OurClients v-else :home-page-statistic="homePageStatistic" />
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import { useHead } from "@unhead/vue";
// import { useStatisticStore, statisticEvent, statisticName } from "@/stores/statisticStore";

useHead({ title: "GTG 24" });

const show = ref(false);
const homePageStatistic = ref(undefined);

// const statisticStore = useStatisticStore();

const seeHomePageStatistic = (data) => {
  if (data instanceof Error) return;
  homePageStatistic.value = data;
  show.value = false;
};

// Uncomment the following code to handle statistics and lifecycle hooks
// onMounted(async () => {
//   await statisticStore.getHomePageStatistic();
// });

// onMounted(() => {
//   statisticEvent.subscribe(statisticName.getHomePageStatistic, seeHomePageStatistic);
//   show.value = true;
// });

// onBeforeUnmount(() => {
//   statisticEvent.unsubscribe(statisticName.getHomePageStatistic, seeHomePageStatistic);
// });
</script>

<style lang="scss" scoped></style>
