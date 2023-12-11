<script setup lang="ts">
import FlowerCard from '@/components/shop/FlowerCard.vue';
import ControlShop from '@/components/shop/ControlShop.vue';
import BaseContainer from '@/components/ui/BaseContainer.vue';
import BasePagination from '@/components/ui/BasePagination.vue';
import BaseRequestError from '@/components/ui/BaseRequestError.vue';
import BaseSpinner from '@/components/ui/BaseSpinner.vue';
import { useShop } from '@/pages/shop/hooks/useShop.ts';
import { useCartStore } from '@/stores/cart.ts';

const {
  requestParams,
  handleRequest,
  flowers,
  isShowPagination,
  errorRequestFlowers,
  statusRequestFlowers,
  countPage,
} = useShop();

const { addItemToCart } = useCartStore();
</script>

<template>
  <BaseContainer>
    <section class="shop">
      <ControlShop
        :category="requestParams.category"
        :search="requestParams.search"
        :sort-by="requestParams.sortBy"
        @get-search="handleRequest({ search: $event, page: 1 })"
        @set-sort="handleRequest({ sortBy: $event })"
        @set-category="handleRequest({ category: $event, page: 1 })"
      />

      <BaseSpinner v-if="statusRequestFlowers === 'loading'" center top="30" />
      <BaseRequestError
        v-else-if="statusRequestFlowers === 'error'"
        :error="errorRequestFlowers"
      />
      <BaseRequestError
        v-else-if="statusRequestFlowers === 'success' && !flowers?.length"
        error="По вашему запросу ничего не найдено 😔"
      />
      <TransitionGroup v-else tag="ul" name="list" class="list">
        <FlowerCard
          v-for="flower in flowers"
          :key="flower._id"
          :_id="flower._id"
          :name="flower.name"
          :price="flower.price"
          :image-url="flower.imageUrl"
          @add-cart="addItemToCart(flower)"
        />
      </TransitionGroup>

      <BasePagination
        v-if="isShowPagination"
        :count-pages="countPage"
        :current-page="requestParams.page"
        @current-page="handleRequest({ page: $event })"
      />
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

.list-enter-active {
  animation: list-add 0.5s ease-in-out;
}

.list-leave-active {
  position: absolute;
  animation: list-delete 0s ease-in-out forwards;
}

.list-move {
  transition: transform 0.5s ease;
}

@keyframes list-add {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes list-delete {
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateX(30px);
  }
}
</style>
