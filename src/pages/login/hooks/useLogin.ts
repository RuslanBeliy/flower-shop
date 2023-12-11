import { reactive } from 'vue';
import { useRouter } from 'vue-router';
import { storeToRefs } from 'pinia';
import { useVuelidate } from '@vuelidate/core';
import { email, helpers, required } from '@vuelidate/validators';
import { useAuthStore } from '@/stores/auth.ts';
import { routes } from '@/router.ts';

export const useLogin = () => {
  const store = useAuthStore();
  const router = useRouter();

  const { statusRequestAuth } = storeToRefs(store);
  const { loginUser } = store;

  const form = reactive({
    email: '',
    password: '',
  });

  const rules = {
    email: {
      required: helpers.withMessage('Поле email обязательное', required),
      email: helpers.withMessage('Введите корректный email', email),
    },
    password: {
      required: helpers.withMessage('Поле пароля обязательное', required),
    },
  };

  const v$ = useVuelidate(rules, form);

  const onSubmit = async () => {
    v$.value.$touch();
    if (v$.value.$error) return;

    await loginUser(form);
    if (statusRequestAuth.value === 'success')
      router.replace({ name: routes.userInfo });
  };
  return { onSubmit, v$, form };
};
