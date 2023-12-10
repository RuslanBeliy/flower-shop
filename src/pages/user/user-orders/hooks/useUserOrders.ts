import { onMounted, ref } from 'vue';
import { useFetch } from '@/hooks/useFetch.ts';
import { fetchOrders } from '@/api/requests/orders.ts';
import { ResponseOrders } from '@/types/orders.ts';

export const useUserOrders = () => {
  const orders = ref<ResponseOrders[]>();
  const [requestOrders, statusRequestOrders, errorRequestOrders] =
    useFetch<ResponseOrders[]>();

  onMounted(async () => {
    orders.value = await requestOrders(fetchOrders);
  });

  return { orders, statusRequestOrders, errorRequestOrders };
};
