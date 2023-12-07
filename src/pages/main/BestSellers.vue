<script setup lang="ts">
import FlowerCard from '@/components/shop/FlowerCard.vue';
import BaseTitle from '@/components/ui/BaseTitle.vue';
import { useBestSellers } from '@/pages/main/hooks/useBestSellers.ts';

import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, A11y, Autoplay } from 'swiper/modules';

import 'swiper/scss';
import 'swiper/scss/pagination';
import BaseSpinner from '@/components/ui/BaseSpinner.vue';
import BaseRequestError from '@/components/ui/BaseRequestError.vue';

const { flowers, status, error, request } = useBestSellers();
</script>

<template>
  <section class="best-sellers">
    <BaseTitle tag="h2" size="l" line center>Популярные заказы</BaseTitle>

    <BaseSpinner v-if="status === 'loading'" top="30" center />
    <BaseRequestError
      v-else-if="status === 'error'"
      :error="error"
      button-text="Запросить еще раз"
      @try-again="request"
    />
    <Swiper
      v-else
      :modules="[Pagination, A11y, Autoplay]"
      :slides-per-view="4"
      :space-between="20"
      autoplay
      :pagination="{ clickable: true }"
      class="swiper"
    >
      <SwiperSlide v-for="flower in flowers" class="swiper__slide">
        <FlowerCard
          :key="flower._id"
          :_id="flower._id"
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
