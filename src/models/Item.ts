import { Category } from "../enums/category";

export interface Item {
  id: number;
  category: Category;
  name: string;
  quantity: number;
  goodForNumberOfdays: number;
  isEssentialItem: boolean;
  dateOfLastRestock: Date;
}
