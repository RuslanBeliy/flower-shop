<script setup lang="ts">
import BaseTitle from '@/components/ui/BaseTitle.vue';
import BaseButton from '@/components/ui/BaseButton.vue';
import { computed } from 'vue';

interface Props {
  error?: string | null;
  buttonText?: string;
  small?: boolean;
  top?: string;
  bottom?: string;
}

const emits = defineEmits(['try-again']);

const props = withDefaults(defineProps<Props>(), {
  error: 'Произошла неизвестная ошибка',
});

const styles = computed(() => ({
  paddingTop: props.top + 'px',
  paddingBottom: props.bottom + 'px',
}));

const reload = () => {
  emits('try-again');
};
</script>

<template>
  <div v-if="small" class="small-error" :style="styles">{{ error }}</div>
  <div v-else class="request-error" :style="styles">
    <BaseTitle size="l">{{ error }}</BaseTitle>
    <BaseButton v-if="buttonText" @click="reload">{{ buttonText }}</BaseButton>
  </div>
</template>

<style scoped lang="scss">
.request-error {
  margin: 50px auto;
  padding: 20px;
  background: #fff;
  border-radius: 10px;
  max-width: 700px;
  text-align: center;
  box-shadow: var(--shadow);

  button {
    margin-top: 30px;
  }
}

.small-error {
  color: var(--primary-color);
  text-align: center;
  font-size: 18px;
}
</style>
