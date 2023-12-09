<script setup lang="ts">
import TheHeader from '@/components/layouts/TheHeader.vue';
import TheFooter from '@/components/layouts/TheFooter.vue';
import { useAuthStore } from '@/stores/auth.ts';

const { initialRequest } = useAuthStore();

initialRequest();
</script>

<template>
  <div class="wrapper">
    <TheHeader />

    <main class="main">
      <RouterView />
    </main>

    <TheFooter />
  </div>
</template>

<style scoped lang="scss">
.wrapper {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main {
  flex-grow: 1;
}
</style>
