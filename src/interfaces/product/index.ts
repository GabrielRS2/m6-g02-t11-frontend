import { IUser } from "../user";

export interface IProduct {
  id?: string;
  model: string;
  description: string;
  km: number;
  year: string;
  sale_type?: string;
  saleType?: string;
  price: number;
  vehicle_type?: string;
  vehicleType?: string;
  is_active?: boolean;
  isActive?: boolean;
  user: IUser;
  coments?: IComents[];
  photos: IPhotos[];
}

interface IPhotos {
  id: string;
  content: string;
  is_cover_img: boolean;
}

export interface IComents {
  user: oldUser;
  data: Date;
  content: string;
}

interface oldUser {
  photo: string;
  name: string;
  description: string;
}

export interface IProductImage {
  id: string;
  content: string;
  is_cover_img: boolean;
}
