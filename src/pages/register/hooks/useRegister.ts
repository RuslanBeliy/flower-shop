import { reactive } from 'vue';
import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router';
import { useVuelidate } from '@vuelidate/core';
import { email, helpers, minLength, required } from '@vuelidate/validators';
import { routes } from '@/router.ts';
import { useAuthStore } from '@/stores/auth.ts';

export const useRegister = () => {
  const router = useRouter();
  const store = useAuthStore();
  const { statusRequestAuth } = storeToRefs(store);
  const { registerUser } = store;

  const form = reactive({
    email: '',
    password: '',
    userName: '',
  });

  const rules = {
    email: {
      required: helpers.withMessage('Поле email обязательное', required),
      email: helpers.withMessage('Введите корректный email', email),
    },
    password: {
      required: helpers.withMessage('Поле пароля обязательное', required),
      minLength: helpers.withMessage(
        'Пароль должен содержать минимум 5 символов',
        minLength(5),
      ),
    },

    userName: {
      required: helpers.withMessage(
        'Имя должно содержать минимум 3 символа',
        required,
      ),
      minLength: helpers.withMessage(
        'Имя должно содержать минимум 3 символа',
        minLength(3),
      ),
    },
  };

  const v$ = useVuelidate(rules, form);

  const onSubmit = async () => {
    v$.value.$touch();
    if (v$.value.$error) return;

    await registerUser(form);
    if (statusRequestAuth.value === 'success')
      router.replace({ name: routes.userInfo });
  };

  return { onSubmit, form, v$ };
};
