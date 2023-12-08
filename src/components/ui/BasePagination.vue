<script setup lang="ts">
import BaseButton from '@/components/ui/BaseButton.vue';
interface Props {
  countPages: number;
  currentPage: number;
}

const emits = defineEmits(['current-page']);
const props = withDefaults(defineProps<Props>(), {
  currentPage: 1,
});

const handleCurrentPage = (val: number | '1' | '-1') => {
  if (val === '1') {
    emits('current-page', props.currentPage + 1);
    return;
  }
  if (val === '-1') {
    emits('current-page', props.currentPage - 1);
    return;
  }
  emits('current-page', val);
};
</script>

<template>
  <div class="pagination">
    <BaseButton
      @click="handleCurrentPage('-1')"
      mode="flat"
      :class="{ hide: currentPage === 1 }"
      >⮜</BaseButton
    >
    <BaseButton
      v-for="i in countPages"
      @click="handleCurrentPage(i)"
      mode="flat"
      :class="{ active: i === currentPage }"
      >{{ i }}</BaseButton
    >
    <BaseButton
      @click="handleCurrentPage('1')"
      mode="flat"
      :class="{ hide: currentPage === countPages }"
      >⮞</BaseButton
    >
  </div>
</template>

<style scoped lang="scss">
.pagination {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  button {
    padding: 10px;
    font-size: 20px;

    &:hover {
      color: var(--hover-primary-color);
    }

    &.active {
      color: var(--primary-color);
      pointer-events: none;
    }

    &.hide {
      opacity: 0;
      visibility: hidden;
    }
  }
}
</style>
