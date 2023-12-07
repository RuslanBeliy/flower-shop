<script setup lang="ts">
import BaseTitle from '@/components/ui/BaseTitle.vue';
import BaseButton from '@/components/ui/BaseButton.vue';

interface Props {
  error?: string | null;
  buttonText?: string;
}

const emits = defineEmits(['try-again']);

withDefaults(defineProps<Props>(), {
  error: 'Произошла неизвестная ошибка',
});

const reload = () => {
  emits('try-again');
};
</script>

<template>
  <div class="request-error">
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
</style>
