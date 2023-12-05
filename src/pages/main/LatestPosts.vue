<script setup lang="ts">
import PostCard from '@/components/posts/PostCard.vue';
import BaseTitle from '@/components/ui/BaseTitle.vue';
</script>

<template>
  <section class="latest-posts">
    <BaseTitle tag="h2" size="l" line center>Latest posts</BaseTitle>
    <ul class="list">
      <PostCard />
      <PostCard />
      <PostCard />
    </ul>
  </section>
</template>

<style scoped lang="scss">
.latest-posts {
  margin-bottom: 100px;
}
.list {
  margin-top: 25px;
  display: grid;
  gap: 30px;
  grid-template-columns: repeat(3, minmax(300px, 1fr));
}
</style>
