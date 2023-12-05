<script setup lang="ts">
import BaseContainer from '@/components/ui/BaseContainer.vue';
import BaseAuth from '@/components/ui/BaseAuth.vue';
import BaseInput from '@/components/ui/BaseInput.vue';
import BaseButton from '@/components/ui/BaseButton.vue';
import { routes } from '@/router.ts';
</script>

<template>
  <BaseContainer>
    <section class="login">
      <BaseAuth img-src="/auth/1.png" title="Авторизация">
        <form class="form">
          <BaseInput type="email" placeholder="E-mail" />
          <BaseInput type="password" placeholder="Пароль" />

          <BaseButton>Login</BaseButton>
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
