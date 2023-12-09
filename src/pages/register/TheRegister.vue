<script setup lang="ts">
import BaseContainer from '@/components/ui/BaseContainer.vue';
import BaseAuth from '@/components/ui/BaseAuth.vue';
import { routes } from '@/router.ts';
import BaseButton from '@/components/ui/BaseButton.vue';
import BaseInput from '@/components/ui/BaseInput.vue';
import { useAuthStore } from '@/stores/auth.ts';
import { storeToRefs } from 'pinia';
import { useRegister } from '@/pages/register/hooks/useRegister.ts';

const store = useAuthStore();
const { error, status } = storeToRefs(store);
const { v$, onSubmit, form } = useRegister();
</script>

<template>
  <BaseContainer>
    <section class="register">
      <BaseAuth title="Регистрация" img-src="/auth/2.png" :error="error">
        <form @submit.prevent="onSubmit" class="form">
          <BaseInput
            v-model="form.userName"
            @blur="v$.userName.$touch"
            :error="v$.userName.$errors"
            type="text"
            placeholder="Ваше имя"
          />
          <BaseInput
            v-model="form.email"
            @blur="v$.email.$touch"
            :error="v$.email.$errors"
            type="email"
            placeholder="E-mail"
          />
          <BaseInput
            v-model="form.password"
            @blur="v$.password.$touch"
            :error="v$.password.$errors"
            type="password"
            placeholder="Пароль"
          />

          <BaseButton :disabled="status === 'loading'">Регистрация</BaseButton>
          <p>
            Уже зарегистрирован? Тогда
            <RouterLink :to="{ name: routes.login }">авторизуйся</RouterLink>
          </p>
        </form>
      </BaseAuth>
    </section>
  </BaseContainer>
</template>

<style scoped lang="scss">
.register {
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
    margin-top: 50px;
  }

  p {
    text-align: right;

    a {
      color: var(--primary-color);
    }
  }
}
</style>
