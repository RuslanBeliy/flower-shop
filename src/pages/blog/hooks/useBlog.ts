import { useFetch } from '@/hooks/useFetch.ts';
import { fetchPosts } from '@/api/requests/posts.ts';
import { onMounted } from 'vue';

export const useBlog = () => {
  const { data, status, request, error } = useFetch(
    fetchPosts,
    'Не удалось загрузить список постов',
  );

  onMounted(request);

  return { posts: data, status, request, error };
};
