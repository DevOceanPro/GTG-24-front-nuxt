<template>
  <div id="testimonials" class="our-testimonials">
    <div class="content">
      <div class="content__info">
        <div class="content__info__title">
          <p>{{ $t('OurTestimonials') }}</p>
          <h2>{{ $t('HappyWith') }} {{ $t('OurServices') }}</h2>
        </div>
        <p class="content__info__text">
          {{ $t('OurTestimonialsDescr') }}
        </p>
        <Button
            :text="$t('SengMessage')"
            class="content__info__btn"
            name="green"
            type="button"
            @click="sendMessage"
        />
      </div>

      <Swiper
          :modules="modules"
          :navigation="navigationObj"
          :space-between="20"
          class="content__wrap__slider"
      >
        <SwiperSlide
            v-for="({ description, author }, index) in testimonials"
            :key="index"
            class="content__slider"
        >
          <div class="content__slider__svg">
            <svg fill="none" height="38" viewBox="0 0 50 38" width="50" xmlns="http://www.w3.org/2000/svg">
              <path
                  d="M27.9325 36.8605L27.7466 37.5H28.4126H39.4895H39.8201L39.9496 37.1958L46.4391 21.9488L46.4391 21.9488L46.4408 21.9446C47.2623 19.9657 47.899 18.3712 48.3496 17.163C48.8041 15.9443 49.1131 14.8538 49.2692 13.8953C49.4234 13.0187 49.5 12.1083 49.5 11.1647C49.5 8.00645 48.4465 5.39958 46.3227 3.38977L46.316 3.38343L46.3091 3.37735C44.1176 1.45162 41.3847 0.5 38.1469 0.5C34.9804 0.5 32.3192 1.45372 30.2017 3.38337L30.2014 3.3836C28.0008 5.39177 26.9056 8.00046 26.9056 11.1647C26.9056 14.3892 27.9569 16.9714 30.0971 18.8466C30.8769 19.53 31.7395 20.0852 32.6826 20.5143L27.9325 36.8605ZM1.52686 36.8605L1.34101 37.5H2.007H13.0839H13.4145L13.544 37.1958L20.0335 21.9488L20.0335 21.9488L20.0352 21.9447C20.8567 19.9657 21.4934 18.3712 21.944 17.163C22.3985 15.9443 22.7075 14.8539 22.8636 13.8953C23.0178 13.0188 23.0944 12.1084 23.0944 11.1647C23.0944 8.00645 22.0409 5.39958 19.9171 3.38977L19.9104 3.38343L19.9035 3.37735C17.712 1.45162 14.9791 0.5 11.7413 0.5C8.57482 0.5 5.91362 1.45372 3.79609 3.38337L3.79584 3.3836C1.59518 5.39177 0.5 8.00046 0.5 11.1647C0.5 14.3892 1.55135 16.9714 3.69147 18.8466C4.47129 19.53 5.3339 20.0852 6.27703 20.5143L1.52686 36.8605Z"
                  stroke="#666666"
              />
            </svg>
          </div>
          <div class="content__text_wrapper">
            <p class="content__slider__text">
              {{ description }}
            </p>
          </div>
          <span class="content__slider__line"></span>
          <p class="content__slider__name">{{ author }}</p>
        </SwiperSlide>
        <div class="content__slider__arrows">
          <button class="arrow-prev">
            <i class="icon-arr-slider-left"></i>
          </button>
          <button class="arrow-next">
            <i class="icon-arr-slider-right"></i>
          </button>
        </div>
        <div class="content__slider__button">
          <Button
              :text="$t('SengMessage')"
              class="btn-bottom"
              name="green"
              type="button"
              @click="sendMessage"
          />
        </div>
      </Swiper>
    </div>
  </div>
  <testimonial-modal ref="modal" :use-review="useReview"/>
</template>

<script setup>
import 'swiper/css';
import 'swiper/css/navigation';

import {ref} from 'vue';
import {useI18n} from 'vue-i18n';
import {Swiper, SwiperSlide} from 'swiper/vue';
import {Autoplay, Navigation} from 'swiper/modules';

// закоментовано поки стор не доступний
// import useReview from '@/stores/reviewStore';

import Button from '~/src/components/Reuseble/Button.vue';
import TestimonialModal from '~/src/components/Modal/TestimonialsModal.vue';

const {t} = useI18n();
// const useReview = ref(useReview()); // закоментовано поки стор не доступний
const useReview = ref(null); // Заглушка для переноса

const modules = [Autoplay, Navigation];
const navigationObj = {nextEl: '.arrow-next', prevEl: '.arrow-prev'};

// Приклад даних відгуків
const testimonials = ref([
  {
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    author: 'Christina Tell'
  },
  {
    description: 'Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
    author: 'John Doe'
  }
]);

const sendMessage = () => {
  // Логіка відправки повідомлення
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/main.scss";

.content__slider__text {
  position: relative;
  max-width: 600px;
  overflow-wrap: break-word;
}

.content__slider__name {
  max-width: 70%;
  overflow: hidden;
  text-overflow: ellipsis;
  text-wrap: none;
  margin-top: 10px;
  position: absolute;
  bottom: 10px;
}

.content__text_wrapper {
  max-height: 110px;
  overflow-y: auto;
  overflow-x: hidden;
  padding-right: 6px;
}

.our-testimonials {
  padding: 120px 0;
  @media (max-width: 991px) {
    padding: 60px 0;
  }
}

.content {
  @include flex(row, space-between, flex-start);
  gap: 52px;
  @media (max-width: 991px) {
    @include flex(column, center, center);
    gap: 32px;
  }
}

.content__info {
  width: 47%;
  @media (max-width: 991px) {
    width: 100%;
    text-align: center;
  }

  &__title {
    width: 80%;
    margin-bottom: 20px;
    @media (max-width: 991px) {
      width: 100%;
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
      color: $black;
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

  &__text {
    width: 85%;
    color: #92939e;
    font-family: $font-main;
    font-weight: 500;
    line-height: 170%;
    margin-bottom: 47px;
    @media (max-width: 991px) {
      width: 100%;
      font-size: 13px;
      margin-bottom: 0;
    }
  }

  &__btn {
    display: block;
    @media (max-width: 991px) {
      display: none;
    }
  }
}

.content__wrap__slider {
  width: 53%;
  @media (max-width: 991px) {
    width: 100%;
  }
}

.content__slider {
  position: relative;
  padding: 26px 40px;
  border-radius: 30px;
  min-height: 242px;
  border: 1px solid #9fdd88;
  @media (max-width: 991px) {
    width: 100%;
    padding: 16px;
  }

  &__svg {
    margin-bottom: 10px;
    @media (max-width: 991px) {
      position: absolute;
      bottom: 0px;
      right: 16px;
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

  &__line {
    display: block;
    position: absolute;
    width: 47.5px;
    height: 2px;
    background-color: $green;
  }

  &__name {
    color: $black;
    font-family: $font-main;
    font-size: 20px;
    font-style: italic;
    font-weight: 600;
    line-height: 170%;
    @media (max-width: 991px) {
      font-size: 16px;
    }
  }
}

.content__slider__arrows {
  @include flex(row, center, center);
  margin-top: 24px;
  gap: 58px;
  @media (max-width: 991px) {
    display: none;
  }

  i {
    font-size: 32px;
    color: $green;
  }
}

.content__slider__button {
  display: none;
  @media (max-width: 991px) {
    margin-top: 32px;
    @include flex(row, center, center);
  }

  .btn-bottom {
    width: 238px;
    padding: 6px 40px;
    font-size: 12px;
  }
}
</style>
