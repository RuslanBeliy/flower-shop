import { useAuthStore } from '@/stores/auth.ts';
import { storeToRefs } from 'pinia';
import { reactive, ref } from 'vue';
import { RegisterRequest } from '@/api/requests/auth.ts';
import { email, helpers, minLength, required } from '@vuelidate/validators';
import { useVuelidate } from '@vuelidate/core';

export const useUserInformation = () => {
  const store = useAuthStore();

  const { user, statusUpdateUser } = storeToRefs(store);
  const { updateUser } = store;

  const isChange = ref(false);

  const form = reactive<RegisterRequest>({
    userName: user.value?.userName ?? '',
    email: user.value?.email ?? '',
    password: '',
  });

  const rules = {
    email: {
      required: helpers.withMessage('Поле email обязательное', required),
      email: helpers.withMessage('Введите корректный email', email),
    },
    password: {
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

  const handleIsChange = () => (isChange.value = !isChange.value);
  const onSubmit = async () => {
    v$.value.$touch();
    if (v$.value.$error) return;

    await updateUser(form);
    if (statusUpdateUser.value === 'success') handleIsChange();
  };
  return { form, v$, isChange, handleIsChange, onSubmit };
};
