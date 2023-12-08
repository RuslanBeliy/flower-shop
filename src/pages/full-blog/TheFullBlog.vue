<script setup lang="ts">
import BaseContainer from '@/components/ui/BaseContainer.vue';
import BaseTitle from '@/components/ui/BaseTitle.vue';
import EyeIcon from '@/components/icons/EyeIcon.vue';
import { useFullBlog } from '@/pages/full-blog/hooks/useFullBlog.ts';
import BaseSpinner from '@/components/ui/BaseSpinner.vue';
import BaseRequestError from '@/components/ui/BaseRequestError.vue';

const { post, error, status } = useFullBlog();
</script>

<template>
  <BaseContainer>
    <section class="full-blog">
      <BaseSpinner v-if="status === 'loading'" center />
      <BaseRequestError v-else-if="status === 'error'" :error="error" />
      <div v-else class="wrapper">
        <div class="img">
          <img :src="post?.imageUrl" :alt="post?.title" />
        </div>
        <div class="info">
          <BaseTitle tag="h1" size="l" center>{{ post?.title }}</BaseTitle>
          <p>{{ post?.text }}</p>
          <div class="actions">
            <div class="actions__item">
              <EyeIcon />
              <span>{{ post?.viewsCount }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </BaseContainer>
</template>

<style scoped lang="scss">
.full-blog {
  padding: 40px 0 100px;
}

.wrapper {
  padding: 40px;
  display: flex;
  gap: 40px;
  background: var(--white-color);
  border-radius: 10px;
}

.img {
  width: 400px;
  height: 300px;
  flex-shrink: 0;
  border-radius: 5px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.info {
  flex-grow: 1;

  p {
    margin: 40px 0;
    font-size: 18px;
    line-height: 25px;
  }
}

.actions {
  display: flex;
  align-items: center;
  gap: 20px;

  &__item {
    display: flex;
    align-items: center;
    gap: 5px;
  }
}
</style>
