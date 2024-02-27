import { ProductType } from "./product";
import { UserType } from "./user";

export interface CommentType {
  _id: string;
  body: string;
  rate: number;
  product: ProductType;
  user: UserType;
  createdAt: string;
  updatedAt: string;
}
