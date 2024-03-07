import { $apiWithoutToken } from "../api/api";
import { IIngredients } from "../interfaces/ingredients.interface";

export const IngredientsService = {
  async getAll() {
    const res = await $apiWithoutToken.get<IIngredients>("ingredients/all");
    return res.data;
  },
};
