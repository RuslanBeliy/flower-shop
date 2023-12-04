<script setup lang="ts">
import FlowerCard from '@/components/shop/FlowerCard.vue';
import FilterShop from '@/components/shop/FilterShop.vue';
</script>

<template>
  <BaseContainer>
    <section class="shop">
      <FilterShop />
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
    </section>
  </BaseContainer>
</template>

<style scoped lang="scss">
.shop {
  padding: 40px 0 100px;
}

.list {
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(4, minmax(200px, 1fr));
  margin-top: 40px;
}
</style>
