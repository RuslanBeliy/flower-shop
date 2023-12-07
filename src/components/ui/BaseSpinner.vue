<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  center?: boolean;
  top?: string;
  bottom?: string;
}

const props = defineProps<Props>();

const dynamicStyles = computed(() => {
  return {
    'padding-top': props.top + 'px',
    'padding-bottom': props.bottom + 'px',
  };
});
</script>

<template>
  <div
    class="spinner"
    :class="{ spinner__center: center }"
    :style="dynamicStyles"
  >
    <span class="loader"></span>
  </div>
</template>

<style scoped lang="scss">
.spinner {
  &__center {
    text-align: center;
  }
}
.loader {
  width: 68px;
  height: 68px;
  border-radius: 50%;
  display: inline-block;
  border-top: 6px solid var(--third-color);
  border-right: 6px solid transparent;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
}
.loader::after {
  content: '';
  box-sizing: border-box;
  position: absolute;
  left: 0;
  top: 0;
  width: 68px;
  height: 68px;
  border-radius: 50%;
  border-left: 6px solid var(--primary-color);
  border-bottom: 6px solid transparent;
  animation: rotation 0.5s linear infinite reverse;
}
@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
