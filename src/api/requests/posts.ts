import { $api } from '@/api';
import { IPost } from '@/types/posts.ts';

export const fetchLatestPosts = async (): Promise<IPost[]> => {
  const { data } = await $api.get<IPost[]>('/posts');
  return data.splice(0, 3);
};
export const fetchPosts = async (): Promise<IPost[]> => {
  const { data } = await $api.get<IPost[]>('/posts');
  return data;
};
export const fetchPostById = async (id: string): Promise<IPost> => {
  const { data } = await $api.get<IPost>(`/posts/${id}`);
  return data;
};
