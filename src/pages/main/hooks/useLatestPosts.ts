import { onMounted, ref } from 'vue';
import { useFetch } from '@/hooks/useFetch.ts';
import { fetchLatestPosts } from '@/api/requests/posts.ts';
import { IPost } from '@/types/posts.ts';

export const useLatestPosts = () => {
  const latestPosts = ref<IPost[]>();
  const [
    requestLatestPosts,
    statusRequestLatestPosts,
    errorRequestLatestPosts,
  ] = useFetch<IPost[]>();

  onMounted(async () => {
    latestPosts.value = await requestLatestPosts(fetchLatestPosts);
  });

  return {
    latestPosts,
    statusRequestLatestPosts,
    errorRequestLatestPosts,
    requestLatestPosts,
  };
};
