<template>
  <div class="faq">
    <ContainerComponent>
      <h4 class="faq__title">{{ $t("GeneralQuestions") }}</h4>
      <ul class="faq__columns">
        <li class="faq__col">
          <ul class="faq__list">
            <li
              v-for="(question, index) in generalQuestions.slice(0, 5)"
              :key="index"
              class="faq__item"
              :class="{ active: question.active }"
            >
              <div
                class="faq__item__title"
                :aria-expanded="question.active"
                tabindex="0"
                role="button"
                @click="toggleClass(index)"
              >
                <h5>{{ $t(`q${index + 1}`) }}</h5>
                <i class="icon-chevron-down" />
              </div>
              <p class="faq__item__text" :class="{ active2: question.active }">
                {{ $t(`a${index + 1}`) }}
              </p>
            </li>
          </ul>
        </li>
        <li class="faq__col">
          <ul class="faq__list">
            <li
              v-for="(question, index) in generalQuestions.slice(5)"
              :key="index + 5"
              class="faq__item"
              :class="{ active: question.active }"
            >
              <div
                class="faq__item__title"
                :aria-expanded="question.active"
                tabindex="0"
                role="button"
                @click="toggleClass(index + 5)"
              >
                <h5>{{ $t(`q${index + 6}`) }}</h5>
                <i class="icon-chevron-down" />
              </div>
              <p class="faq__item__text" :class="{ active2: question.active }">
                {{ $t(`a${index + 6}`) }}
              </p>
            </li>
          </ul>
        </li>
      </ul>
    </ContainerComponent>
  </div>
</template>

<script>
export default {
  name: "FAQ",
  data() {
    return {
      generalQuestions: Array(6)
        .fill()
        .map(() => ({ active: false })),
    };
  },
  methods: {
    toggleClass(index) {
      this.generalQuestions[index].active =
        !this.generalQuestions[index].active;
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
    width: 50%;

    @media (max-width: 991px) {
      width: 100%;
    }
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
</style>
