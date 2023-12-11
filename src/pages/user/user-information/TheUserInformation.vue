<script setup lang="ts">
import BaseTitle from '@/components/ui/BaseTitle.vue';
import BaseUserPanel from '@/components/ui/BaseUserPanel.vue';
import BaseButton from '@/components/ui/BaseButton.vue';
import BaseInput from '@/components/ui/BaseInput.vue';
import BaseAvatar from '@/components/ui/BaseAvatar.vue';
import { useAuthStore } from '@/stores/auth.ts';
import { storeToRefs } from 'pinia';
import { useUserInformation } from '@/pages/user/user-information/hooks/useUserInformation.ts';
import { ref } from 'vue';

const store = useAuthStore();
const { user, statusUpdateUser } = storeToRefs(store);
const { form, v$, isChange, handleIsChange, onSubmit, handleFile } =
  useUserInformation();

const refFile = ref<HTMLInputElement>();

const uploadImg = () => {
  refFile.value?.click();
};
</script>

<template>
  <BaseUserPanel v-if="user">
    <template #header>
      <BaseTitle size="l" tag="h2">Ваши данные</BaseTitle>
      <BaseButton @click="handleIsChange">{{
        isChange ? 'Отменить' : 'Изменить'
      }}</BaseButton>
    </template>

    <div class="wrapper">
      <div class="left">
        <BaseAvatar
          :src="form.avatarUrl"
          :text="user.userName"
          width="130"
          height="130"
        />
        <BaseButton @click="uploadImg" :disabled="!isChange" mode="flat"
          >Загрузить фото</BaseButton
        >
        <input @change="handleFile" ref="refFile" type="file" hidden />
      </div>

      <form @submit.prevent="onSubmit" class="form">
        <BaseInput
          type="text"
          placeholder="Имя"
          :disabled="!isChange"
          v-model="form.userName"
          @blur="v$.userName.$touch"
          :error="v$.userName.$errors"
        />
        <BaseInput
          type="email"
          placeholder="E-mail"
          :disabled="!isChange"
          v-model="form.email"
          @blur="v$.email.$touch"
          :error="v$.email.$errors"
        />
        <BaseInput
          type="password"
          placeholder="Пароль"
          :disabled="!isChange"
          v-model="form.password"
          @blur="v$.password.$touch"
          :error="v$.password.$errors"
        />
        <BaseButton :disabled="!isChange || statusUpdateUser === 'loading'"
          >Отправить</BaseButton
        >
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
