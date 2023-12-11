<script setup lang="ts">
import { computed } from 'vue';
import EyeIcon from '@/components/icons/EyeIcon.vue';
import BaseTitle from '@/components/ui/BaseTitle.vue';
import { routes } from '@/router.ts';
import { IPost } from '@/types/posts.ts';
import { textCropping } from '@/utils/textСropping.ts';

interface Props extends IPost {}
const props = defineProps<Props>();

const linkTo = computed(() => ({
  name: routes.blogFullInfo,
  params: { id: props._id },
}));

const cropedText = computed(() => textCropping(props.text, 50) + '...');
</script>

<template>
  <li class="post-card">
    <div class="img">
      <img :src="imageUrl" :alt="title" />
    </div>
    <div class="info">
      <BaseTitle>{{ title }}</BaseTitle>
      <p class="info__descr">
        {{ cropedText }}
      </p>
      <div class="info__bottom">
        <div class="info__icon">
          <EyeIcon />
          <span>{{ viewsCount }}</span>
        </div>
        <RouterLink :to="linkTo" class="info__link">Перейти к посту</RouterLink>
      </div>
    </div>
  </li>
</template>

<style scoped lang="scss">
.post-card {
  display: flex;
  flex-direction: column;
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
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 15px;

  &__descr {
    margin: 15px 0 25px 0;
    line-height: 25px;
  }

  &__bottom {
    margin-top: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
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
