import { getCartFromLocalStorage, setCart } from "../../utils/local-storage";
import { Action, State } from "./app.types";

const initialState: State = {
  cart: getCartFromLocalStorage(),
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "ADD_PRODUCT": {
      const newState = {
        ...state,
        cart: {
          products: [...state.cart.products, action.payload],
          size: state.cart.size + 1,
        },
      };

      setCart(newState.cart);
      return newState;
    }

    case "REMOVE_PRODUCT": {
      const newState = {
        ...state,
        cart: {
          products: state.cart.products.filter(
            (product) => product.id !== action.payload
          ),
          size: state.cart.size - 1,
        },
      };

      setCart(newState.cart);
      return newState;
    }
    
    case "REMOVE_ALL_PRODUCTS": {
      const newState = {
        ...state,
        cart: {
          products: [],
          size: 0,
        },
      };
    
      setCart(newState.cart);
      return newState;
    }

    case "UPDATE_PRODUCT_QUANTITY": {
      const { id, quantity } = action.payload;
      const productIndex = state.cart.products.findIndex((p) => p.id === id);

      if (productIndex === -1) {
        return { ...state };
      } else {
        state.cart.products[productIndex].quantity = quantity;
      }

      const newState = {
        ...state,
        cart: { ...state.cart, products: [...state.cart.products] },
      };

      setCart(newState.cart);
      return newState;
    }

    default: {
      return state;
    }
  }
};

export { initialState, reducer };
