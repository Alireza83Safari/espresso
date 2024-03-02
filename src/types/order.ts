import { AddressType } from "./address";
import { UserType } from "./user";

export interface OrderType {
  _id: string;
  user: UserType;
  address: AddressType;
  products: string[];
  totalPrice: number;
  createdAt: string;
  updatedAt: string;
}
