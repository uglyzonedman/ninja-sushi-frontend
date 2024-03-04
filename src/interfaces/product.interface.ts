export interface IProductsPage {
  title: string;
  products: IProduct[];
  link: string;
  refetch: any;
}

export interface ISingleProduct {
  item: IProduct;
}

export interface IProduct {
  createdAt: string;
  description: string;
  id: string;
  name: string;
  photoPath: string;
  price: number;
  type: string;
  updatedAt: string;
  volume: number;
  weight: number;
  refetch: any;
}
