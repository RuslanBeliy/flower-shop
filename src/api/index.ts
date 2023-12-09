import axios from 'axios';
import { KEY_TOKEN } from '@/stores/auth.ts';

const baseURL = import.meta.env.VITE_API_URL;
const $api = axios.create({
  baseURL,
});

$api.interceptors.request.use((req) => {
  const token = localStorage.getItem(KEY_TOKEN);

  if (token) req.headers.Authorization = 'Bearer ' + token;

  return req;
});

export { $api };
