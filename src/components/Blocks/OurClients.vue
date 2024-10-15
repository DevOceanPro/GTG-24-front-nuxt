<template>
  <div class="our-clients">
    <ContainerComponent>
      <div class="content">
        <div class="content__info">
          <p class="content__pre-title">
            {{ $t("Pioneers") }}
          </p>
          <h2 class="content__title">
            {{ $t("PioneersDesc") }}
          </h2>
          <ul class="content__list">
            <li class="content__item">
              <h4>
                <span>{{ homePageStatistic?.companiesCount || 123 }}</span>
                <span>{{ $t("companies") }}</span>
              </h4>
              <p>
                {{ $t("PioneersCompany") }}
              </p>
            </li>
            <li class="content__item">
              <h4>
                <span>{{ homePageStatistic?.customerCount || 456 }}</span>
                <span>{{ $t("ClientsVerb") }}</span>
              </h4>
              <p>
                {{ $t("PioneersClients") }}
              </p>
            </li>
          </ul>
        </div>
        <div class="content__map">
          <NuxtImg src="/images/home/map.svg" alt="map" />
        </div>
      </div>
    </ContainerComponent>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useI18n } from "vue-i18n";

// const homePageStatistic = ref(null); // Замінити на рельну логіку
// закоментовано для переноса
const homePageStatistic = ref({
  companiesCount: 123, // захардкожені дані
  customerCount: 456, // захардкожені дані
});

const { t } = useI18n();
</script>

<style lang="scss" scoped>
.our-clients {
  padding: 80px 0;
  background-image: url(public/images/our-clients-bg.png);
  background-size: cover;
  background-position: bottom;
  @media (max-width: 991px) {
    padding: 70px 0;
    background: linear-gradient(
        0deg,
        rgba(0, 0, 0, 0.3) 0%,
        rgba(0, 0, 0, 0.3) 100%
      )
      url(public/images/our-clients-bg-mobile.jfif) center;
    background-size: cover;
  }
}

.content {
  @include flex(row, space-between, center);
  gap: 173px;
  @media (max-width: 991px) {
    @include flex(column, center, center);
    gap: 20px;
  }

  &__info {
    width: 575px;
    @media (max-width: 991px) {
      width: 100%;
      text-align: center;
    }
  }

  &__map {
    @media (max-width: 991px) {
      width: 231px;
    }
  }

  &__pre-title {
    color: $green;
    font-family: $font-main;
    font-weight: 700;
    line-height: 27px;
    margin-bottom: 6px;
    @media (max-width: 991px) {
      color: #afe99b;
      text-align: center;
      margin-bottom: 2px;
    }
  }

  &__title {
    color: #35404e;
    font-family: $font-main;
    font-size: 37px;
    font-weight: 700;
    line-height: 54.02px;
    margin-bottom: 90px;
    @media (max-width: 991px) {
      color: $white;
      font-size: 24px;
      line-height: 44px;
      text-align: center;
      margin-bottom: 32px;
    }
  }

  &__list {
    @include flex(row, space-between, center);
    gap: 81px;
    @media (max-width: 991px) {
      @include flex(column, center, center);
      gap: 60px;
    }
  }

  &__item {
    h4 {
      margin-bottom: 20px;

      span:first-child {
        color: $green;
        font-family: $font-main;
        font-size: 37px;
        font-style: italic;
        font-weight: 600;
        line-height: 37px;
        margin-right: 8px;
        @media (max-width: 991px) {
          color: $white;
        }
      }

      span:last-child {
        color: $black;
        font-family: $font-main;
        font-size: 20px;
        font-style: italic;
        font-weight: 700;
        line-height: 33.75px;
        @media (max-width: 991px) {
          color: $white;
        }
      }
    }

    p {
      width: 247px;
      color: #35404e;
      font-family: $font-main;
      font-size: 15px;
      font-weight: 400;
      line-height: 25px;
      @media (max-width: 991px) {
        color: $white;
      }
    }
  }
}
</style>
