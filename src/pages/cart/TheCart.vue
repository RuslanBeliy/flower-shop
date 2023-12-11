<script setup lang="ts">
import BaseContainer from '@/components/ui/BaseContainer.vue';
import BaseTitle from '@/components/ui/BaseTitle.vue';
import CartItem from '@/components/cart/CartItem.vue';
import BaseButton from '@/components/ui/BaseButton.vue';
import CartIcon from '@/components/icons/CartIcon.vue';
import { useCartStore } from '@/stores/cart.ts';
import { storeToRefs } from 'pinia';
import { formatCurrency } from '@/utils/formatCurrency.ts';
import { computed } from 'vue';
import { useCart } from '@/pages/cart/hooks/useCart.ts';

const store = useCartStore();
const { cart, countItemsCart, totalPrice, isEmptyCart } = storeToRefs(store);
const { deleteItemFromCart, handleCountItems } = store;

const { statusRequestCreateOrder, createOrder } = useCart();

const formatedTotalPrice = computed(() => formatCurrency(totalPrice.value));
</script>

<template>
  <BaseContainer>
    <section class="cart-page">
      <template v-if="!isEmptyCart">
        <div class="cart-page__left">
          <BaseTitle tag="h1" size="l">Корзина</BaseTitle>
          <TransitionGroup tag="ul" name="list" class="cart-page__list">
            <CartItem
              v-for="el in cart"
              :key="el._id"
              :name="el.name"
              :image-url="el.imageUrl"
              :count-items="el.countItems"
              :price="el.price"
              @delete="deleteItemFromCart(el._id)"
              @increment="handleCountItems(el._id, 'inc')"
              @decrement="handleCountItems(el._id, 'dec')"
              @count-items="handleCountItems(el._id, $event)"
            />
          </TransitionGroup>
        </div>
        <div class="cart-page__total-price">
          <p>
            Количество: <strong>{{ countItemsCart }}</strong> Итого:
            <strong>{{ formatedTotalPrice }}</strong>
          </p>
          <BaseButton
            :disabled="statusRequestCreateOrder === 'loading'"
            @click="createOrder"
            >Купить</BaseButton
          >
        </div>
      </template>
      <div v-else class="cart-page__empty">
        <CartIcon />
      </div>
    </section>
  </BaseContainer>
</template>

<style scoped lang="scss">
.cart-page {
  padding: 40px 0;
  display: flex;
  gap: 40px;

  &__left {
    background: var(--white-color);
    padding: 40px;
    border-radius: 5px;
    flex-grow: 1;
  }

  &__list {
    margin-top: 50px;

    li {
      &:not(:last-child) {
        margin-bottom: 30px;
      }
    }
  }

  &__total-price {
    width: 380px;
    padding: 30px 20px;
    background: var(--white-color);
    align-self: start;
    border-radius: 5px;

    p {
      color: var(--black-color);
      font-size: 20px;
      line-height: normal;
      margin-bottom: 20px;
    }

    button {
      width: 100%;
    }
  }

  &__empty {
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--white-color);
    padding: 40px;
    border-radius: 5px;
    height: 400px;

    svg {
      width: 260px;
      height: 230px;
      fill: var(--third-color);
    }
  }
}

.list-enter-active {
  animation: list-add 0.3s ease-in-out;
}

.list-leave-active {
  position: absolute;
  animation: list-delete 0.5s ease-in-out forwards;
}

.list-move {
  transition: transform 0.8s ease;
}

@keyframes list-add {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes list-delete {
  from {
    opacity: 1;
    transform: translateX(0);
  }
  to {
    opacity: 0;
    transform: translateX(-100px);
  }
}
</style>
