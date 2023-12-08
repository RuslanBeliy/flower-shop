import { defineStore } from 'pinia';
import { IFlower } from '@/types/flowers.ts';
import { computed, ref, watch } from 'vue';

export interface ICart extends IFlower {
  countItems: number;
}
export const useCartStore = defineStore('cart', () => {
  const LS = localStorage.getItem('cart');
  const cartLS = LS ? JSON.parse(LS) : [];

  const cart = ref<ICart[]>(cartLS);
  const countItemsCart = computed(() =>
    cart.value.reduce((acc, el) => acc + el.countItems, 0),
  );
  const totalPrice = computed(() =>
    cart.value.reduce((acc, el) => acc + el.price * el.countItems, 0),
  );
  const isEmptyCart = computed(() => !countItemsCart.value);

  const addItemToCart = (flower: IFlower) => {
    const foundItem = cart.value.find((el) => el._id === flower._id);

    if (foundItem) {
      foundItem.countItems += 1;
      return;
    }

    cart.value.push({ countItems: 1, ...flower });
  };

  const deleteItemFromCart = (id: string) => {
    cart.value = cart.value.filter((el) => el._id !== id);
  };

  const handleCountItems = (id: string, val: 'inc' | 'dec' | number) => {
    const item = cart.value.find((el) => el._id === id);

    if (item && val === 'inc') {
      item.countItems += 1;
      return;
    }
    if (item && val === 'dec') {
      item.countItems -= 1;
      return;
    }

    if (item && typeof val === 'number' && val > 0) item.countItems = val;
  };

  watch(cart, () => localStorage.setItem('cart', JSON.stringify(cart.value)), {
    deep: true,
  });

  return {
    cart,
    countItemsCart,
    totalPrice,
    isEmptyCart,
    addItemToCart,
    deleteItemFromCart,
    handleCountItems,
  };
});
