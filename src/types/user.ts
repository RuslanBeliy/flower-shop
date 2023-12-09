export interface ResponseAuth {
  token: string;
  userData: IUser;
}

export interface IUser {
  _id: string;
  userName: string;
  email: string;
  avatarUrl?: string;
  createdAt: Date;
  updatedAt: Date;
}
