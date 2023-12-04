<script setup lang="ts">
import HeroSection from './HeroSection.vue';
import BestSellers from './BestSellers.vue';
import LatestPosts from './LatestPosts.vue';
import CommentsSection from '@/pages/main/CommentsSection.vue';
</script>

<template>
  <BaseContainer>
    <HeroSection />
    <BestSellers />
    <LatestPosts />
    <CommentsSection />
  </BaseContainer>
</template>

<style scoped lang="scss"></style>
