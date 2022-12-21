import { IUser } from "../user";

export interface IProduct {
  model: string;
  description: string;
  km: string;
  year: string;
  sale_type: string;
  price: string;
  vehicle_type: string;
  is_active: boolean;
  cover_img: string;
  seller: IUser;
}
