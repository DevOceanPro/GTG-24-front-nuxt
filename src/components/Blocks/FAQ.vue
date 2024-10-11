<template>
  <div class="faq">
    <ContainerComponent>
      <h4 class="faq__title">{{ $t("GeneralQuestions") }}</h4>
      <ul class="faq__columns">
        <li class="faq__col">
          <ul class="faq__list">
            <li
              class="faq__item"
              :class="{ active: generalQuestions[0].active }"
            >
              <div
                class="faq__item__title"
                @click="toggleClass(generalQuestions, 0)"
              >
                <h5>{{ $t("q1") }}</h5>
                <i class="icon-chevron-down" />
              </div>
              <p
                class="faq__item__text"
                :class="{ active2: generalQuestions[0].active }"
              >
                {{ $t("a1") }}
              </p>
            </li>
            <li
              class="faq__item"
              :class="{ active: generalQuestions[1].active }"
            >
              <div
                class="faq__item__title"
                @click="toggleClass(generalQuestions, 1)"
              >
                <h5>{{ $t("q2") }}</h5>
                <i class="icon-chevron-down" />
              </div>
              <p
                class="faq__item__text"
                :class="{ active2: generalQuestions[1].active }"
              >
                {{ $t("a2") }}
              </p>
            </li>
            <li
              class="faq__item"
              :class="{ active: generalQuestions[2].active }"
            >
              <div
                class="faq__item__title"
                @click="toggleClass(generalQuestions, 2)"
              >
                <h5>{{ $t("q3") }}</h5>
                <i class="icon-chevron-down" />
              </div>
              <p
                class="faq__item__text"
                :class="{ active2: generalQuestions[2].active }"
              >
                {{ $t("a3") }}
              </p>
            </li>
            <li
              class="faq__item"
              :class="{ active: generalQuestions[3].active }"
            >
              <div
                class="faq__item__title"
                @click="toggleClass(generalQuestions, 3)"
              >
                <h5>{{ $t("q4") }}</h5>
                <i class="icon-chevron-down" />
              </div>
              <p
                class="faq__item__text"
                :class="{ active2: generalQuestions[3].active }"
              >
                {{ $t("a4") }}
              </p>
            </li>
            <li
              class="faq__item"
              :class="{ active: generalQuestions[4].active }"
            >
              <div
                class="faq__item__title"
                @click="toggleClass(generalQuestions, 4)"
              >
                <h5>{{ $t("q5") }}</h5>
                <i class="icon-chevron-down" />
              </div>
              <p
                class="faq__item__text"
                :class="{ active2: generalQuestions[4].active }"
              >
                {{ $t("a5") }}
              </p>
            </li>
          </ul>
        </li>
        <li class="faq__col">
          <ul class="faq__list">
            <li
              class="faq__item"
              :class="{ active: generalQuestions[5].active }"
            >
              <div
                class="faq__item__title"
                @click="toggleClass(generalQuestions, 5)"
              >
                <h5>{{ $t("q6") }}</h5>
                <i class="icon-chevron-down" />
              </div>
              <p
                class="faq__item__text"
                :class="{ active2: generalQuestions[5].active }"
              >
                {{ $t("a6") }}
              </p>
            </li>
          </ul>
        </li>
      </ul>
    </ContainerComponent>
  </div>
</template>

<script>
import ContainerComponent from "~/src/components/Reusable/ContainerComponent.vue";

export default {
  name: "FAQ",
  components: { ContainerComponent },
  data() {
    return {
      generalQuestions: [
        { active: false },
        { active: false },
        { active: false },
        { active: false },
        { active: false },
        { active: false },
        { active: false },
      ],
    };
  },
  methods: {
    toggleClass(section, index) {
      section[index].active = !section[index].active;
    },
  },
};
</script>

<style lang="scss" scoped>
.faq {
  padding-top: 72px;
  padding-bottom: 187px;
  @media (max-width: 991px) {
    padding-top: 40px;
    padding-bottom: 80px;
  }
  &__columns {
    @include flex(row, space-between, flex-start);
    gap: 100px;
    width: 100%;
    @media (max-width: 991px) {
      @include flex(column, space-between, center);
      gap: 20px;
    }
  }

  &__col {
    width: 100%;
  }
  &__title {
    color: $black;
    font-family: $font-main;
    font-size: 24px;
    font-weight: 600;
    line-height: 130%;
    margin-bottom: 20px;
    @media (max-width: 991px) {
      font-size: 20px;
    }
  }
  &__list {
    @include flex(column, center, center);
    gap: 20px;
    width: 100%;
  }
  &__item {
    width: 100%;
    //height: 66px;
    padding: 20px;
    border-radius: 10px;
    border: 1px solid $green;
    overflow: hidden;
    @include transition;
    @media (max-width: 991px) {
      height: 64px;
    }
    &__title {
      @include flex(row, space-between, flex-start);
      @media (max-width: 991px) {
      }
      h5 {
        color: $black;
        font-family: $font-main;
        font-size: 20px;
        font-weight: 500;
        line-height: 130%;
        @media (max-width: 991px) {
          font-size: 14px;
        }
      }
      i {
        @include transition;
        font-size: 20px;
        cursor: pointer;
      }
    }
    &__text {
      margin-top: 16px;
      display: none;
      color: $black;
      font-family: $font-main;
      font-weight: 400;
      line-height: 150%;
      @media (max-width: 991px) {
        margin-top: 19px;
        font-size: 12px;
      }
    }
  }
}
.active {
  height: fit-content;
}
.active2 {
  display: block;
}
.faq__item.active i {
  transform: rotate(-180deg);
}
@media (min-width: 990px) {
  .faq__col {
    width: 50%;
  }
}
</style>
