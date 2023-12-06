<script setup lang="ts">
import BaseUserPanel from '@/components/ui/BaseUserPanel.vue';
import BaseTitle from '@/components/ui/BaseTitle.vue';
import OrderCard from '@/components/orders/OrderCard.vue';
</script>

<template>
  <BaseUserPanel>
    <template #header>
      <BaseTitle tag="h2" size="l">Ваши заказы</BaseTitle>
    </template>

    <ul class="list">
      <li>
        <OrderCard />
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
