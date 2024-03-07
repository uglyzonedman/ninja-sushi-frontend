export interface IAddress {
  items: IAddres[];
}

export interface IAddres {
  id: string;
  createAt: string;
  street: string;
  streetNumber: number | null;
  flat: number | null;
  entrance: number | null;
  floor: number | null;
  accountId: string;
}

export interface IAddresState {
  street: string;
  streetNumber: number;
  flat: number;
  entrance: number;
  floor: number;
}
