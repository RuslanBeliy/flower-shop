<script setup lang="ts">
import FlowerCard from '@/components/shop/FlowerCard.vue';
import ControlShop from '@/components/shop/ControlShop.vue';
import BaseContainer from '@/components/ui/BaseContainer.vue';
import BasePagination from '@/components/ui/BasePagination.vue';
import { useShop } from '@/pages/shop/hooks/useShop.ts';
import BaseRequestError from '@/components/ui/BaseRequestError.vue';
import BaseSpinner from '@/components/ui/BaseSpinner.vue';
const {
  flowers,
  status,
  error,
  request,
  countPage,
  requestParams,
  isShowPagination,
  handleRequest,
} = useShop();
</script>

<template>
  <BaseContainer>
    <section class="shop">
      <ControlShop
        :category="requestParams.category"
        :search="requestParams.search"
        :sort-by="requestParams.sortBy"
        @get-search="handleRequest({ search: $event })"
        @set-sort="handleRequest({ sortBy: $event })"
        @set-category="handleRequest({ category: $event, page: 1 })"
      />

      <BaseSpinner v-if="status === 'loading'" center top="30" />
      <BaseRequestError
        v-else-if="status === 'error'"
        :error="error"
        button-text="Запросить еще раз"
        @try-again="request"
      />
      <BaseRequestError
        v-else-if="status === 'success' && !flowers?.length"
        error="По вашему запросу ничего не найдено 😔"
      />
      <ul v-else class="list">
        <FlowerCard
          v-for="flower in flowers"
          :key="flower._id"
          :_id="flower._id"
          :name="flower.name"
          :price="flower.price"
          :image-url="flower.imageUrl"
        />
      </ul>

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
</style>
