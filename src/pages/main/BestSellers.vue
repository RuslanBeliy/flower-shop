<script setup lang="ts">
import FlowerCard from '@/components/shop/FlowerCard.vue';
import BaseTitle from '@/components/ui/BaseTitle.vue';
import { useBestSellers } from '@/hooks/useBestSellers.ts';

import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, A11y } from 'swiper/modules';

import 'swiper/scss';
import 'swiper/scss/pagination';

const { flowers } = useBestSellers();
</script>

<template>
  <section class="best-sellers">
    <BaseTitle tag="h2" size="l" line center>Best sellers</BaseTitle>

    <Swiper
      :modules="[Pagination, A11y]"
      :slides-per-view="4"
      :space-between="20"
      :pagination="{ clickable: true }"
      class="swiper"
    >
      <SwiperSlide v-for="flower in flowers" class="swiper__slide">
        <FlowerCard
          :key="flower._id"
          :name="flower.name"
          :price="flower.price"
          :image-url="flower.imageUrl"
          tag="div"
        />
      </SwiperSlide>
    </Swiper>
  </section>
</template>

<style scoped lang="scss">
.best-sellers {
  margin-bottom: 50px;
}

.swiper {
  padding: 50px 0;
  &__slide {
    height: auto;
  }
}
</style>
