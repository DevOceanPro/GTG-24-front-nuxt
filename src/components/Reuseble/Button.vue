<template>
  <v-btn v-if='isPaymentBtn' height='48' :loading='isLoading' :disabled="isDisabled" class="button btn" :class="name"
         :type="type">
    {{ text }}
    <slot></slot>
  </v-btn>
  <button v-else :disabled="isDisabled" class="button" :class="name" :type="type">
    {{ text }}
    <slot></slot>
  </button>
</template>

<script setup>
defineProps({
  name: {
    type: String,
  },
  type: {
    type: String,
  },
  text: {
    type: String,
  },
  isDisabled: {
    type: Boolean,
  },
  isLoading: {
    type: Boolean,
    default: false
  },
  isPaymentBtn: {
    type: Boolean,
    default: false
  }
});
</script>

<style lang="scss" scoped>
@import "@/assets/styles/main.scss";

.btn {
  text-transform: none;
}

.button {
  border-radius: 5px;
  padding: 9px 40px;
  font-weight: 700;
  line-height: 26px;
  border: 2px solid transparent;
  @include transition;
}

.green {
  background: $green;
  color: $white;
  font-family: $font-main;

  &:hover {
    background-color: $white;
    border: 2px solid $green;
    color: $green;
  }
}

.green-not-hover {
  background: $green;
  color: $white;
  font-family: $font-main;
}

.green-outline {
  background-color: transparent;
  border: 2px solid $green;
  color: $green;

  &:hover {
    background-color: $green;
    color: $white;
  }
}

.white {
  background: $white;
  color: $black;
  border: 1px solid #e1e1e1;

  &:hover {
    background: $green;
    color: $white;
  }
}

.grey {
  border-radius: 5px;
  background: #b3b3b3;
  color: $white;
}

.white-outline {
  border-radius: 0;
  background: $white;
  color: $black;
  border: 1px solid $black;

  &:hover {
    background: $black;
    color: $white;
  }
}

.red-outline {
  background: $white;
  color: #c31919;
  border: 1px solid #c31919;

  &:hover {
    background: #c31919;
    color: $white;
  }
}

button:disabled {
  background: #b3b3b3;
  color: #fff;
  pointer-events: none;
}

.blue {
  background: #0E6DDC;
  border: 2px solid #0E6DDC;
  color: $white;
}

.blue-outline {
  background: $white;
  color: #0E6DDC;
  border: 2px solid #0E6DDC;

  &:hover {
    background: #0E6DDC;
    color: $white;
  }
}
</style>
