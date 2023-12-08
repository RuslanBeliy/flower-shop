<script setup lang="ts">
import BaseAvatar from '@/components/ui/BaseAvatar.vue';
import BaseTitle from '@/components/ui/BaseTitle.vue';

interface Props {
  imageUrl: string;
  name: string;
  comment: string;
}

defineProps<Props>();
</script>

<template>
  <li class="review-card">
    <BaseAvatar :src="imageUrl" width="40" height="40" class="ava" />
    <div class="info">
      <BaseTitle>{{ name }}</BaseTitle>
      <p>{{ comment }}</p>
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
