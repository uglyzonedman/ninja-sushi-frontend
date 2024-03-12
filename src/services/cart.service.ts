import { $apiWithToken } from "../api/api";
import { ICart } from "../interfaces/cart.interface";

export const CartService = {
  async addToCart(productId: string) {
    const res = await $apiWithToken.post(`cart/add/${productId}`);
    return res.data;
  },
  async getCartItems() {
    const res = await $apiWithToken.get<ICart>("cart/all");

    return res.data;
  },

  async incrementCartItem(cartItemId: string) {
    const res = await $apiWithToken.put(`cart/increment/${cartItemId}`);
    return res.data;
  },
  async decrementCartItem(cartItemId: string) {
    const res = await $apiWithToken.put(`cart/decrement/${cartItemId}`);
    return res.data;
  },

  async removeCartItem(cartItemId: string) {
    const res = await $apiWithToken.delete(`cart/delete-by-id/${cartItemId}`);

    return res.data;
  },

  async removeAllCartItems() {
    const res = await $apiWithToken.delete("cart/delete-all");

    return res.data;
  },
};
