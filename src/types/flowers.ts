import { IUser } from '@/types/user.ts';

export interface ResponseFlowers {
  countItems: number;
  flowers: IFlower[];
}
export interface IFlower {
  _id: string;
  name: string;
  price: number;
  imageUrl: string;
  category: string;
  description: string;
  rating: number;
  comments: IComment[];
}

export interface IComment {
  _id: string;
  text: string;
  author: IUser;
  flowerId: string;
  createdAt: Date;
  updatedAt: Date;
}
