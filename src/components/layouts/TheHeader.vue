<script setup lang="ts">
import { ref } from 'vue';
import UserIcon from '@/components/icons/UserIcon.vue';
import CartIcon from '@/components/icons/CartIcon.vue';
import BaseContainer from '@/components/ui/BaseContainer.vue';
import BaseLogo from '@/components/ui/BaseLogo.vue';
import BaseBurger from '@/components/ui/BaseBurger.vue';
import { useCartStore } from '@/stores/cart.ts';
import { routes } from '@/router.ts';

const store = useCartStore();

const isShowMobileMenu = ref(false);

const closeMobileMenu = () => (isShowMobileMenu.value = false);
</script>

<template>
  <header class="header">
    <BaseContainer class="wrap">
      <BaseLogo />

      <nav class="nav" :class="{ show: isShowMobileMenu }">
        <ul class="nav__list">
          <li>
            <RouterLink :to="{ name: routes.main }" @click="closeMobileMenu"
              >Главная</RouterLink
            >
          </li>
          <li>
            <RouterLink :to="{ name: routes.shop }" @click="closeMobileMenu"
              >Магазин</RouterLink
            >
          </li>
          <li>
            <RouterLink :to="{ name: routes.blog }" @click="closeMobileMenu"
              >Блог</RouterLink
            >
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
        <BaseBurger
          :value="isShowMobileMenu"
          @is-open="isShowMobileMenu = $event"
        />
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
  @media (max-width: 576px) {
    opacity: 0;
    visibility: hidden;
    position: absolute;
    top: 78px;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.9);
    padding: 20px 0;
    transition: all 0.3s ease;

    &.show {
      opacity: 1;
      visibility: visible;
    }
  }

  &__list {
    display: flex;
    align-items: center;
    gap: 23px;

    @media (max-width: 576px) {
      flex-direction: column;
      font-size: 30px;
      color: #fff;
    }

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
