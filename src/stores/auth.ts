import {
  LoginRequest,
  login,
  requestMe,
  RegisterRequest,
  register,
  update,
} from '@/api/requests/auth';
import { useFetch } from '@/hooks/useFetch';
import { IUser, ResponseAuth } from '@/types/user';
import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

export const KEY_TOKEN = 'token';

export const useAuthStore = defineStore('auth', () => {
  const tokenLS = localStorage.getItem(KEY_TOKEN) ?? undefined;

  const user = ref<IUser>();
  const token = ref<string | undefined>(tokenLS);
  const isAuth = computed(() => !!token.value);
  const {
    request: handleRequestAuth,
    error,
    status,
  } = useFetch<ResponseAuth>();
  const { request: handleRequestMe, status: statusRequestMe } =
    useFetch<ResponseAuth>();
  const { request: handleUpdateUser, status: statusUpdateUser } =
    useFetch<IUser>();

  const loginUser = async (data: LoginRequest) => {
    const res = await handleRequestAuth(() => login(data));
    user.value = res?.userData;
    token.value = res?.token;
    if (res) localStorage.setItem(KEY_TOKEN, res.token);
  };

  const registerUser = async (data: RegisterRequest) => {
    const res = await handleRequestAuth(() => register(data));
    user.value = res?.userData;
    token.value = res?.token;
    if (res) localStorage.setItem(KEY_TOKEN, res.token);
  };
  const updateUser = async (data: RegisterRequest) => {
    user.value = await handleUpdateUser(() => update(data));
  };

  const logoutUser = () => {
    user.value = undefined;
    token.value = undefined;
    localStorage.removeItem(KEY_TOKEN);
  };

  const initialRequest = async () => {
    const res = await handleRequestMe(requestMe);
    user.value = res?.userData;
    token.value = tokenLS;
  };

  return {
    user,
    isAuth,
    error,
    status,
    statusRequestMe,
    statusUpdateUser,
    loginUser,
    logoutUser,
    initialRequest,
    registerUser,
    updateUser,
  };
});
