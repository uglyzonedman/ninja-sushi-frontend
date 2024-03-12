import { IAddres, IAddress } from "./address.interface";
import { IProduct } from "./product.interface";

export interface IOrders {
  items: IOrder[];
}
export interface IOrder {
  Address: IAddres;
  accountId: string;
  comment: string;
  createdAt: string;
  dontRingTheDoorbell: boolean;
  id: string;
  leaveItAtTheDoor: boolean;
  name: string;
  phoneNumber: string;
  status: string;
  typeDelivery: string;
  typePayment: string;
  totalSum: number;
  OrderItem: IOrderItem[];
}

export interface IOrderItem {
  Product: IProduct;
  price: number;
  quantity: number;
}
