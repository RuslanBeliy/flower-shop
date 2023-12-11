<script setup lang="ts">
import BaseContainer from '@/components/ui/BaseContainer.vue';
import PostCard from '@/components/posts/PostCard.vue';
import BaseTitle from '@/components/ui/BaseTitle.vue';
import BaseRequestError from '@/components/ui/BaseRequestError.vue';
import BaseSpinner from '@/components/ui/BaseSpinner.vue';
import { useBlog } from '@/pages/blog/hooks/useBlog.ts';

const { posts, requestPosts, errorRequestPosts, statusRequestPosts } =
  useBlog();
</script>

<template>
  <BaseContainer>
    <section class="blog">
      <BaseTitle tag="h1" size="l" center line>Наш блог</BaseTitle>

      <BaseSpinner v-if="statusRequestPosts === 'loading'" center top="30" />
      <BaseRequestError
        v-else-if="statusRequestPosts === 'error'"
        :error="errorRequestPosts"
        button-text="Запросить еще раз"
        @try-again="requestPosts"
      />
      <ul v-else class="list">
        <PostCard
          v-for="post in posts"
          :key="post._id"
          :_id="post._id"
          :title="post.title"
          :text="post.text"
          :image-url="post.imageUrl"
          :views-count="post.viewsCount"
        />
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

  @media (max-width: 992px) {
    grid-template-columns: repeat(2, minmax(300px, 1fr));
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(1, minmax(300px, 1fr));
  }
}
</style>
