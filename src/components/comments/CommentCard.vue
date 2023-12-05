<script setup lang="ts">
import BaseAvatar from '@/components/ui/BaseAvatar.vue';
import BaseRating from '@/components/ui/BaseRating.vue';
</script>

<template>
  <li class="comment-card">
    <div class="user-info">
      <BaseAvatar
        width="58"
        height="58"
        src="https://i.pinimg.com/originals/01/c7/b1/01c7b181419e15cc614b2297a0e0b959.jpg"
      />
      <strong>Atena</strong>
    </div>

    <p class="comment">
      i’m buying flower from them every weak, always fresh flowers and
      beutiful😍🌻... love’em so nuch..keep going 💯💯
    </p>

    <BaseRating rating="4" />
  </li>
</template>

<style scoped lang="scss">
@import '../../styles/mixins';

.comment-card {
  padding: 20px 20px 20px 100px;
  max-width: 385px;
  background: var(--white-color);

  @include card-hover;
}

.user-info {
  transform: translateX(-74px);
  display: flex;
  align-items: center;
  gap: 16px;

  strong {
    color: var(--black-color);
    font-size: 22px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
}

.comment {
  font-size: 20px;
  line-height: 30px;
  margin-bottom: 20px;
}
</style>
