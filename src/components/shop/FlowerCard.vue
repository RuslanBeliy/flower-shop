<script setup lang="ts">
import { IFlower } from '@/types/flowers.ts';
import BaseButton from '@/components/ui/BaseButton.vue';
import BaseTitle from '@/components/ui/BaseTitle.vue';
import { routes } from '@/router.ts';
import { computed } from 'vue';
import { formatCurrency } from '@/utils/formatCurrency.ts';

interface Props extends Pick<IFlower, 'imageUrl' | 'name' | 'price' | '_id'> {
  tag?: 'li' | 'div';
}

const emits = defineEmits(['add-cart']);
const props = withDefaults(defineProps<Props>(), {
  tag: 'li',
});
const intlPrice = formatCurrency(props.price);

const linkTo = computed(() => ({
  name: routes.shopFullInfo,
  params: { id: props._id },
}));

const onClick = () => {
  emits('add-cart');
};
</script>

<template>
  <component :is="tag" class="flower-card">
    <RouterLink :to="linkTo" class="link-to">
      <div class="img">
        <img :src="imageUrl" alt="" />
      </div>
      <div class="info">
        <BaseTitle>{{ name }}</BaseTitle>
        <div class="info-bottom">
          <strong class="info-bottom__price">{{ intlPrice }}</strong>
          <BaseButton @click.prevent="onClick" mode="add-cart-flat"
            >В корзину</BaseButton
          >
        </div>
      </div>
    </RouterLink>
  </component>
</template>

<style scoped lang="scss">
@import '../../styles/mixins';

.flower-card {
  max-width: 290px;
  height: 100%;
  background: var(--white-color);
  border-radius: 5px;
  overflow: hidden;

  @include card-hover;
}

.link-to {
  display: flex;
  flex-direction: column;
  height: 100%;
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
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
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
