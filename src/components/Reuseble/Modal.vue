<template>
  <teleport to="body">
    <div
        v-if="show"
        ref="modal-backdrop"
        @click="toggleVisibility(false)"
        class="modal-backdrop"
    >
      <div class="modal-content" @click.stop>
        <slot></slot>
      </div>
    </div>
  </teleport>
</template>

<script setup>
import {ref, watch} from 'vue';

const show = ref(false);
const scrollPosition = ref(0);

const toggleVisibility = (status) => {
  if (status) {
    // Save the current scroll position before opening the modal
    scrollPosition.value = window.scrollY;
    document.body.style.position = 'fixed';
    document.body.style.width = '100%';
  } else {
    // Emit closed event and restore scroll position after closing the modal
    window.scrollTo(0, scrollPosition.value);
    document.body.style.position = 'static';
    document.body.style.width = 'auto';
  }
  show.value = status;
};

watch(show, (newVal) => {
  if (newVal) {
    document.body.style.position = 'fixed';
    document.body.style.width = '100%';
  } else {
    document.body.style.position = 'static';
    document.body.style.width = 'auto';
  }
});
</script>

<style scoped lang="scss">
@import "@/assets/styles/main.scss";

.modal-backdrop {
  z-index: 100;
  @include flex(row, center, center);
  background: rgba(63, 63, 63, 0.6);
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 100%;
  padding: 0px 15px;
}

.modal-content {
  position: relative;
  border-radius: 10px;
  background: #fff;
  max-width: 1100px;
  padding: 50px 70px;
  max-height: 80vh;
  overflow-y: auto;
  overflow-x: hidden;
  @media (max-width: 991px) {
    padding: 20px 16px;
    border-radius: 20px;
  }
}
</style>
