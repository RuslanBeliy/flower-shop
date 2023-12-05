<script setup lang="ts">
import BaseContainer from '@/components/ui/BaseContainer.vue';
import FullFlowerCard from '@/components/shop/FullFlowerCard.vue';
import BaseTitle from '@/components/ui/BaseTitle.vue';
import ReviewCard from '@/components/reviews/ReviewCard.vue';
import BaseButton from '@/components/ui/BaseButton.vue';
</script>

<template>
  <BaseContainer>
    <section class="full-info">
      <FullFlowerCard />
      <div class="reviews">
        <BaseTitle>Отзывы</BaseTitle>

        <ul class="list">
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
        </ul>

        <div class="add-review">
          <textarea placeholder="Оставьте свой отзыв" rows="3"></textarea>
          <BaseButton>Отправить</BaseButton>
        </div>
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
}

.list {
  margin: 20px 0;

  li {
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
