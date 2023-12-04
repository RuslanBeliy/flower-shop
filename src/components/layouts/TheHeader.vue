<script setup lang="ts">
import UserIcon from '@/components/icons/UserIcon.vue';
import CartIcon from '@/components/icons/CartIcon.vue';
import { routes } from '@/router.ts';
</script>

<template>
  <header class="header">
    <BaseContainer class="wrap">
      <BaseLogo />

      <nav class="nav">
        <ul class="nav__list">
          <li>
            <RouterLink :to="{ name: routes.main }">Home</RouterLink>
          </li>
          <li>
            <RouterLink :to="{ name: routes.shop }">Shop</RouterLink>
          </li>
          <li>
            <RouterLink :to="{ name: routes.blog }">Blog</RouterLink>
          </li>
          <li>
            <RouterLink :to="{ name: routes.about }">About</RouterLink>
          </li>
        </ul>
      </nav>

      <div class="user-block">
        <RouterLink :to="{ name: routes.userPanel }">
          <UserIcon />
        </RouterLink>
        <RouterLink :to="{ name: routes.cart }">
          <CartIcon />
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
    &:hover {
      svg {
        fill: var(--hover-primary-color);
      }
    }
    svg {
      fill: var(--primary-color);
      transition: fill 0.2s ease-in-out;
    }
  }
}
</style>
