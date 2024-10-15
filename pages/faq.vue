<template>
  <div>
    <TitleBar page="FAQ" variant="one" />
    <FAQ />
  </div>
</template>

<script setup>
import { useHead } from "@unhead/vue";

useHead({ title: "GTG 24" });
</script>

<style lang="scss" scoped></style>
