import { Dispatch } from "react";

interface AppContextProps extends State {
  readonly dispatch: Dispatch<Action>;
}

interface State {
  readonly cart: CartProps;
}

type Action =
  | {
      readonly type: "ADD_PRODUCT";
      readonly payload: ProductType;
    }
  | {
      readonly type: "REMOVE_PRODUCT";
      readonly payload: string;
    }
  | {
      readonly type: "REMOVE_ALL_PRODUCTS";
    }
  | { readonly type: "UPDATE_PRODUCT_QUANTITY"; readonly payload: ProductType };

interface ProductType {
  readonly id: string;
  readonly quantity: number;
}

interface CartProps {
  readonly products: Array<ProductType>;
  readonly size: number;
}

export type { AppContextProps, State, Action, ProductType, CartProps };
