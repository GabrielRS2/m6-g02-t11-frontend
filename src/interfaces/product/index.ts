import { IUser } from "../user";

export interface IProduct {
  id?: string;
  model: string;
  description: string;
  km: string;
  year: string;
  sale_type: string;
  price: number;
  vehicle_type: string;
  is_active: boolean;
  cover_img: string;
  seller: IUser;
  images?: string[] | [""];
  coments?: IComents[];
}
interface IComents {
  user: IUser;
  data: Date;
  coment: string;
}
export interface IProductImage {
  id: string;
  content: string;
  is_cover_img: boolean;
}
