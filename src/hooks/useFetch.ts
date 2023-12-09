import { ref } from 'vue';
import { TStatus } from '@/types';
import { AxiosError } from 'axios';

export const useFetch = <T>(errorMessage?: string) => {
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
      if (errorMessage) {
        error.value = errorMessage;
        return;
      }
      if (e instanceof AxiosError) {
        error.value = e.response?.data.message;
      }
    }
  };

  return { data, request, status, error };
};
