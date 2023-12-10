import { useCartStore } from '@/stores/cart.ts';
import { storeToRefs } from 'pinia';
import { useFetch } from '@/hooks/useFetch.ts';
import { postOrder } from '@/api/requests/orders.ts';
import { useRouter } from 'vue-router';
import { routes } from '@/router.ts';

export const useCart = () => {
  const store = useCartStore();
  const { cart } = storeToRefs(store);
  const { clearCart } = store;

  const [requestCreateOrder, statusRequestCreateOrder] = useFetch();
  const router = useRouter();

  const createOrder = async () => {
    await requestCreateOrder(() => postOrder(cart.value));
    if (statusRequestCreateOrder.value === 'success') {
      clearCart();
      router.push({ name: routes.userOrders });
    }
  };

  return { createOrder, statusRequestCreateOrder };
};
