import { useFetch } from '@/hooks/useFetch.ts';
import { fetchPosts } from '@/api/requests/posts.ts';
import { onMounted } from 'vue';
import { IPost } from '@/types/posts.ts';

export const useBlog = () => {
  const { data, status, request, error } = useFetch<IPost[], undefined>(
    'Не удалось загрузить список постов',
  );

  onMounted(() => request(fetchPosts));

  return { posts: data, status, request, error };
};
