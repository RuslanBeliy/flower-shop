<script setup lang="ts">
import BaseTitle from '@/components/ui/BaseTitle.vue';
import BaseButton from '@/components/ui/BaseButton.vue';
import StarIcon from '@/components/icons/StarIcon.vue';
import { IFlower } from '@/types/flowers.ts';
import { formatCurrency } from '@/utils/formatCurrency.ts';

interface Props extends Omit<IFlower, 'comments'> {}

const emits = defineEmits(['add-cart']);
const props = defineProps<Props>();

const formatedPrice = formatCurrency(props.price);

const onClick = () => {
  emits('add-cart');
};
</script>

<template>
  <div class="full-flower">
    <div class="full-flower__img">
      <img :src="imageUrl" :alt="name" />
    </div>
    <div class="info">
      <BaseTitle tag="h2">{{ name }}</BaseTitle>
      <p>{{ description }}</p>

      <div class="info__rating">
        <div class="info__rating-count">
          <StarIcon />
          <strong>{{ rating }}/5</strong>
        </div>
      </div>

      <div class="info__footer">
        <BaseTitle>{{ formatedPrice }}/букет</BaseTitle>
        <BaseButton @click="onClick" mode="add-cart"
          >Добавить в корзину</BaseButton
        >
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.full-flower {
  padding: 30px;
  background: var(--white-color);
  display: flex;
  gap: 60px;

  &__img {
    flex-shrink: 0;
    width: 250px;
    height: 220px;
    border-radius: 5px;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
.info {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  p {
    margin: 20px 0 10px;
    font-size: 22px;
    line-height: 35px;
  }

  &__footer {
    margin-top: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
  }

  &__rating {
    margin-bottom: 30px;
  }

  &__rating-count {
    display: flex;
    align-items: center;
    gap: 5px;
    margin-bottom: 5px;

    svg {
      fill: var(--primary-color);
    }

    strong {
      color: var(--black-color);
    }
  }
}
</style>
