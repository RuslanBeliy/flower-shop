import { storeToRefs } from 'pinia';
import { reactive, ref } from 'vue';
import { email, helpers, minLength, required } from '@vuelidate/validators';
import { useVuelidate } from '@vuelidate/core';
import { useAuthStore } from '@/stores/auth.ts';
import { RegisterRequest, uploadAvatar } from '@/api/requests/auth.ts';
import { useFetch } from '@/hooks/useFetch.ts';

const API_URL = import.meta.env.VITE_API_URL;

export const useUserInformation = () => {
  const isChange = ref(false);
  const [avatarRequest] = useFetch<{ url: string }>();

  const store = useAuthStore();
  const { user, statusUpdateUser } = storeToRefs(store);
  const { updateUser } = store;

  const defaultForm = () => ({
    userName: user.value?.userName ?? '',
    email: user.value?.email ?? '',
    avatarUrl: user.value?.avatarUrl,
    password: '',
  });

  const form = reactive<RegisterRequest>(defaultForm());

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

  const handleIsChange = () => {
    isChange.value = !isChange.value;
    Object.assign(form, defaultForm());
  };

  const handleFile = async (e: Event) => {
    const input = e.target as HTMLInputElement;
    const file = input.files?.[0];
    input.value = '';

    if (!file) return;

    const formData = new FormData();
    formData.append('image', file);

    const res = await avatarRequest(() => uploadAvatar(formData));

    form.avatarUrl = res ? API_URL + res.url : undefined;
  };

  const onSubmit = async () => {
    v$.value.$touch();
    if (v$.value.$error) return;

    await updateUser(form);
    if (statusUpdateUser.value === 'success') handleIsChange();
  };

  return { form, v$, isChange, handleIsChange, onSubmit, handleFile };
};
