import { $api } from '@/api';
import { IFlower, ResponseFlowers } from '@/types/flowers.ts';
export interface FlowersRequestParams {
  page?: number;
  sortBy?: string;
  search?: string;
  category?: string;
}
export const fetchBestSellers = async (): Promise<IFlower[]> => {
  const { data } = await $api.get<ResponseFlowers>('/flowers', {
    params: { bestSellers: true },
  });
  return data.flowers;
};
export const fetchFlowers = async (
  params?: FlowersRequestParams,
): Promise<ResponseFlowers> => {
  const { data } = await $api.get<ResponseFlowers>('/flowers', { params });
  return data;
};
export const fetchFlowerById = async (id: string): Promise<IFlower> => {
  const { data } = await $api.get<IFlower>(`/flowers/${id}`);
  return data;
};
