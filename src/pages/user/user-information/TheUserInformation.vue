<script setup lang="ts">
import BaseTitle from '@/components/ui/BaseTitle.vue';
import BaseUserPanel from '@/components/ui/BaseUserPanel.vue';
import BaseButton from '@/components/ui/BaseButton.vue';
import BaseInput from '@/components/ui/BaseInput.vue';
import BaseAvatar from '@/components/ui/BaseAvatar.vue';
import { ref } from 'vue';

const isChange = ref(false);

const handleIsChange = () => (isChange.value = !isChange.value);
</script>

<template>
  <BaseUserPanel>
    <template #header>
      <BaseTitle size="l" tag="h2">Ваши данные</BaseTitle>
      <BaseButton @click="handleIsChange">{{
        isChange ? 'Отменить' : 'Изменить'
      }}</BaseButton>
    </template>

    <div class="wrapper">
      <div class="left">
        <BaseAvatar
          src="https://i.pinimg.com/originals/01/c7/b1/01c7b181419e15cc614b2297a0e0b959.jpg"
          width="130"
          height="130"
        />
        <BaseButton :disabled="!isChange" mode="flat"
          >Загрузить фото</BaseButton
        >
      </div>
      <form class="form">
        <BaseInput :disabled="!isChange" type="text" placeholder="Имя" />
        <BaseInput :disabled="!isChange" type="email" placeholder="E-mail" />
        <BaseInput
          :disabled="!isChange"
          type="password"
          placeholder="Password"
        />
        <BaseButton :disabled="!isChange">Отправить</BaseButton>
      </form>
    </div>
  </BaseUserPanel>
</template>

<style scoped lang="scss">
.wrapper {
  display: flex;
  gap: 50px;
  max-width: 600px;
  margin: 0 auto;
}

.left {
  button {
    margin-top: 20px;
    color: var(--primary-color);
  }
}

.form {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>
