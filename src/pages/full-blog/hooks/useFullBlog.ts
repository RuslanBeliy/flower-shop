import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { useFetch } from '@/hooks/useFetch.ts';
import { fetchPostById } from '@/api/requests/posts.ts';
import { IPost } from '@/types/posts.ts';

export const useFullBlog = () => {
  const post = ref<IPost>();

  const [requestPost, statusRequestPost, errorRequestPost] = useFetch<IPost>();

  const { params } = useRoute();
  const id = params.id as string;

  onMounted(async () => {
    post.value = await requestPost(() => fetchPostById(id));
  });

  return { post, requestPost, statusRequestPost, errorRequestPost };
};
