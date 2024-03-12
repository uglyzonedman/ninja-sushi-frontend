import { $apiWithToken } from "../api/api";
import { IAddress } from "../interfaces/address.interface";

export const AddressService = {
  async getByUser() {
    const res = await $apiWithToken.get<IAddress>("address/get-for-user");
    return res.data;
  },
  async createAddress(
    street: string,
    streetNumber: number,
    flat: number,
    entrance: number,
    floor: number
  ) {
    const res = await $apiWithToken.post<IAddress>("address/create", {
      street,
      streetNumber,
      flat,
      entrance,
      floor,
    });
    return res.data;
  },

  async deleteAddress(id: string) {
    const res = await $apiWithToken.delete(`address/delete/${id}`);
    return res.data;
  },
};
