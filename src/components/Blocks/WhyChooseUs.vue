<template>
  <div class="why-choose-us">
    <div class="why-choose-us__bg" />
    <ContainerComponent>
      <div class="content">
        <div class="content-left">
          <div class="content-left__title">
            <p>{{ $t("WhyWeeChoose") }}</p>
            <h2>{{ $t("WhyWeeChooseDesc") }}</h2>
          </div>
          <ul class="content-left__list">
            <li class="content-left__item">
              <img class="icon" src="@/assets/home/energy.svg" alt="energy" />
              <div class="info">
                <p class="info__title">{{ $t("WhyWeeChooseUl1") }}</p>
                <p class="info__text">
                  {{ $t("WhyWeeChooseUl11") }}
                </p>
              </div>
            </li>
            <li class="content-left__item">
              <img
                class="icon"
                src="@/assets/home/technical.svg"
                alt="technical"
              />
              <div class="info">
                <p class="info__title">{{ $t("WhyWeeChooseUl22") }}</p>
                <p class="info__text">
                  {{ $t("WhyWeeChooseUl2") }}
                </p>
              </div>
            </li>
          </ul>
          <div class="content-left__statistics">
            <h4>{{ $t("Statistics") }}</h4>
            <ul class="list">
              <li class="list__item">
                <div class="circular-progress-bar">
                  <svg class="progress-ring" width="120" height="120">
                    <circle
                      class="progress-ring-circle-default"
                      :stroke-dasharray="circumference"
                      :stroke-width="strokeWidth"
                      :r="radius"
                      cx="60"
                      cy="60"
                    />
                    <circle
                      class="progress-ring-circle"
                      :stroke-dasharray="circumference"
                      :stroke-dashoffset="
                        progressOffset(homePageStatistic?.projectsCompleted)
                      "
                      :stroke-width="strokeWidth"
                      :r="radius"
                      cx="60"
                      cy="60"
                    />
                  </svg>
                  <span class="progress-percentage"
                    >{{ homePageStatistic?.projectsCompleted }}%</span
                  >
                </div>
                <p>{{ $t("Projects") }}</p>
                <p>{{ $t("Completed") }}</p>
              </li>
              <li class="list__item">
                <div class="circular-progress-bar">
                  <svg class="progress-ring" width="120" height="120">
                    <circle
                      class="progress-ring-circle-default"
                      :stroke-dasharray="circumference"
                      :stroke-width="strokeWidth"
                      :r="radius"
                      cx="60"
                      cy="60"
                    />
                    <circle
                      class="progress-ring-circle"
                      :stroke-dasharray="circumference"
                      :stroke-dashoffset="
                        progressOffset(homePageStatistic?.clientsSatisfied)
                      "
                      :stroke-width="strokeWidth"
                      :r="radius"
                      cx="60"
                      cy="60"
                    />
                  </svg>
                  <span class="progress-percentage"
                    >{{ homePageStatistic?.clientsSatisfied }}%</span
                  >
                </div>
                <p>{{ $t("Clients") }}</p>
                <p>{{ $t("Satisfied") }}</p>
              </li>
              <li class="list__item">
                <div class="circular-progress-bar">
                  <svg class="progress-ring" width="120" height="120">
                    <circle
                      class="progress-ring-circle-default"
                      :stroke-dasharray="circumference"
                      :stroke-width="strokeWidth"
                      :r="radius"
                      cx="60"
                      cy="60"
                    />
                    <circle
                      class="progress-ring-circle"
                      :stroke-dasharray="circumference"
                      :stroke-dashoffset="
                        progressOffset(homePageStatistic?.kilowatts)
                      "
                      :stroke-width="strokeWidth"
                      :r="radius"
                      cx="60"
                      cy="60"
                    />
                  </svg>
                  <span class="progress-percentage"
                    >{{ homePageStatistic?.kilowatts }}kl</span
                  >
                </div>
                <p>{{ $t("NumAndKilowatts") }}</p>
                <p>{{ $t("ProvidedPeople") }}</p>
              </li>
            </ul>
            <p>{{ $t("StatisticsDescr") }}</p>
          </div>
        </div>
        <div class="content-right">
          <p>{{ $t("belive") }}</p>
          <form class="form" @submit.prevent="handleSubmit">
            <img
              class="form-bg-element"
              src="@/assets/home/form-bg.svg"
              alt="bg-element"
            />
            <div class="form__title">{{ $t("ContactUs") }}</div>
            <div class="form__input">
              <label for="name">{{ $t("YourName") }} *</label>
              <input
                id="name"
                v-model="formData.name"
                type="text"
                :placeholder="$t('YourName')"
                required
              />
            </div>
            <div class="form__input">
              <label for="email">{{ $t("EmailAddress") }}</label>
              <input
                id="email"
                v-model="formData.email"
                type="email"
                :placeholder="$t('YourEmail')"
                required
              />
            </div>
            <div class="form__textarea">
              <label for="message">{{ $t("Message") }}</label>
              <textarea
                id="message"
                v-model="formData.body"
                required
                maxlength="1500"
              />
            </div>
            <CustomButton
              class="form__button"
              type="submit"
              name="green"
              :text="$t('SengMessage')"
            />
          </form>
          <div class="statistics-mobile">
            <h4>{{ $t("Statistics") }}</h4>
            <ul class="list">
              <li class="list__item">
                <div class="circular-progress-bar">
                  <svg class="progress-ring" width="89" height="89">
                    <circle
                      class="progress-ring-circle-default"
                      :stroke-dasharray="circumferenceMobile"
                      :stroke-width="strokeWidth"
                      :r="radiusMobile"
                      cx="40"
                      cy="40"
                    />
                    <circle
                      class="progress-ring-circle"
                      :stroke-dasharray="circumferenceMobile"
                      :stroke-dashoffset="
                        progressOffset(homePageStatistic?.projectsCompleted)
                      "
                      :stroke-width="strokeWidth"
                      :r="radiusMobile"
                      cx="40"
                      cy="40"
                    />
                  </svg>
                  <span
                    class="progress-percentage"
                    :style="{
                      fontSize:
                        homePageStatistic?.projectsCompleted.length < 5
                          ? '20px'
                          : '12px',
                    }"
                    >{{ homePageStatistic?.projectsCompleted }}%</span
                  >
                </div>
                <p>{{ $t("Projects") }}</p>
                <p>{{ $t("Completed") }}</p>
              </li>
              <li class="list__item">
                <div class="circular-progress-bar">
                  <svg class="progress-ring" width="89" height="89">
                    <circle
                      class="progress-ring-circle-default"
                      :stroke-dasharray="circumferenceMobile"
                      :stroke-width="strokeWidth"
                      :r="radiusMobile"
                      cx="40"
                      cy="40"
                    />
                    <circle
                      class="progress-ring-circle"
                      :stroke-dasharray="circumferenceMobile"
                      :stroke-dashoffset="
                        progressOffset(homePageStatistic?.clientsSatisfied)
                      "
                      :stroke-width="strokeWidth"
                      :r="radiusMobile"
                      cx="40"
                      cy="40"
                    />
                  </svg>
                  <span
                    class="progress-percentage"
                    :style="{
                      fontSize:
                        homePageStatistic?.clientsSatisfied.length < 5
                          ? '20px'
                          : '12px',
                    }"
                    >{{ homePageStatistic?.clientsSatisfied }}%</span
                  >
                </div>
                <p>{{ $t("Clients") }}</p>
                <p>{{ $t("Satisfied") }}</p>
              </li>
              <li class="list__item">
                <div class="circular-progress-bar">
                  <svg class="progress-ring" width="89" height="89">
                    <circle
                      class="progress-ring-circle-default"
                      :stroke-dasharray="circumferenceMobile"
                      :stroke-width="strokeWidth"
                      :r="radiusMobile"
                      cx="40"
                      cy="40"
                    />
                    <circle
                      class="progress-ring-circle"
                      :stroke-dasharray="circumferenceMobile"
                      :stroke-dashoffset="
                        progressOffset(homePageStatistic?.kilowatts)
                      "
                      :stroke-width="strokeWidth"
                      :r="radiusMobile"
                      cx="40"
                      cy="40"
                    />
                  </svg>
                  <span
                    class="progress-percentage"
                    :style="{
                      fontSize:
                        homePageStatistic?.kilowatts.length < 5
                          ? '20px'
                          : '16px',
                    }"
                    >{{ homePageStatistic?.kilowatts }}kl</span
                  >
                </div>
                <p>{{ $t("NumAndKilowatts") }}</p>
                <p>{{ $t("ProvidedPeople") }}</p>
              </li>
            </ul>
            <p>{{ $t("StatisticsDescr") }}</p>
          </div>
        </div>
      </div>
    </ContainerComponent>
  </div>
</template>

<script setup>
import CustomButton from "~/src/components/Reusable/CustomButton.vue";
import ContainerComponent from "~/src/components/Reusable/ContainerComponent.vue";
// import useContactUs from "@/stores/contactUsStore"; // закоментовано поки стор не доступний

const props = defineProps(["homePageStatistic"]);

// const useContactUs = useContactUs(); // закоментовано поки стор не доступний
const formData = reactive({
  name: "",
  email: "",
  body: "",
  recaptcha_token: "",
});

const radius = computed(() => 55);
const radiusMobile = computed(() => 37);
const strokeWidth = computed(() => 5);
const circumference = computed(() => 2 * Math.PI * radius.value);
const circumferenceMobile = computed(() => 2 * Math.PI * radiusMobile.value);

const progressOffset = (progress) => {
  const progressPercentage = Number(progress) / 100;
  return circumference.value * (1 - progressPercentage);
};

const handleSubmit = async () => {
  // formData.recaptcha_token = await this.$recaptcha() // Закомментировано
  // useContactUs.sendMessage(formData); // Закомментировано
  console.log(formData); // Заглушка
  formData.name = "";
  formData.email = "";
  formData.body = "";
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/main.scss";

.why-choose-us {
  position: relative;
  padding-top: 40px;
  padding-bottom: 124px;
  @media (max-width: 991px) {
    padding-top: 20px;
    padding-bottom: 80px;
  }
  @media (max-width: 768px) {
    padding-top: 0;
  }

  &__bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 56%;
    background: #1e1e22;
    @media (max-width: 991px) {
      height: 33%;
    }
  }
}

.content {
  @include flex(row, space-between, start);
  position: relative;
  z-index: 2;
  @media (max-width: 991px) {
    @include flex(column, center, start);
  }
}

.content-left {
  width: 556px;
  @media (max-width: 991px) {
    width: 100%;
  }

  &__title {
    margin-bottom: 45px;
    @media (max-width: 991px) {
      text-align: center;
      margin-bottom: 32px;
    }

    p {
      color: $green;
      font-family: $font-main;
      font-size: 14px;
      font-weight: 700;
      line-height: 140%;
      text-transform: uppercase;
      @media (max-width: 991px) {
        font-size: 12px;
        font-weight: 500;
      }
    }

    h2 {
      color: $white;
      font-family: $font-main;
      font-size: 36px;
      font-weight: 700;
      line-height: 140%;
      @media (max-width: 991px) {
        font-size: 21px;
        font-weight: 600;
      }
    }
  }

  &__list {
    @include flex(column, flex-start, flex-start);
    gap: 50px;
    margin-bottom: 123px;
    @media (max-width: 991px) {
      gap: 24px;
      margin-bottom: 32px;
    }
  }

  &__item {
    @include flex(row, flex-start, flex-start);
    gap: 20px;

    img {
      @media (max-width: 991px) {
        width: 40px;
        height: 40px;
      }
    }

    .info {
      @include flex(column, flex-start, flex-start);
      gap: 14px;

      &__title {
        color: $white;
        font-family: $font-main;
        font-size: 18px;
        font-weight: 700;
        line-height: 150%;
        @media (max-width: 991px) {
          font-size: 16px;
        }
      }

      &__text {
        color: #92939e;
        font-family: $font-main;
        font-weight: 500;
        line-height: 170%;
        @media (max-width: 991px) {
          font-size: 13px;
        }
      }
    }
  }

  &__statistics {
    @media (max-width: 991px) {
      display: none;
    }

    h4 {
      color: #35404e;
      font-family: $font-main;
      font-size: 26px;
      font-weight: 700;
      line-height: 140%;
      margin-bottom: 24px;
    }

    .list {
      @include flex(row, flex-start, flex-start);
      gap: 60px;
      margin-bottom: 24px;

      &__item {
        @include flex(column, center, center);
        gap: 16px;
        text-align: center;

        .circular-progress-bar {
          position: relative;
          display: inline-block;
          text-align: center;
        }

        .progress-ring {
          transform: rotate(15deg);
        }

        .progress-ring-circle {
          fill: transparent;
          stroke: $green;
        }

        .progress-ring-circle-default {
          fill: transparent;
          stroke: #f6f6f6;
        }

        .progress-percentage {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          color: #000;
          font-family: $font-main;
          font-size: 20px;
          font-weight: 700;
          line-height: 32.976px;
        }

        p {
          color: #747474;
          text-align: center;
          font-family: $font-main;
          font-size: 17px;
          font-weight: 600;
          line-height: 32.976px;

          &:last-child {
            margin-top: -10px;
          }
        }
      }
    }

    p {
      color: $black;
      text-align: center;
      font-family: $font-main;
      font-size: 20px;
      font-weight: 500;
      line-height: 32.976px;
    }
  }
}

.content-right {
  width: 532px;
  @media (max-width: 991px) {
    width: 100%;
  }

  p {
    color: $grey-light;
    font-family: $font-main;
    font-size: 16.5px;
    font-weight: 400;
    line-height: 29.7px;
    letter-spacing: -0.2px;
    margin-top: 31px;
    margin-bottom: 45px;
    @media (max-width: 991px) {
      margin-top: 0;
      font-size: 14px;
      line-height: 170%;
      margin-bottom: 32px;
    }
  }

  .form {
    position: relative;
    padding: 56px 60px;
    border-radius: 5px;
    background: #fff;
    box-shadow: 0px 1px 72px 0px rgba(0, 0, 0, 0.08);
    @media (max-width: 991px) {
      box-shadow: none;
      border-radius: 0;
      padding: 80px 16px 2px 16px;
    }

    &-bg-element {
      position: absolute;
      bottom: 0;
      right: 0;
      @media (max-width: 991px) {
        display: none;
      }
    }

    &__title {
      color: #151515;
      text-align: center;
      font-family: $font-main;
      font-size: 26px;
      font-weight: 700;
      line-height: 38.4px;
      margin-bottom: 24px;
      @media (max-width: 991px) {
        font-size: 24px;
        margin-bottom: 16px;
      }
    }

    &__input {
      @include flex(column, flex-start, flex-start);
      gap: 5px;

      &:not(:last-child) {
        margin-bottom: 16px;
      }

      label {
        color: #434343;
        font-family: $font-main;
        font-size: 14px;
        font-weight: 500;
        line-height: 150%;
        @media (max-width: 991px) {
          font-size: 12px;
        }
      }

      input {
        font-family: $font-main;
        width: 100%;
        padding: 20px;
        border-radius: 5px;
        border: 2px solid #f6f6f6;
        background: #f6f6f6;
        @media (max-width: 991px) {
          padding: 10px 20px;
        }
      }

      input::placeholder {
        color: #bdbdbd;
        font-family: $font-main;
        font-size: 14px;
        font-style: normal;
        font-weight: 500;
        line-height: 170%;
      }
    }

    &__textarea {
      @include flex(column, flex-start, flex-start);
      gap: 5px;
      margin-bottom: 40px;
      @media (max-width: 991px) {
        margin-bottom: 32px;
      }

      label {
        color: #434343;
        font-family: $font-main;
        font-size: 14px;
        font-weight: 500;
        line-height: 150%;
        @media (max-width: 991px) {
          font-size: 12px;
        }
      }

      textarea {
        font-family: $font-main;
        width: 100%;
        border-radius: 5px;
        border: 2px solid #f6f6f6;
        background: #f6f6f6;
        height: 184px;
        padding: 20px;
        resize: none;
      }
    }

    &__button {
      @media (max-width: 991px) {
        width: 100%;
        font-size: 12px;
      }
    }
  }

  .statistics-mobile {
    display: none;
    @media (max-width: 991px) {
      display: block;
      text-align: center;
      @include flex(column, center, center);
      margin-top: 82px;
    }

    h4 {
      color: #35404e;
      font-family: $font-main;
      font-size: 20px;
      font-weight: 700;
      line-height: 140%;
      margin-bottom: 16px;
    }

    .list {
      @include flex(row, flex-start, flex-start);
      gap: 31px;
      margin-bottom: 24px;

      &__item {
        @include flex(column, flex-start, center);
        gap: 16px;
        text-align: center;

        .circular-progress-bar {
          position: relative;
          display: inline-block;
          text-align: center;
          width: 79px;
          height: 79px;
        }

        .progress-ring {
          transform: rotate(15deg);
        }

        .progress-ring-circle {
          fill: transparent;
          stroke: $green;
        }

        .progress-ring-circle-default {
          fill: transparent;
          stroke: #f6f6f6;
        }

        .progress-percentage {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          color: #000;
          font-family: $font-main;
          font-weight: 700;
          line-height: 32.976px;
        }

        p {
          color: #151515;
          text-align: center;
          font-family: $font-main;
          font-size: 12px;
          font-style: normal;
          font-weight: 500;
          line-height: 15px;
          margin: 0;
        }
      }
    }

    p {
      color: $black;
      text-align: center;
      font-family: $font-main;
      font-size: 14px;
      font-weight: 600;
      line-height: 32.976px;
    }
  }
}
</style>
