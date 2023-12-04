<script setup lang="ts">
import { IFlower } from '@/types/flowers.ts';

defineProps<IFlower>();
</script>

<template>
  <li class="flower-card">
    <div class="img">
      <img :src="img" alt="" />
    </div>
    <div class="info">
      <BaseTitle>{{ title }}</BaseTitle>
      <div class="info-bottom">
        <strong class="info-bottom__price">{{ price }}$</strong>
        <BaseButton mode="add-cart-flat">Add to cart</BaseButton>
      </div>
    </div>
  </li>
</template>

<style scoped lang="scss">
@import '../../styles/mixins';

.flower-card {
  max-width: 290px;
  background: var(--white-color);
  border-radius: 5px;
  overflow: hidden;

  @include card-hover;
}

.img {
  width: 100%;
  height: 220px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.info {
  padding: 15px;
  min-height: 110px;
  display: flex;
  flex-direction: column;
}

.info-bottom {
  margin-top: auto;
  display: flex;
  align-items: center;
  gap: 10px;

  &__price {
    margin-right: auto;

    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
}
</style>
