<script setup lang="ts">
import PostCard from '@/components/posts/PostCard.vue';
import BaseTitle from '@/components/ui/BaseTitle.vue';
import { useLatestPosts } from '@/pages/main/hooks/useLatestPosts.ts';
import BaseSpinner from '@/components/ui/BaseSpinner.vue';
import BaseRequestError from '@/components/ui/BaseRequestError.vue';

const { latestPosts, status, request, error } = useLatestPosts();
</script>

<template>
  <section class="latest-posts">
    <BaseTitle tag="h2" size="l" line center>Последние посты</BaseTitle>
    <BaseSpinner v-if="status === 'loading'" center top="30" />
    <BaseRequestError
      v-else-if="status === 'error'"
      :error="error"
      button-text="Запросить еще раз"
      @try-again="request"
    />
    <ul v-else class="list">
      <PostCard
        v-for="post in latestPosts"
        :key="post._id"
        :_id="post._id"
        :title="post.title"
        :image-url="post.imageUrl"
        :text="post.text"
        :views-count="post.viewsCount"
      />
    </ul>
  </section>
</template>

<style scoped lang="scss">
.latest-posts {
  margin-bottom: 50px;
}
.list {
  margin-top: 50px;
  display: grid;
  gap: 30px;
  grid-template-columns: repeat(3, minmax(300px, 1fr));
}
</style>
