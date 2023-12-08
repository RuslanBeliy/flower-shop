import { ref } from 'vue';
import { TStatus } from '@/types';

export const useFetch = <T>(errorMessage: string = 'Произошла ошибка') => {
  const data = ref<T>();
  const status = ref<TStatus>('init');
  const error = ref<string | null>(null);

  const request = async (fn: () => Promise<T>) => {
    try {
      status.value = 'loading';
      data.value = undefined;
      error.value = null;

      data.value = await fn();

      status.value = 'success';
      return data.value;
    } catch (e) {
      status.value = 'error';
      error.value = errorMessage;
    }
  };

  return { data, request, status, error };
};
