<script setup lang="ts">
import FlowerCard from '@/components/shop/FlowerCard.vue';
import ControlShop from '@/components/shop/ControlShop.vue';
import BaseContainer from '@/components/ui/BaseContainer.vue';
import BasePagination from '@/components/ui/BasePagination.vue';
</script>

<template>
  <BaseContainer>
    <section class="shop">
      <ControlShop />
      <ul class="list">
        <FlowerCard
          title="Periwinkle"
          img="https://w.forfun.com/fetch/6f/6f7726d490079d34644f286090b81217.jpeg"
          price="5"
        />
        <FlowerCard
          title="Periwinkle"
          img="https://w.forfun.com/fetch/6f/6f7726d490079d34644f286090b81217.jpeg"
          price="5"
        />
        <FlowerCard
          title="Periwinkle"
          img="https://w.forfun.com/fetch/6f/6f7726d490079d34644f286090b81217.jpeg"
          price="5"
        />
        <FlowerCard
          title="Periwinkle"
          img="https://w.forfun.com/fetch/6f/6f7726d490079d34644f286090b81217.jpeg"
          price="5"
        />
        <FlowerCard
          title="Periwinkle"
          img="https://w.forfun.com/fetch/6f/6f7726d490079d34644f286090b81217.jpeg"
          price="5"
        />
        <FlowerCard
          title="Periwinkle"
          img="https://w.forfun.com/fetch/6f/6f7726d490079d34644f286090b81217.jpeg"
          price="5"
        />
        <FlowerCard
          title="Periwinkle"
          img="https://w.forfun.com/fetch/6f/6f7726d490079d34644f286090b81217.jpeg"
          price="5"
        />
      </ul>
      <BasePagination :count-pages="9" />
    </section>
  </BaseContainer>
</template>

<style scoped lang="scss">
.shop {
  padding: 40px 0;
}

.list {
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(4, minmax(200px, 1fr));
  margin: 40px 0;
}
</style>
