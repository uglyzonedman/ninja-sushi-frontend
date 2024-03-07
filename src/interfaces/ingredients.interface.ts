export interface IIngredients {
  items: IIngredient[];
}

export interface IIngredient {
  createdAt: string;
  id: string;
  name: string;
  photoPath: string;
  updatedAt: string;
}
