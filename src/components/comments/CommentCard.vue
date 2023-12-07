<script setup lang="ts">
import BaseAvatar from '@/components/ui/BaseAvatar.vue';
import BaseRating from '@/components/ui/BaseRating.vue';
interface Props {
  name: string;
  comment: string;
  imageUrl: string;
  rating: number;
}

defineProps<Props>();
</script>

<template>
  <li class="comment-card">
    <div class="user-info">
      <BaseAvatar width="58" height="58" :src="imageUrl" />
      <strong>{{ name }}</strong>
    </div>

    <p class="comment">{{ comment }}</p>

    <BaseRating :rating="rating" class="comment-rating" />
  </li>
</template>

<style scoped lang="scss">
.comment-card {
  display: flex;
  flex-direction: column;
  padding: 20px 20px 20px 100px;
  max-width: 385px;
  height: 100%;
  background: var(--white-color);
}

.user-info {
  transform: translateX(-74px);
  display: flex;
  align-items: center;
  gap: 16px;

  strong {
    color: var(--black-color);
    font-size: 22px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
}

.comment {
  font-size: 20px;
  line-height: 30px;
  margin-bottom: 20px;
}

.comment-rating {
  margin-top: auto;
}
</style>
