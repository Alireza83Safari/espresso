import { AddressType } from "./address";

export interface OrderType {
  _id: string;
  user: string;
  address: AddressType;
  products: string[];
  totalPrice: number;
  createdAt: string;
  updatedAt: string;
}
