<template>
  <div>
    <TitleBar page="FAQ" variant="one" />
    <FAQ />
  </div>
</template>

<script>
import { useHead } from "@unhead/vue";

export default {
  name: "FAQPage",
  data() {
    useHead({ title: "GTG 24" });
    return {};
  },
  mounted() {},
};
</script>
<style lang="scss"></style>
