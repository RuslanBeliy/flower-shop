<script setup lang="ts">
import CommentCard from '@/components/comments/CommentCard.vue';
import BaseTitle from '@/components/ui/BaseTitle.vue';
import { comments } from '@/constants';
</script>

<template>
  <section class="comments-section">
    <BaseTitle tag="h2" size="l" center line>Комментарии</BaseTitle>
    <ul class="list">
      <CommentCard
        v-for="comment in comments"
        :key="comment.imageUrl"
        :name="comment.name"
        :comment="comment.comment"
        :image-url="comment.imageUrl"
        :rating="comment.rating"
      />
    </ul>
  </section>
</template>

<style scoped lang="scss">
.comments-section {
  padding-bottom: 100px;
}

.list {
  margin-top: 50px;
  display: grid;
  gap: 24px;
  grid-template-columns: repeat(3, minmax(300px, 1fr));
}
</style>
