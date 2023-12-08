import { useFetch } from '@/hooks/useFetch.ts';
import { useRoute } from 'vue-router';
import { onMounted } from 'vue';
import { fetchPostById } from '@/api/requests/posts.ts';
import { IPost } from '@/types/posts.ts';

export const useFullBlog = () => {
  const { data, request, status, error } = useFetch<IPost>(
    'Пост по вашему запросу не найден',
  );
  const { params } = useRoute();
  const id = params.id as string;

  onMounted(async () => {
    await request(() => fetchPostById(id));
  });

  return { post: data, request, status, error };
};
