import { useFetch } from '@/hooks/useFetch.ts';
import { onMounted } from 'vue';
import { fetchFlowerById } from '@/api/requests/flowers.ts';
import { IFlower } from '@/types/flowers.ts';
import { useRoute } from 'vue-router';

export const useFullInfoShop = () => {
  const { request, data, error, status } = useFetch<IFlower>(
    'По вашему запросу ничего не найдено',
  );
  const { params } = useRoute();
  const id = params.id as string;

  onMounted(async () => {
    await request(() => fetchFlowerById(id));
  });

  return { flower: data, request, error, status };
};
