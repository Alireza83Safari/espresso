import { CommentType } from "./comment";

export interface CoffeeType {
  _id: string;
  name: string;
  price: number;
  seed: string;
  seedType: string;
  image: string;
  isFavorite: boolean;
  label: string;
  description: string;
  caffeine: string;
  weight: number;
  comments: CommentType[];
  createdAt: string;
  updatedAt: string;
}

export interface CreateCoffeeType {
  name: string;
  price: number;
  seed: string;
  seedType: string;
  image: string;
  label: string;
  description: string;
  caffeine: string;
  weight: number;
}
