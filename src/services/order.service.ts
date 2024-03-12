import { $apiWithToken } from "../api/api";
import { IOrder, IOrders } from "../interfaces/order.interface";

export const OrderService = {
  async getOrdersById() {
    const res = await $apiWithToken.get<IOrders>("order/get");
    return res.data;
  },
  async getOrderById(orderId: string) {
    const res = await $apiWithToken.get<IOrder>(`order/get-by-id/${orderId}`);
    return res.data;
  },
  async createOrder(
    name: string,
    addressId: string,
    phoneNumber: string,
    dontRingTheDoorbell: boolean,
    leaveItAtTheDoor: boolean,
    comment: string,
    typePayment: any,
    typeDelivery: any
  ) {
    const res = await $apiWithToken.post(`order/add`, {
      name,
      addressId,
      phoneNumber,
      dontRingTheDoorbell,
      leaveItAtTheDoor,
      comment,
      typePayment,
      typeDelivery,
    });
    return res.data;
  },
};
