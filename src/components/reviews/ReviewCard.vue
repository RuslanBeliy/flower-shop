<script setup lang="ts">
import BaseAvatar from '@/components/ui/BaseAvatar.vue';
import BaseTitle from '@/components/ui/BaseTitle.vue';
import BaseRating from '@/components/ui/BaseRating.vue';
</script>

<template>
  <li class="review-card">
    <BaseAvatar
      src="https://i.pinimg.com/originals/01/c7/b1/01c7b181419e15cc614b2297a0e0b959.jpg"
      width="40"
      height="40"
      class="ava"
    />
    <div class="info">
      <BaseTitle>Atena</BaseTitle>
      <p>This flower is the best gift i’ve ever got</p>
      <BaseRating rating="5" />
    </div>
  </li>
</template>

<style scoped lang="scss">
.review-card {
  display: flex;
  gap: 10px;
}

.ava {
  flex-shrink: 0;
}

.info {
  p {
    margin: 10px 0;
  }
}
</style>
