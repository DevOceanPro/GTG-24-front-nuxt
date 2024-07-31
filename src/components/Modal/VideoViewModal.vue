<template>
  <Modal ref="modal">
    <div class="video-modal">
      <div class="video-modal__content">
        <button class="video-modal__content--close-btn" @click="hideModal">
          <i class="icon-close"></i>
        </button>

        <div class="video-modal__content--video">
          <template v-if="true">
            <video ref="customVideo" controls @ended="videoEnded">
              <source :src="currentVideo" type="video/mp4"/>
            </video>
          </template>
          <img
              v-if="isPlugVideo"
              src="@/assets/video-placeholder.png"
              alt="video-img"
          />
          <button
              v-if="isPlugVideo"
              @click="playVideo"
              class="video-modal__content--video-play"
          >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 150 150"
                fill="none"
            >
              <rect width="150" height="150" rx="75" fill="white"/>
              <path
                  d="M97 73.2679C98.3333 74.0378 98.3333 75.9622 97 76.732L65.5 94.9186C64.1667 95.6884 62.5 94.7261 62.5 93.1865L62.5 56.8135C62.5 55.2739 64.1667 54.3116 65.5 55.0814L97 73.2679Z"
                  fill="#4EA62F"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </Modal>
</template>

<script setup>
import {ref} from 'vue';
import Modal from '@/src/components/Reuseble/Modal.vue';
import Button from '@/src/components/Reuseble/Button.vue';

const isPlugVideo = ref(true);
const isModalOpen = ref(false);
const currentVideo = ref('');
const customVideo = ref(null);

const showModal = (video) => {
  currentVideo.value = video;
  isModalOpen.value = true;
};

const hideModal = () => {
  isModalOpen.value = false;
  isPlugVideo.value = true;
};

const playVideo = () => {
  customVideo.value.play();
  isPlugVideo.value = false;
};

const videoEnded = () => {
  isPlugVideo.value = true;
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/main.scss";

.video-modal {
  position: fixed;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  background: rgba(63, 63, 63, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 30px;
  z-index: 100;
  cursor: pointer;
  overflow-y: hidden;
  width: 100%;

  &__content {
    position: relative;
    border-radius: 10px;
    background: #fff;
    max-width: 90vw;
    max-height: 78vh;
    width: 100%;
    height: 100%;
    padding: 20px 30px 20px;
    overflow-y: auto;
    overflow-x: hidden;

    &--close-btn {
      position: absolute;
      left: 6px;
      top: 4px;
    }

    &--video {
      display: flex;
      justify-content: center;
      width: 100%;
      height: 100%;
      position: relative;

      video {
        width: 100%;
        height: auto;
      }

      img {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        filter: brightness(40%);
      }

      &-play {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        svg {
          width: 150px;
          height: 150px;

          @media (max-width: 991px) {
            width: 70px;
            height: 70px;
          }
        }
      }
    }
  }
}

@media (max-width: 500px) {
  .video-modal {
    &__content {
      max-height: 60vh;
    }
  }
}

@media (max-width: 400px) {
  .video-modal {
    &__content {
      max-height: 50vh;
    }
  }
}
</style>
