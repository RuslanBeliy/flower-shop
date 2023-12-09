<script setup lang="ts">
interface Props {
  src?: string;
  text?: string;
  width: string;
  height: string;
}

defineProps<Props>();
</script>

<template>
  <div class="avatar" :style="{ width: width + 'px', height: height + 'px' }">
    <img v-if="src" :src="src" alt="user avatar" />
    <div class="text">{{ text }}</div>
  </div>
</template>

<style scoped lang="scss">
.avatar {
  border-radius: 50%;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .text {
    width: 100%;
    height: 100%;
    background: var(--primary-color);
    color: var(--white-color);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 50px;
  }
}
</style>
