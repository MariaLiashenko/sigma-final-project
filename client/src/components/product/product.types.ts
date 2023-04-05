import { Product } from "../../interfaces";

interface ProductProps extends Product {
  readonly onClick?: () => void;
}

export type { ProductProps };
