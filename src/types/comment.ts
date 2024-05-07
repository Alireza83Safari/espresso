import { CoffeeType } from "./coffee";
import { UserType } from "./user";

export interface CommentType {
  _id: string;
  body: string;
  status: string;
  rate: number;
  product: CoffeeType;
  user: UserType;
  createdAt: string;
  updatedAt: string;
}
