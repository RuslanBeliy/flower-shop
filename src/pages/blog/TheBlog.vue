<script setup lang="ts">
import BaseContainer from '@/components/ui/BaseContainer.vue';
import PostCard from '@/components/posts/PostCard.vue';
import BaseTitle from '@/components/ui/BaseTitle.vue';
</script>

<template>
  <BaseContainer>
    <section class="blog">
      <BaseTitle tag="h1" size="l" center line>Наш блог</BaseTitle>
      <ul class="list">
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </ul>
    </section>
  </BaseContainer>
</template>

<style scoped lang="scss">
.blog {
  padding: 40px 0 100px;
}

.list {
  display: grid;
  gap: 30px;
  grid-template-columns: repeat(3, minmax(300px, 1fr));
  margin-top: 30px;
}
</style>
