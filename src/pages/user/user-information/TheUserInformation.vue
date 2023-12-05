<script setup lang="ts">
import BaseTitle from '@/components/ui/BaseTitle.vue';
import BaseUserPanel from '@/components/ui/BaseUserPanel.vue';
import BaseButton from '@/components/ui/BaseButton.vue';
</script>

<template>
  <BaseUserPanel>
    <template #header>
      <BaseTitle size="l" tag="h2">Ваши данные</BaseTitle>
      <BaseButton>Изменить</BaseButton>
    </template>
  </BaseUserPanel>
</template>

<style scoped lang="scss"></style>
