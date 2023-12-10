import { onMounted, ref } from 'vue';
import { fetchBestSellers } from '@/api/requests/flowers.ts';
import { IFlower } from '@/types/flowers.ts';
import { useFetch } from '@/hooks/useFetch.ts';
export const useBestSellers = () => {
  const flowers = ref<IFlower[]>();
  const [requestFlowers, statusRequestFlowers, errorRequestFlowers] =
    useFetch<IFlower[]>();

  onMounted(async () => {
    flowers.value = await requestFlowers(fetchBestSellers);
  });

  return {
    flowers,
    statusRequestFlowers,
    errorRequestFlowers,
    requestFlowers,
  };
};
