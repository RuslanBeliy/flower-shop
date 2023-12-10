import { useFetch } from '@/hooks/useFetch.ts';
import { fetchPosts } from '@/api/requests/posts.ts';
import { onMounted, ref } from 'vue';
import { IPost } from '@/types/posts.ts';

export const useBlog = () => {
  const posts = ref<IPost[]>();
  const [requestPosts, statusRequestPosts, errorRequestPosts] =
    useFetch<IPost[]>();

  onMounted(async () => {
    posts.value = await requestPosts(fetchPosts);
  });

  return { posts, statusRequestPosts, requestPosts, errorRequestPosts };
};
