<script setup lang="ts">
import BaseContainer from '@/components/ui/BaseContainer.vue';
import BaseAuth from '@/components/ui/BaseAuth.vue';
import { routes } from '@/router.ts';
import BaseButton from '@/components/ui/BaseButton.vue';
import BaseInput from '@/components/ui/BaseInput.vue';
</script>

<template>
  <BaseContainer>
    <section class="register">
      <BaseAuth title="Регистрация" img-src="/auth/2.png">
        <form class="form">
          <BaseInput type="text" placeholder="Ваше имя" />
          <BaseInput type="email" placeholder="E-mail" />
          <BaseInput type="password" placeholder="Пароль" />

          <BaseButton>Регистрация</BaseButton>
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
