import { IProduct } from "./product.interface";

export interface ICart {
  items: ICartItems[];
}

export interface ICartItems {
  accountId: string;
  createdAt: string;
  quantity: number;
  updatedAt: string;
  id: string;
  productId: string;
  Product: IProduct;
}
