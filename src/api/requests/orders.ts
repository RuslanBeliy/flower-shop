import { $api } from '@/api';
import { ResponseOrders } from '@/types/orders.ts';
import { ICart } from '@/stores/cart.ts';

export const fetchOrders = async (): Promise<ResponseOrders[]> => {
  const { data } = await $api.get<ResponseOrders[]>('/orders-flower');
  return data;
};

export const postOrder = async (body: ICart[]): Promise<ResponseOrders[]> => {
  const { data } = await $api.post<ResponseOrders[]>('/orders-flower', body);
  return data;
};
