import { useFetch } from '@/hooks/useFetch.ts';
import { fetchLatestPosts } from '@/api/requests/posts.ts';
import { onMounted } from 'vue';
import { IPost } from '@/types/posts.ts';

export const useLatestPosts = () => {
  const { data, request, status, error } = useFetch<IPost[]>(
    'При получении постов, произошла ошибка',
  );

  onMounted(() => request(fetchLatestPosts));

  return { latestPosts: data, status, error, request };
};
