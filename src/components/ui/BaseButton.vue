<script setup lang="ts">
import CartIcon from '@/components/icons/CartIcon.vue';
import { computed } from 'vue';

interface Props {
  mode?: 'flat' | 'main' | 'add-cart' | 'add-cart-flat';
  to?: { name: string } | string;
}
const props = withDefaults(defineProps<Props>(), {
  mode: 'main',
});

const isIcon = computed(
  () => props.mode === 'add-cart' || props.mode === 'add-cart-flat',
);
</script>

<template>
  <RouterLink v-if="to" :to="to" :class="`btn ${mode}`">
    <CartIcon v-if="isIcon" />
    <slot />
  </RouterLink>

  <button v-else :class="`btn ${mode}`" v-bind="$attrs">
    <CartIcon v-if="isIcon" />
    <slot />
  </button>
</template>

<style scoped lang="scss">
.btn {
  font-family: Roboto, sans-serif;
  border: none;
  cursor: pointer;
  padding: 8px 20px;
  border-radius: 5px;
  color: var(--white-color);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  transition: all 0.2s ease-in-out;

  &[disabled] {
    cursor: auto;
    color: var(--third-color);
    pointer-events: none;
  }

  svg {
    width: 20px;
    height: 20px;
    transition: fill 0.2s ease-in-out;
  }
}

.main {
  background: var(--primary-color);

  &:hover {
    background: var(--hover-primary-color);
  }

  &[disabled] {
    cursor: auto;
    opacity: 0.4;
  }
}

.add-cart {
  display: flex;
  align-items: center;
  gap: 10px;
  background: var(--primary-color);
  color: var(--white-color);
  transition: all 0.1s ease-in;

  &:hover,
  &:active {
    background: var(--hover-primary-color);
  }

  &:active {
    transform: scale(0.9);
  }

  svg {
    fill: var(--white-color);
  }
}

.add-cart-flat {
  display: flex;
  align-items: center;
  gap: 10px;
  background: transparent;
  color: var(--primary-color);
  transition: all 0.1s ease-in;

  &:hover,
  &:active {
    color: var(--hover-primary-color);
    background: rgba(254, 95, 30, 0.1);

    svg {
      fill: var(--hover-primary-color);
    }
  }

  &:active {
    transform: scale(0.9);
  }

  svg {
    fill: var(--primary-color);
  }
}

.flat {
  padding: 0;
  background: transparent;
  color: var(--primary-color);

  &:hover,
  &:active {
    color: var(--hover-primary-color);
  }
}
</style>
