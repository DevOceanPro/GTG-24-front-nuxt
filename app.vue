<template>
  <NuxtLayout>
    <HeaderMenu />
    <div>
      <NuxtPage />
    </div>
    <FooterMenu />
  </NuxtLayout>
</template>

<script setup lang="ts">
import HeaderMenu from "~/src/components/Reusable/HeaderMenu.vue";
import FooterMenu from "~/src/components/Reusable/FooterMenu.vue";
</script>
