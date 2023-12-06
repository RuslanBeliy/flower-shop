import { onMounted } from 'vue';
import { fetchBestSellers } from '@/api/requests/flowers.ts';
import { IFlower } from '@/types/flowers.ts';
import { useFetch } from '@/hooks/useFetch.ts';
export const useBestSellers = () => {
  const { data, request, status, error } =
    useFetch<IFlower[]>(fetchBestSellers);

  onMounted(async () => {
    await request();
  });

  return {
    flowers: data,
    status,
    error,
  };
};
