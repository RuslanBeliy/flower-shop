import { IUser, ResponseAuth } from '@/types/user';
import { $api } from '..';

export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest extends LoginRequest {
  userName: string;
  avatarUrl?: string;
}

export const login = async (body: LoginRequest): Promise<ResponseAuth> => {
  const { data } = await $api.post<ResponseAuth>('/auth/login', body);
  return data;
};
export const register = async (
  body: RegisterRequest,
): Promise<ResponseAuth> => {
  const { data } = await $api.post<ResponseAuth>('/auth/register', body);
  return data;
};
export const update = async (body: RegisterRequest): Promise<IUser> => {
  const { data } = await $api.put<IUser>('/auth/update', body);
  return data;
};
export const requestMe = async (): Promise<ResponseAuth> => {
  const { data } = await $api.get<ResponseAuth>('/auth/me');
  return data;
};
export const uploadAvatar = async (
  form: FormData,
): Promise<{ url: string }> => {
  const { data } = await $api.post<{ url: string }>('/upload', form);
  return data;
};
