<script setup lang="ts">
import { ResponseOrders } from '@/types/orders.ts';
import { formatCurrency } from '@/utils/formatCurrency.ts';

interface Props extends Pick<ResponseOrders, 'order' | 'createdAt' | '_id'> {}

const props = defineProps<Props>();

const code = props._id.slice(0, 5);
const date = new Intl.DateTimeFormat('ru-RU').format(new Date(props.createdAt));
const price = props.order.reduce((acc, el) => acc + el.price, 0);
const formatedPrice = formatCurrency(price);
</script>

<template>
  <li class="order-card">
    <div class="header">
      <span
        >заказ № <strong>{{ code }}</strong></span
      >
      <span
        >дата заказа <strong>{{ date }}</strong></span
      >
      <span
        >цена <strong>{{ formatedPrice }}</strong></span
      >
    </div>
    <div class="orders">
      <div v-for="o in order" class="orders__img">
        <img :src="o.imageUrl" :alt="o.name" />
      </div>
    </div>
  </li>
</template>

<style scoped lang="scss">
.header {
  margin-bottom: 25px;
  span {
    margin-right: 30px;
    font-size: 20px;

    strong {
      font-weight: 400;
      color: var(--black-color);
    }
  }
}

.orders {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  &__img {
    width: 110px;
    height: 110px;
    border-radius: 5px;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
</style>
