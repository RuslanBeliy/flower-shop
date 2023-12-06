<script setup lang="ts">
defineOptions({
  inheritAttrs: false,
});
</script>

<template>
  <div class="input-control">
    <input v-bind="$attrs" />
    <span></span>
  </div>
</template>

<style scoped lang="scss">
.input-control {
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
}
</style>
