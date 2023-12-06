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
  rating: string;
  comments: [];
}
