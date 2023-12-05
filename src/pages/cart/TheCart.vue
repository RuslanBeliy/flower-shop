<script setup lang="ts">
import BaseContainer from '@/components/ui/BaseContainer.vue';
import BaseTitle from '@/components/ui/BaseTitle.vue';
import CartItem from '@/components/cart/CartItem.vue';
import BaseButton from '@/components/ui/BaseButton.vue';
import CartIcon from '@/components/icons/CartIcon.vue';

const isEmptyCart = false;
</script>

<template>
  <BaseContainer>
    <section class="cart-page">
      <template v-if="!isEmptyCart">
        <div class="cart-page__left">
          <BaseTitle>Your cart</BaseTitle>
          <ul class="cart-page__list">
            <CartItem />
            <CartItem />
            <CartItem />
          </ul>
        </div>
        <div class="cart-page__total-price">
          <p>Subtotal for 3 items: <strong>62$</strong></p>
          <BaseButton>Checkout</BaseButton>
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
</style>
