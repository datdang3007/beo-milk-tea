export interface IToppingKind {
  id: number;
  name: string;
}

export interface ITopping {
  id: number;
  name: string;
  kind: IToppingKind;
}

export interface ITeaKind {
  value: string;
}

export interface ISugarOption {
  value: string;
}

export interface IIceOption {
  value: string;
}

export interface IMilkTea {
  kind: ITeaKind;
  sugar: ISugarOption;
  ice: IIceOption;
  topping: ITopping[];
}

export interface IOrder {
  size?: string;
  milk_tea?: IMilkTea;
}
