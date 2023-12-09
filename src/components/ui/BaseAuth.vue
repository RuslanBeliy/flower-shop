<script setup lang="ts">
import HomeIcon from '@/components/icons/HomeIcon.vue';
import BaseTitle from '@/components/ui/BaseTitle.vue';
import BaseRequestError from './BaseRequestError.vue';

interface Props {
  imgSrc: string;
  title: string;
  error?: string | null;
}

defineProps<Props>();
</script>

<template>
  <div class="base-auth">
    <div class="left">
      <div class="header">
        <BaseTitle tag="h2" size="l">{{ title }}</BaseTitle>
        <RouterLink to="/"><HomeIcon /> На главную</RouterLink>
      </div>
      <BaseRequestError v-if="error" :error="error" bottom="20" small />
      <slot />
    </div>
    <div class="img">
      <img :src="imgSrc" alt="" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.base-auth {
  display: flex;
  max-width: 900px;
  background: var(--white-color);
}

.left {
  width: 450px;
  padding: 30px 50px;
}

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 50px;
}

.img {
  width: 450px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
