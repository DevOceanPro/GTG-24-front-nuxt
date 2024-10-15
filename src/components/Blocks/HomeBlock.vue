<template>
  <div class="home-block">
    <ContainerComponent>
      <h1 class="home-block__title" v-html="$t(`HomeTitle`)" />
      <div class="content">
        <div class="content__info">
          <p class="content__info__text">
            {{ $t("HomeDescr") }}
          </p>
          <div class="content__info__buttons">
            <CustomButton
              type="button"
              name="green"
              :text="$t('FindCompany')"
              @click="switchToOffersList"
            />
            <CustomButton
              type="button"
              name="green-outline"
              :text="$t('FindClient')"
              @click="switchToLogin(1)"
            />
          </div>
        </div>
        <div class="content__image">
          <NuxtImg src="/images/home/home-logo.svg" alt="home" />
          <div class="content__image-text">
            <h3 class="content__image-text--title">
              {{ $t("firstBlockLogoTitle") }}
            </h3>
            <p class="content__image-text--subtitle">
              {{ $t("firstBlockLogoSubtitle") }}
            </p>
          </div>
        </div>
      </div>
    </ContainerComponent>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

function switchToLogin(value) {
  router.push({ path: "/register", query: { switchValue: value } });
}

function switchToOffersList() {
  router.push({ path: "/user-request-send" });
}
</script>

<style lang="scss" scoped>
.home-block {
  margin-top: 140px;

  @media (max-width: 991px) {
    margin-top: 24px;
  }

  &__title {
    font-family: $font-main;
    font-size: 41px;
    font-weight: 700;
    line-height: 140%;
    @media (min-width: 991px) {
      max-width: 60%;
    }
    @media (max-width: 991px) {
      font-size: 36px;
    }
    @media (max-width: 930px) {
      font-size: 24px;
      text-align: center;
      margin-bottom: 15px;
    }
  }
}

.content {
  @include flex(row, space-between, center);
  width: 100%;
  @media (max-width: 930px) {
    @include flex(column, center, center);
    gap: 50px;
    text-align: center;
  }

  &__info {
    width: 55%;
    @media (max-width: 991px) {
      width: 50%;
    }
    @media (max-width: 930px) {
      width: 100%;
    }

    &__text {
      font-family: $font-main;
      font-size: 18px;
      font-weight: 400;
      line-height: 170%;
      margin-bottom: 56px;
      @media (max-width: 991px) {
        font-size: 16px;
        margin-bottom: 30px;
      }
      @media (max-width: 930px) {
        font-size: 14px;
      }
    }

    &__buttons {
      @include flex(row, flex-start, center);
      flex-wrap: wrap;
      gap: 24px;
      @media (max-width: 991px) {
        gap: 15px;
      }
      @media (max-width: 930px) {
        @include flex(column, center, center);
      }
    }
  }

  &__image {
    width: 45%;
    position: relative;

    &-text {
      position: absolute;
      top: 40px;
      left: 0px;
      transform: rotate(-14deg);
      transform-origin: center;

      &--title {
        font-family: "Water Brush", cursive;
        font-weight: 400;
        font-style: normal;
        font-size: 32px;
        font-weight: 400;
        line-height: 31.16px;
        text-align: center;
        color: #4ea62f;
      }

      &--subtitle {
        font-family: Montserrat;
        font-size: 16px;
        font-weight: 500;
        line-height: 19.5px;
        text-align: left;
        color: #1e1e1e;
      }
    }

    @media (max-width: 991px) {
      width: 50%;
    }
    @media (max-width: 930px) {
      width: 100%;
    }
  }

  @media (min-width: 370px) {
    .content__image-text {
      &--title {
        font-size: 30px;
      }

      &--subtitle {
        font-size: 14px;
      }
    }
  }

  @media (min-width: 500px) {
    .content__image-text {
      left: 40px;

      &--title {
        font-size: 30px;
      }

      &--subtitle {
        font-size: 14px;
      }
    }
  }

  @media (min-width: 600px) {
    .content__image-text {
      left: 70px;
      top: 70px;

      &--title {
        font-size: 32px;
      }

      &--subtitle {
        font-size: 16px;
      }
    }
  }

  @media (min-width: 700px) {
    .content__image-text {
      left: 100px;
      top: 90px;
    }
  }

  @media (min-width: 800px) {
    .content__image-text {
      left: 154px;
      top: 90px;
    }
  }

  @media (min-width: 931px) {
    .content__image-text {
      left: 0px;
      top: 40px;
    }
  }

  @media (min-width: 1100px) {
    .content__image-text {
      left: 0px;
      top: 60px;
    }
  }

  @media (min-width: 1350px) {
    .content__image-text {
      left: 50px;
      top: 80px;
    }
  }
}
</style>
