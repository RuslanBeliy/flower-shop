<script setup lang="ts">
interface Props {
  white?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  white: false,
});
</script>

<template>
  <h2 class="logo">Flower <span :class="{ white }">Shop</span></h2>
</template>

<style scoped lang="scss">
.logo {
  color: var(--primary-color);
  font-size: 32px;
  font-weight: 500;
  line-height: normal;

  span {
    color: var(--black-color);
  }

  span.white {
    color: var(--white-color);
  }
}
</style>
