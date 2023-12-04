<script setup lang="ts">
interface Props {
  src: string;
  width: string;
  height: string;
}

defineProps<Props>();
</script>

<template>
  <div class="avatar" :style="{ width: width + 'px', height: height + 'px' }">
    <img :src="src" alt="user avatar" />
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
}
</style>
