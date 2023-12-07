import { ref } from 'vue';
import { TStatus } from '@/types';

export const useFetch = <T>(
  fn: (params?: unknown) => Promise<T>,
  errorMessage: string = 'Произошла ошибка',
) => {
  const data = ref<T>();
  const status = ref<TStatus>('init');
  const error = ref<string | null>(null);

  const request = async (...params: unknown[]) => {
    try {
      status.value = 'loading';
      error.value = null;

      data.value = await fn(...params);

      status.value = 'success';
    } catch (e) {
      status.value = 'error';
      error.value = errorMessage;
    }
  };

  return { data, request, status, error };
};
