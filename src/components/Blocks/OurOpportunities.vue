<template>
  <div class="our-opportunities">
    <ContainerComponent>
      <div class="our-opportunities__title">
        <p>{{ $t("OurOpportunitiesHeader") }}</p>
        <h2>{{ $t("OurOpportunitiesText") }}</h2>
      </div>
      <BlogSlider />
    </ContainerComponent>
  </div>
</template>

<script setup>
import BlogSlider from "~/src/components/Blog/BlogSlider.vue";
import ContainerComponent from "~/src/components/Reusable/ContainerComponent.vue";
</script>

<style lang="scss" scoped>
.our-opportunities {
  margin-top: 120px;
  margin-bottom: 140px;
  @media (max-width: 768px) {
    margin-top: 80px;
    margin-bottom: 80px;
  }

  @media (max-width: 375px) {
    margin-bottom: 80px;
  }

  &__title {
    text-align: center;
    margin-bottom: 55px;
    @media (max-width: 768px) {
      margin-bottom: 24px;
    }

    p {
      color: $green;
      font-size: 14px;
      text-transform: uppercase;
      font-family: $font-main;
      font-weight: 700;
      line-height: 140%;
      @media (max-width: 768px) {
        font-size: 12px;
        font-weight: 500;
        margin-bottom: 4px;
      }
    }

    h2 {
      font-family: $font-main;
      font-size: 41px;
      font-weight: 700;
      line-height: 140%;
      @media (max-width: 768px) {
        font-size: 21px;
        font-weight: 600;
      }
    }
  }
}

.list {
  @include flex(row, space-between, flex-start);
  flex-wrap: wrap;
  @media (max-width: 991px) {
    @include flex(column, center, center);
    gap: 30px;
  }

  &__card {
    width: 394px;
    min-height: 380px;
    border-radius: 20px;
    background: $white;
    box-shadow: 0px 0px 14px 0px rgba(0, 0, 0, 0.15);
    padding: 20px 40px;
    @media (max-width: 1402px) {
      width: 49%;
      &:last-child {
        width: 100%;
        margin-top: 20px;
        min-height: 250px;
      }
    }
    @media (max-width: 991px) {
      width: 100%;
      min-height: 250px;
      margin-top: 0;
    }
  }

  &__card__title {
    margin: 14px 0;
    font-family: $font-main;
    font-size: 21px;
    font-weight: 600;
    line-height: 170%;
    @media (max-width: 991px) {
      font-size: 16px;
    }
  }

  &__card__list li {
    position: relative;
    font-family: $font-main;
    font-size: 14px;
    font-weight: 400;
    line-height: 170%;
    padding-left: 10px;
    @media (max-width: 991px) {
      font-size: 13px;
      padding-left: 15px;
    }
  }

  &__card__list li::before {
    content: "";
    position: absolute;
    left: 0;
    top: 10px;
    display: block;
    width: 2px;
    height: 2px;
    background-color: $black;
    border-radius: 100%;
    @media (max-width: 991px) {
      left: 5px;
    }
  }
}
</style>
