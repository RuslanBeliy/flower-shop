<script setup lang="ts">
import FlowerCard from '@/components/shop/FlowerCard.vue';
import { reactive } from 'vue';
import { IFlower } from '@/types/flowers.ts';
const flowers = reactive<IFlower[]>([
  {
    title: 'Daisy',
    price: '5',
    img: 'https://w.forfun.com/fetch/e7/e7b615ab7897a9d6d6fd156b298ef13c.jpeg',
  },
  {
    title: 'Sun flower',
    price: '5',
    img: 'https://w.forfun.com/fetch/24/245ada9ee8c2ec7b56e7f9c7e7060986.jpeg',
  },
  {
    title: 'White Rose',
    price: '3',
    img: 'https://w.forfun.com/fetch/e4/e4505ab5bb7e47d7a21a105205872dff.jpeg',
  },
  {
    title: 'Periwinkle',
    price: '6',
    img: 'https://w.forfun.com/fetch/18/18d34c45805785551a27b45327131a59.jpeg',
  },
]);
</script>

<template>
  <section class="best-sellers">
    <BaseTitle tag="h2" size="l" line center>Best sellers</BaseTitle>
    <ul class="list">
      <FlowerCard
        v-for="flower in flowers"
        :key="flower.title"
        :title="flower.title"
        :price="flower.price"
        :img="flower.img"
      />
    </ul>
  </section>
</template>

<style scoped lang="scss">
.best-sellers {
  margin-bottom: 100px;
}

.list {
  margin-top: 30px;
  display: grid;
  grid-template-columns: repeat(4, minmax(250px, auto));
  gap: 20px;
}
</style>
