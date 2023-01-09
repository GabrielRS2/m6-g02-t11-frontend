export interface IUser {
  id?: string;
  cpf: string;
  dob: string;
  email: string;
  isActive: boolean;
  isSeller: true;
  phone: string;
  name: string;
  description: string;
}

export interface IUserId {
  userId: string;
}