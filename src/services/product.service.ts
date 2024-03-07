import { $apiWithToken, $apiWithoutToken } from "../api/api";
import { IFavorites, ISingleProduct } from "../interfaces/product.interface";

export const ProductService = {
  async getAllProducts(type: string, limit: number = 8, page: number = 1) {
    const res = await $apiWithoutToken.get(
      `product/all?type=${type}&limit=${limit}&page=${page}`
    );
    return res.data;
  },
  async getPhoto(file: string) {
    const res = await $apiWithoutToken.get(`product/file/sushies/${file}`);
    return res.data;
  },

  async getById(productId: string) {
    const res = await $apiWithoutToken.get<ISingleProduct>(
      `product/by-id/${productId}`
    );
    return res.data;
  },

  async changeFavorite(productId: string | null | undefined) {
    const res = await $apiWithToken.put(`product/change-favorite/${productId}`);

    return res.data;
  },

  async getFavoriteById() {
    const res = await $apiWithToken.get<IFavorites>(
      `product/get-favorite-by-id`
    );
    return res.data;
  },
};
