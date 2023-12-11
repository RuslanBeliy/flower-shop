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
      <RouterView v-slot="slotProps">
        <Transition name="route" mode="out-in">
          <Component :is="slotProps.Component" />
        </Transition>
      </RouterView>
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

.route-enter-active {
  animation: page 0.5s ease-in-out;
}

.route-leave-active {
  animation: page 0.5s ease-in-out reverse;
}

@keyframes page {
  from {
    opacity: 0;
    transform: translateY(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>
