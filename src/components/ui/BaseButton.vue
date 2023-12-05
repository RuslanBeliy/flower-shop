<script setup lang="ts">
import CartIcon from '@/components/icons/CartIcon.vue';
import { computed } from 'vue';

interface Props {
  mode?: 'flat' | 'main' | 'add-cart' | 'add-cart-flat';
}
const props = withDefaults(defineProps<Props>(), {
  mode: 'main',
});

const isIcon = computed(
  () => props.mode === 'add-cart' || props.mode === 'add-cart-flat',
);
</script>

<template>
  <button :class="`btn ${mode}`">
    <CartIcon v-if="isIcon" />
    <slot />
  </button>
</template>

<style scoped lang="scss">
.btn {
  font-family: Roboto, sans-serif;
  border: none;
  cursor: pointer;
  padding: 10px 20px;
  border-radius: 5px;
  color: var(--white-color);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  transition: all 0.2s ease-in-out;

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
}

.add-cart {
  display: flex;
  align-items: center;
  gap: 10px;
  background: var(--primary-color);
  color: var(--white-color);

  &:hover {
    background: var(--hover-primary-color);
  }

  svg {
    fill: var(--white-color);
  }
}

.add-cart-flat {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 0;
  background: transparent;
  color: var(--primary-color);

  &:hover {
    color: var(--hover-primary-color);

    svg {
      fill: var(--hover-primary-color);
    }
  }

  svg {
    fill: var(--primary-color);
  }
}

.flat {
  padding: 0;
  background: transparent;
  color: inherit;
}
</style>
