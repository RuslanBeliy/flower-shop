import { useFetch } from '@/hooks/useFetch.ts';
import { fetchLatestPosts } from '@/api/requests/posts.ts';
import { onMounted } from 'vue';

export const useLatestPosts = () => {
  const { data, request, status, error } = useFetch(
    fetchLatestPosts,
    'При получении постов, произошла ошибка',
  );

  onMounted(request);

  return { latestPosts: data, status, error, request };
};
