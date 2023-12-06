<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';
</script>

<template>
  <Swiper>
    <SwiperSlide>
      <slot />
    </SwiperSlide>
  </Swiper>
</template>

<style scoped lang="scss"></style>
