import { computed, ref } from 'vue';
import { defineStore } from 'pinia';
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

export const KEY_TOKEN = 'token';

export const useAuthStore = defineStore('auth', () => {
  const tokenLS = localStorage.getItem(KEY_TOKEN) ?? undefined;

  const user = ref<IUser>();
  const token = ref<string | undefined>(tokenLS);
  const isAuth = computed(() => !!token.value);

  const [requestAuth, statusRequestAuth, errorRequestAuth] =
    useFetch<ResponseAuth>();
  const [requestUser, statusRequestMe] = useFetch<ResponseAuth>();
  const [requestUpdateUser, statusUpdateUser] = useFetch<IUser>();

  const setUserData = (data?: ResponseAuth) => {
    user.value = data?.userData;
    token.value = data?.token;
    if (data) localStorage.setItem(KEY_TOKEN, data.token);
  };
  const loginUser = async (data: LoginRequest) => {
    const res = await requestAuth(() => login(data));
    setUserData(res);
  };

  const registerUser = async (data: RegisterRequest) => {
    const res = await requestAuth(() => register(data));
    setUserData(res);
  };

  const updateUser = async (data: RegisterRequest) => {
    user.value = await requestUpdateUser(() =>
      update({ ...user.value, ...data }),
    );
  };

  const logoutUser = () => {
    user.value = undefined;
    token.value = undefined;
    localStorage.removeItem(KEY_TOKEN);
  };

  const initialRequest = async () => {
    const res = await requestUser(requestMe);
    user.value = res?.userData;
    token.value = statusRequestMe.value === 'success' ? tokenLS : undefined;
  };

  return {
    user,
    isAuth,
    errorRequestAuth,
    statusRequestAuth,
    statusRequestMe,
    statusUpdateUser,
    loginUser,
    logoutUser,
    initialRequest,
    registerUser,
    updateUser,
  };
});
