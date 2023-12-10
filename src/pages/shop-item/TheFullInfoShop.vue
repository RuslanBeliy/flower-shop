<script setup lang="ts">
import BaseContainer from '@/components/ui/BaseContainer.vue';
import FullFlowerCard from '@/components/shop/FullFlowerCard.vue';
import BaseTitle from '@/components/ui/BaseTitle.vue';
import ReviewCard from '@/components/reviews/ReviewCard.vue';
import BaseButton from '@/components/ui/BaseButton.vue';
import { useFullInfoShop } from '@/pages/shop-item/hooks/useFullInfoShop.ts';
import BaseSpinner from '@/components/ui/BaseSpinner.vue';
import BaseRequestError from '@/components/ui/BaseRequestError.vue';
import { useCartStore } from '@/stores/cart.ts';
import { useAuthStore } from '@/stores/auth.ts';
import { routes } from '@/router.ts';

const {
  flower,
  comment,
  onSubmit,
  statusRequestFlower,
  errorRequestFlower,
  statusRequestComment,
} = useFullInfoShop();
const { addItemToCart } = useCartStore();
const { isAuth } = useAuthStore();
</script>

<template>
  <BaseContainer>
    <BaseSpinner v-if="statusRequestFlower === 'loading'" center top="50" />
    <BaseRequestError
      v-else-if="statusRequestFlower === 'error'"
      :error="errorRequestFlower"
    />
    <section
      v-else-if="statusRequestFlower === 'success' && flower"
      class="full-info"
    >
      <FullFlowerCard
        :_id="flower._id"
        :name="flower.name"
        :description="flower.description"
        :category="flower.category"
        :image-url="flower.imageUrl"
        :price="flower.price"
        :rating="flower.rating"
        @add-cart="addItemToCart(flower)"
      />

      <div class="reviews">
        <BaseTitle>Отзывы</BaseTitle>
        <p class="reviews__empty" v-if="!flower.comments.length">
          Отзывов нет, оставьте первый отзыв
        </p>
        <ul v-else class="list">
          <ReviewCard
            v-for="comment in flower.comments"
            :key="comment._id"
            :name="comment.author.userName"
            :image-url="comment.author.avatarUrl"
            :comment="comment.text"
          />
        </ul>

        <div v-if="isAuth" class="add-review">
          <textarea
            v-model="comment"
            placeholder="Оставьте свой отзыв"
            rows="3"
          ></textarea>
          <BaseButton
            :disabled="statusRequestComment === 'loading'"
            @click="onSubmit"
            >Отправить</BaseButton
          >
        </div>
        <BaseButton v-else :to="{ name: routes.login }" mode="flat"
          >авторизоваться</BaseButton
        >
      </div>
    </section>
  </BaseContainer>
</template>

<style scoped lang="scss">
.full-info {
  padding: 40px 0 100px;
  display: flex;
  align-items: start;
  gap: 40px;
}

.reviews {
  background: var(--white-color);
  border-radius: 5px;
  width: 300px;
  flex-shrink: 0;
  padding: 30px 20px;

  &__empty {
    margin: 10px 0;
  }
}

.list {
  margin: 20px 0;

  li {
    overflow: hidden;
    &:not(:last-child) {
      margin-bottom: 10px;
    }
  }
}

.add-review {
  textarea {
    font-family: Roboto, sans-serif;
    width: 100%;
    resize: vertical;
    border-radius: 5px;
    border-color: var(--third-color);
    margin-bottom: 5px;
    padding: 10px;
    font-size: 18px;
  }

  button {
    width: 100%;
  }
}
</style>
