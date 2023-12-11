import { Ref, ref, UnwrapRef } from 'vue';
import { AxiosError } from 'axios';
import { TStatus } from '@/types';

type ReturnType<T> = [
  (fn: () => Promise<T>) => Promise<T | undefined>,
  Ref<UnwrapRef<TStatus>>,
  Ref<UnwrapRef<string | null>>,
];

export const useFetch = <T>(errorMessage?: string): ReturnType<T> => {
  const status = ref<TStatus>('init');
  const error = ref<string | null>(null);

  const request = async (fn: () => Promise<T>) => {
    try {
      status.value = 'loading';
      error.value = null;

      const res = await fn();

      status.value = 'success';
      return res;
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

  return [request, status, error];
};
