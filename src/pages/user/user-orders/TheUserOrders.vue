<script setup lang="ts">
import BaseUserPanel from '@/components/ui/BaseUserPanel.vue';
import BaseTitle from '@/components/ui/BaseTitle.vue';
import OrderCard from '@/components/orders/OrderCard.vue';
import { useUserOrders } from '@/pages/user/user-orders/hooks/useUserOrders.ts';
import BaseSpinner from '@/components/ui/BaseSpinner.vue';
import BaseRequestError from '@/components/ui/BaseRequestError.vue';

const { orders, statusRequestOrders, errorRequestOrders } = useUserOrders();
</script>

<template>
  <BaseUserPanel>
    <template #header>
      <BaseTitle tag="h2" size="l">Ваши заказы</BaseTitle>
    </template>

    <BaseSpinner v-if="statusRequestOrders === 'loading'" top="50" center />
    <BaseRequestError
      v-else-if="statusRequestOrders === 'error'"
      :error="errorRequestOrders"
    />
    <BaseRequestError
      v-else-if="statusRequestOrders === 'success' && !orders?.length"
      error="Вы еще ничего не заказали"
    />
    <ul v-else class="list">
      <li v-for="order in orders" :key="order._id">
        <OrderCard
          :_id="order._id"
          :created-at="order.createdAt"
          :order="order.order"
        />
      </li>
    </ul>
  </BaseUserPanel>
</template>

<style scoped lang="scss">
.list {
  li {
    &:not(:last-child) {
      margin-bottom: 40px;
    }
  }
}
</style>
