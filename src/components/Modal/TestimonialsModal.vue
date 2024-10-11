<template>
  <CustomModal ref="modal">
    <div class="modal">
      <button class="close-btn" @click="hideModal">
        <i class="icon-close" />
      </button>
      <h2 class="modal__title">{{ $t("SendYourTestimonials") }}</h2>
      <p class="modal__text">
        {{ $t("SendYourTestimonialsDescr") }}
      </p>
      <form class="modal__form" @submit.prevent="submitForm">
        <div class="modal__inputs">
          <div class="modal__input">
            <label for="name">{{ $t("FirstLastName") }}</label>
            <input
              id="name"
              v-model="formData.author"
              minlength="3"
              type="text"
              required
            />
          </div>
          <div class="modal__input">
            <label for="email">{{ $t("Email") }}</label>
            <input
              id="email"
              v-model="formData.email"
              minlength="12"
              type="email"
              required
            />
          </div>
        </div>

        <div class="modal__textarea">
          <label for="message">{{ $t("Message") }}</label>
          <textarea
            id="message"
            v-model="formData.description"
            maxlength="1500"
            required
          />
        </div>

        <CustomButton
          class="modal__btn"
          type="submit"
          :text="$t('Send')"
          name="green"
        />
      </form>
    </div>
  </CustomModal>
</template>

<script setup>
import { ref } from "vue";
import { useI18n } from "vue-i18n";
import CustomButton from "~/src/components/Reusable/CustomButton.vue";
import CustomModal from "~/src/components/Reusable/CustomModal.vue";

// закоментовано поки стор не доступний
// import useReview from "@/stores/reviewStore";

const formData = ref({
  author: "",
  email: "",
  description: "",
  recaptcha_token: "",
});

const modal = ref(null);
const { t } = useI18n();

function showModal() {
  modal.value.toggleVisibility(true);
}

function hideModal() {
  modal.value.toggleVisibility(false);
}

// закоментовано поки стор не доступний, функція відправки форми
async function submitForm() {
  // formData.value.recaptcha_token = await this.$recaptcha()
  // useReview.makeReview(formData.value);
  formData.value = {};
  hideModal();
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/main.scss";

.modal {
  position: relative;

  &__title {
    display: block;
    max-width: 75%;
    color: $black;
    font-family: $font-main;
    font-size: 36px;
    font-weight: 700;
    line-height: 140%;
    margin-bottom: 16px;

    @media (max-width: 991px) {
      font-size: 24px;
    }
  }

  &__text {
    color: #92939e;
    font-family: $font-main;
    font-weight: 500;
    line-height: 170%;
    margin-bottom: 32px;

    @media (max-width: 991px) {
      font-size: 12px;
      margin-bottom: 16px;
    }
  }

  &__form {
    @include flex(column, center, center);
  }

  &__inputs {
    @include flex(row, space-between, center);
    gap: 28px;
    margin-bottom: 16px;
    width: 100%;

    @media (max-width: 991px) {
      @include flex(column, center, center);
      gap: 16px;
      width: 100%;
    }
  }

  &__input {
    width: 100%;

    input {
      font-family: $font-main;
      border-radius: 10px;
      border: 1px solid #e4e4e4;
      background: $white;
      padding: 10px 14px;
      max-width: 471px;
      width: 100%;
      margin-top: 6px;

      @media (max-width: 991px) {
        width: 100%;
        max-width: none;
      }
    }
  }

  &__textarea {
    width: 100%;
    margin-bottom: 40px;

    @media (max-width: 991px) {
      margin-bottom: 20px;
    }

    textarea {
      font-family: $font-main;
      border-radius: 10px;
      border: 1px solid #e4e4e4;
      background: $white;
      padding: 10px 14px;
      width: 100%;
      height: 225px;
      resize: none;
      margin-top: 6px;

      @media (max-width: 991px) {
        height: 200px;
      }
    }
  }

  &__btn {
    margin-left: auto;

    @media (max-width: 991px) {
      width: 100%;
    }
  }
}

label {
  color: #818181;
  font-family: $font-roboto;
  font-size: 14px;
  font-weight: 500;
  line-height: 140%;

  @media (max-width: 991px) {
    font-size: 12px;
  }
}

.close-btn {
  position: absolute;
  top: -40px;
  right: -60px;
  @include flex(row, center, center);
  width: 42px;
  height: 43px;
  padding: 11px;
  font-size: 20px;
  border-radius: 100%;
  background: $white;
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.25);

  @media (max-width: 991px) {
    top: 0;
    right: 0;
    padding: 9px;
    width: 34px;
    height: 34px;
    font-size: 16px;
  }
}
</style>
