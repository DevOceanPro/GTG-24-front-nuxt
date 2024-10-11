<script>
export default {
  name: "CustomModal",
  emits: ["closed"],
  data() {
    return {
      show: false,
      // Додайте змінну для зберігання позиції прокрутки
      scrollPosition: 0,
    };
  },
  watch: {
    show(newVal) {
      if (newVal) {
        document.body.style.position = "fixed";
        document.body.style.width = "100%";
      } else {
        document.body.style.position = "static";
        document.body.style.width = "auto";
      }
    },
  },
  methods: {
    toggleVisibility(status) {
      if (status) {
        // Зберегти поточну позицію прокрутки перед відкриттям модалки
        this.scrollPosition = window.scrollY;
        document.body.style.position = "fixed";
        document.body.style.width = "100%";
      } else {
        this.$emit("closed");

        document.body.style.position = "static";
        document.body.style.width = "auto";
        // Відновити позицію прокрутки після закриття модалки
        window.scrollTo(0, this.scrollPosition);
      }
      this.show = status;
    },
  },
};
</script>

<template>
  <teleport to="body">
    <div
      v-if="show"
      ref="modal-backdrop"
      class="modal-backdrop"
      @click="toggleVisibility(false)"
    >
      <div class="modal-content" @click.stop>
        <slot />
      </div>
    </div>
  </teleport>
</template>

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
