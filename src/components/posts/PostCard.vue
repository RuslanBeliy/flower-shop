<script setup lang="ts">
import HeartIcon from '@/components/icons/HeartIcon.vue';
import EyeIcon from '@/components/icons/EyeIcon.vue';
import BaseTitle from '@/components/ui/BaseTitle.vue';
import { computed } from 'vue';
import { routes } from '@/router.ts';

const linkTo = computed(() => ({
  name: routes.blogFullInfo,
  params: { id: 1 },
}));
</script>

<template>
  <li class="post-card">
    <div class="img">
      <img
        src="https://w.forfun.com/fetch/24/245ada9ee8c2ec7b56e7f9c7e7060986.jpeg"
        alt=""
      />
    </div>
    <div class="info">
      <BaseTitle>Best flowers for inside home</BaseTitle>
      <p class="info__descr">
        All the flowers are best for your lovely house just get the one you love
        the most 😊
      </p>
      <div class="info__bottom">
        <div class="info__active">
          <div class="info__icon">
            <HeartIcon />
            <span>15</span>
          </div>
          <div class="info__icon">
            <EyeIcon />
            <span>2001</span>
          </div>
        </div>
        <RouterLink :to="linkTo" class="info__link"> Read more </RouterLink>
      </div>
    </div>
  </li>
</template>

<style scoped lang="scss">
.post-card {
  background: var(--white-color);
  border-radius: 5px;
  overflow: hidden;
}

.img {
  height: 240px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.info {
  padding: 15px;

  &__descr {
    margin: 15px 0 25px 0;
    line-height: 25px;
  }

  &__bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
  }

  &__active {
    display: flex;
    align-items: center;
    gap: 20px;
  }

  &__icon {
    display: flex;
    align-items: center;
    gap: 3px;
    font-size: 12px;

    svg {
      fill: var(--secondary-color);
    }
  }

  &__link {
    padding: 10px 0;
    font-size: 18px;
    color: var(--black-color);
    transition: color 0.2s ease-in-out;

    &:hover {
      color: var(--primary-color);
    }
  }
}
</style>
