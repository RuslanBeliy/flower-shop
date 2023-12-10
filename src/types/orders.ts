export interface ResponseOrders {
  _id: string;
  order: IOrder[];
  createdAt: string;
  updatedAt: string;
}

export interface IOrder {
  category: string;
  countItems: number;
  imageUrl: string;
  name: string;
  price: number;
}
