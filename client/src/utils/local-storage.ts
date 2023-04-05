import { CartProps } from "../context";
import { Product } from "../interfaces";

const getCartFromLocalStorage = (): CartProps => {
  const { products, size } = JSON.parse(
    localStorage.getItem("cart") ?? '""'
  ) as CartProps;

  if (!products || !size) {
    const newCart = { products: [], size: 0 };

    localStorage.setItem("cart", JSON.stringify(newCart));
    return newCart;
  }

  return { products, size };
};

const setCart = (cart: CartProps) => {
  localStorage.setItem("cart", JSON.stringify(cart));
};

export { getCartFromLocalStorage, setCart };
