<script setup lang="ts">
import CommentCard from '@/components/comments/CommentCard.vue';
import BaseTitle from '@/components/ui/BaseTitle.vue';

const comments = [
  {
    name: 'Юлия',
    comment: 'Магазин супер, на праздники всегда цветы покупаю здесь😍',
    imageUrl: '/comments/1.png',
    rating: 5,
  },
  {
    name: 'Марина',
    comment:
      'В целом все супер, заказывала несколько раз, всё вовремя пришло, я довольна',
    imageUrl: '/comments/2.png',
    rating: 4,
  },
  {
    name: 'Ульяна',
    comment:
      'Спасибо большое продавцам, все сделали как я и хотела, магазин огонь🔥',
    imageUrl: '/comments/3.png',
    rating: 5,
  },
];
</script>

<template>
  <section class="comments-section">
    <BaseTitle tag="h2" size="l" center line>Комментарии</BaseTitle>
    <ul class="list">
      <CommentCard
        v-for="comment in comments"
        :key="comment.imageUrl"
        :name="comment.name"
        :comment="comment.comment"
        :image-url="comment.imageUrl"
        :rating="comment.rating"
      />
    </ul>
  </section>
</template>

<style scoped lang="scss">
.comments-section {
  padding-bottom: 100px;
}

.list {
  margin-top: 50px;
  display: grid;
  gap: 24px;
  grid-template-columns: repeat(3, minmax(300px, 1fr));
}
</style>
