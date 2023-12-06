import { $api } from '@/api';
import { IFlower, ResponseFlowers } from '@/types/flowers.ts';

export const fetchBestSellers = async (): Promise<IFlower[]> => {
  const { data } = await $api.get<ResponseFlowers>('/flowers', {
    params: { bestSellers: true },
  });
  return data.flowers;
};
