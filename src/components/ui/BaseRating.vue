<script setup lang="ts">
import StarIcon from '@/components/icons/StarIcon.vue';

interface Props {
  count?: number | string;
  rating: number | string;
}
withDefaults(defineProps<Props>(), {
  count: 5,
  rating: 4,
});
</script>

<template>
  <div class="rating">
    <StarIcon
      v-for="i in +count"
      :key="i"
      class="icon"
      :class="{ fill: i <= +rating }"
    />
  </div>
</template>

<style scoped lang="scss">
.icon {
  fill: var(--third-color);
}

.fill {
  fill: var(--primary-color);
}
</style>
