import { UserType } from "./user";

export type DiscountType = {
  _id: string;
  percent: number;
  code: string;
  count: number;
  use: number;
  user: UserType;
  createdAt: string;
  updatedAt: string;
};
