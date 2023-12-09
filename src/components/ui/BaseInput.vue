<script setup lang="ts">
import { ErrorObject } from '@vuelidate/core';

interface Props {
  modelValue?: string;
  error?: ErrorObject[];
}

const emits = defineEmits(['update:modelValue']);
defineProps<Props>();

defineOptions({
  inheritAttrs: false,
});

const onInput = (e: Event) => {
  const value = (e.target as HTMLInputElement).value;
  emits('update:modelValue', value);
};
</script>

<template>
  <div class="input-control">
    <input v-bind="$attrs" :value="modelValue" @input="onInput" />
    <span v-if="error?.length">{{ error[0].$message }}</span>
  </div>
</template>

<style scoped lang="scss">
.input-control {
  position: relative;
  input {
    width: 100%;
    height: 100%;
    padding: 20px 30px;
    border-radius: 5px;
    border: 1px solid var(--third-color);
    color: var(--secondary-color);
    font-family: Roboto, sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    &[disabled] {
      opacity: 0.4;
    }
  }

  span {
    position: absolute;
    bottom: -18px;
    left: 10px;
    color: var(--primary-color);
    font-size: 14px;
  }
}
</style>
