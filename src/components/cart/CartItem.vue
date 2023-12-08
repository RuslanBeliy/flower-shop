<script setup lang="ts">
import BaseTitle from '@/components/ui/BaseTitle.vue';
import BaseButton from '@/components/ui/BaseButton.vue';
import TrashIcon from '@/components/icons/TrashIcon.vue';
import { ICart } from '@/stores/cart.ts';
import { formatCurrency } from '@/utils/formatCurrency.ts';
import { computed } from 'vue';

interface Props
  extends Pick<ICart, 'name' | 'imageUrl' | 'countItems' | 'price'> {}

const emits = defineEmits(['delete', 'increment', 'decrement', 'count-items']);
const props = defineProps<Props>();

const formatedTotalPrice = computed(() =>
  formatCurrency(props.price * props.countItems),
);
const formatedPrice = formatCurrency(props.price);

const deleteItem = () => {
  emits('delete');
};
const inc = () => {
  emits('increment');
};
const dec = () => {
  emits('decrement');
};
const count = (e: Event) => {
  const val = +(e.target as HTMLInputElement).value;
  emits('count-items', val);
};
</script>

<template>
  <li class="cart">
    <div class="cart__img">
      <img :src="imageUrl" :alt="name" />
    </div>
    <div class="cart__info">
      <div class="cart__info-header">
        <BaseTitle tag="h2">{{ name }}</BaseTitle>
        <BaseButton @click="deleteItem" mode="flat">
          <TrashIcon />
        </BaseButton>
      </div>
      <div class="cart__info-footer">
        <div class="cart__count-items">
          <span>букет: {{ formatedPrice }}</span>
          <div class="cart__control-items">
            <BaseButton @click="dec" mode="flat" :disabled="countItems === 1">
              -
            </BaseButton>
            <input type="number" :value="countItems" @input="count" min="1" />
            <BaseButton @click="inc" mode="flat">+</BaseButton>
          </div>
        </div>
        <BaseTitle tag="h2">Итого: {{ formatedTotalPrice }}</BaseTitle>
      </div>
    </div>
  </li>
</template>

<style scoped lang="scss">
.cart {
  display: flex;
  gap: 30px;

  &__img {
    width: 146px;
    height: 146px;
    border-radius: 5px;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &__info {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  &__info-header {
    display: flex;
    align-items: center;
    gap: 20px;
    justify-content: space-between;
  }

  &__info-footer {
    display: flex;
    align-items: end;
    justify-content: space-between;
    gap: 20px;
  }

  &__count-items {
    span {
      font-size: 18px;
      line-height: normal;
    }
  }

  &__control-items {
    margin-top: 15px;
    width: 70px;
    height: 30px;
    border: 1px solid var(--primary-color);
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    input[type='number'] {
      -moz-appearance: textfield;
    }

    input {
      padding: 0 1px;
      width: 20px;
      height: 100%;
      border: none;
      outline: none;
      text-align: center;
    }

    button {
      flex-grow: 1;
      height: 100%;
      color: var(--primary-color);
      font-size: 20px;
      transition: all 0.2s ease-in-out;

      &:hover {
        background: var(--primary-color);
        color: var(--white-color);
      }

      &[disabled] {
        background: transparent;
        color: var(--white-color);
      }
    }
  }
}
</style>
