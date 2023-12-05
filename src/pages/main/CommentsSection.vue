<script setup lang="ts">
import CommentCard from '@/components/comments/CommentCard.vue';
import BaseTitle from '@/components/ui/BaseTitle.vue';
</script>

<template>
  <section class="comments-section">
    <BaseTitle tag="h2" size="l" center line>Comments</BaseTitle>
    <ul class="list">
      <CommentCard />
      <CommentCard />
      <CommentCard />
    </ul>
  </section>
</template>

<style scoped lang="scss">
.comments-section {
  padding-bottom: 100px;
}

.list {
  margin-top: 20px;
  display: grid;
  gap: 24px;
  grid-template-columns: repeat(3, minmax(300px, 1fr));
}
</style>
