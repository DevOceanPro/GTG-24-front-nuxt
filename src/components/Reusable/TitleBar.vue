<template>
  <div class="title-bar">
    <div class="overlay" />
    <NuxtImg
      v-if="variant === 'one'"
      src="/images/about-us/title-bar.jpg"
      alt="image"
    />
    <NuxtImg
      v-else-if="variant === 'two'"
      src="/images/contact-us.png"
      alt="image"
    />
    <NuxtImg
      v-else-if="variant === 'three'"
      src="/images/terms-of-use.png"
      alt="image"
    />
    <NuxtImg v-else src="/images/impressum.png" alt="image" />
    <div class="container">
      <h4 class="title-bar__title">{{ page }}</h4>
      <div class="title-bar__way">
        <NuxtLink :to="{ name: 'home' }">{{ $t("HomePage") }}</NuxtLink>
        <i class="icon-chevron-top" />
        <p>{{ page }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TitleBar",
  props: {
    page: {
      type: String,
      required: true,
    },
    variant: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.title-bar {
  position: relative;
  @include flex(column, center, center);
  padding: 47.5px 40px;
  text-align: center;
  overflow: hidden;
  @media (max-width: 991px) {
    padding: 28px 40px;
  }

  img {
    position: absolute;
    top: -280px;
    width: 100%;
    height: auto;
    @media (max-width: 991px) {
      top: -30px;
    }
  }
  .overlay {
    z-index: 1;
    position: absolute;
    left: 0;
    top: 0;
    display: block;
    width: 100%;
    height: 100%;
    background-color: $black;
    opacity: 0.3;
  }
  &__title {
    position: relative;
    z-index: 2;
    color: $white;
    font-family: $font-main;
    font-size: 24px;
    font-weight: 400;
    line-height: 36px;
    margin-bottom: 8px;
    @media (max-width: 991px) {
      font-size: 20px;
    }
  }
  &__way {
    position: relative;
    z-index: 2;
    @include flex(row, center, center);
    i {
      display: block;
      color: $white;
      font-size: 6px;
      margin: 0 20px;
      transform: rotate(90deg);
      @media (max-width: 991px) {
        font-size: 5px;
      }
    }
    a,
    p {
      display: block;
      color: $white;
      font-family: $font-main;
      font-size: 14px;
      font-weight: 400;
      line-height: 18px;
      @media (max-width: 991px) {
        font-size: 12px;
      }
    }
  }
}
</style>
