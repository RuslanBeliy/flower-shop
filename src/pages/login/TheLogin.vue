<script setup lang="ts">
import BaseContainer from '@/components/ui/BaseContainer.vue';
import BaseAuth from '@/components/ui/BaseAuth.vue';
import BaseInput from '@/components/ui/BaseInput.vue';
import BaseButton from '@/components/ui/BaseButton.vue';
import { routes } from '@/router.ts';
import { useAuthStore } from '@/stores/auth';
import { storeToRefs } from 'pinia';
import { useLogin } from '@/pages/login/hooks/useLogin.ts';

const store = useAuthStore();
const { status, error } = storeToRefs(store);
const { v$, form, onSubmit } = useLogin();
</script>

<template>
  <BaseContainer>
    <section class="login">
      <BaseAuth img-src="/auth/1.png" title="Авторизация" :error="error">
        <form @submit.prevent="onSubmit" class="form">
          <BaseInput
            type="email"
            placeholder="E-mail"
            v-model="form.email"
            @blur="v$.email.$touch"
            :error="v$.email.$errors"
          />
          <BaseInput
            type="password"
            placeholder="Пароль"
            v-model="form.password"
            @blur="v$.password.$touch"
            :error="v$.password.$errors"
          />

          <BaseButton :disabled="status === 'loading'">Войти</BaseButton>
          <p>
            Нет аккаунта? Тогда тебе
            <RouterLink :to="{ name: routes.register }">сюда</RouterLink>
          </p>
        </form>
      </BaseAuth>
    </section>
  </BaseContainer>
</template>

<style scoped lang="scss">
.login {
  padding: 50px 0;
  min-height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 20px;

  button {
    margin-top: 30px;
  }

  p {
    text-align: right;

    a {
      color: var(--primary-color);
    }
  }
}
</style>
