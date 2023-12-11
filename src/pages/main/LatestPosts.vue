<script setup lang="ts">
import PostCard from '@/components/posts/PostCard.vue';
import BaseTitle from '@/components/ui/BaseTitle.vue';
import BaseSpinner from '@/components/ui/BaseSpinner.vue';
import BaseRequestError from '@/components/ui/BaseRequestError.vue';
import { useLatestPosts } from './hooks/useLatestPosts.ts';

const {
  latestPosts,
  requestLatestPosts,
  statusRequestLatestPosts,
  errorRequestLatestPosts,
} = useLatestPosts();
</script>

<template>
  <section class="latest-posts">
    <BaseTitle tag="h2" size="l" line center>Последние посты</BaseTitle>

    <BaseSpinner
      v-if="statusRequestLatestPosts === 'loading'"
      center
      top="30"
    />
    <BaseRequestError
      v-else-if="statusRequestLatestPosts === 'error'"
      :error="errorRequestLatestPosts"
      button-text="Запросить еще раз"
      @try-again="requestLatestPosts"
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

  @media (max-width: 992px) {
    grid-template-columns: repeat(2, minmax(300px, 1fr));
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, minmax(300px, 1fr));
  }
}
</style>
