<script setup lang="ts">
import UserIcon from '@/components/icons/UserIcon.vue';
import CartIcon from '@/components/icons/CartIcon.vue';
import { routes } from '@/router.ts';
import BaseContainer from '@/components/ui/BaseContainer.vue';
import BaseLogo from '@/components/ui/BaseLogo.vue';
import { useCartStore } from '@/stores/cart.ts';
const store = useCartStore();
</script>

<template>
  <header class="header">
    <BaseContainer class="wrap">
      <BaseLogo />

      <nav class="nav">
        <ul class="nav__list">
          <li>
            <RouterLink :to="{ name: routes.main }">Главная</RouterLink>
          </li>
          <li>
            <RouterLink :to="{ name: routes.shop }">Магазин</RouterLink>
          </li>
          <li>
            <RouterLink :to="{ name: routes.blog }">Блог</RouterLink>
          </li>
        </ul>
      </nav>

      <div class="user-block">
        <RouterLink :to="{ name: routes.userPanel }">
          <UserIcon />
        </RouterLink>
        <RouterLink :to="{ name: routes.cart }">
          <CartIcon />
          <span v-if="!store.isEmptyCart">{{ store.countItemsCart }}</span>
        </RouterLink>
      </div>
    </BaseContainer>
  </header>
</template>

<style scoped lang="scss">
.header {
  position: sticky;
  top: 0;
  z-index: 100;
  padding: 20px 0;
  background: var(--white-color);
  box-shadow: var(--shadow);
}

.wrap {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
}

.nav {
  &__list {
    display: flex;
    align-items: center;
    gap: 23px;

    a {
      transition: color 0.2s ease-in-out;

      &:hover,
      &:active {
        color: var(--hover-primary-color);
      }

      &.router-link-active {
        color: var(--primary-color);
      }
    }
  }
}

.user-block {
  display: flex;
  align-items: center;
  gap: 20px;

  a {
    position: relative;

    &:hover {
      svg {
        fill: var(--hover-primary-color);
      }
    }

    span {
      position: absolute;
      top: -7px;
      right: -7px;
      width: 20px;
      height: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      line-height: 0;
      border-radius: 50%;
      background: var(--white-color);
      color: var(--primary-color);
      border: 1px solid var(--primary-color);
      font-size: 14px;
    }

    svg {
      fill: var(--primary-color);
      transition: fill 0.2s ease-in-out;
    }
  }
}
</style>
