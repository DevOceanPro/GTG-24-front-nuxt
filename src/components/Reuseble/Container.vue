<template>
  <div class="container">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Container",
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/main.scss";

.container {
  max-width: $container-max-width;
  margin-left: auto;
  margin-right: auto;
  padding-left: 50px;
  padding-right: 50px;

  @media (max-width: 991px) {
    padding-left: 10px;
    padding-right: 10px;
  }
}
</style>
