<template>
  <div v-if="show" class="anim">
    <div class="blob" />
  </div>
</template>

<script setup>
const props = defineProps({
  show: Boolean,
});
</script>

<style scoped lang="scss">
.anim {
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  width: 100%;
  height: 100%;
  background: $loader-bg-color;
}

.blob {
  background: black;
  height: 22px;
  background-repeat: no-repeat;
  background-size: contain !important;
  width: 100px;
  background: url("public/images/logo.svg");
  background-repeat: no-repeat !important;
  transform: scale(1);
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% {
    transform: scale(0.8);
  }
  70% {
    transform: scale(1);
  }
  100% {
    transform: scale(0.8);
  }
}
</style>
