import React, {
  FC,
  PropsWithChildren,
  createContext,
  useContext,
  useReducer,
} from "react";
import { initialState, reducer } from "./app.state";

import { AppContextProps } from "./app.types";

const AppContext = createContext<AppContextProps>({
  dispatch: () => "",
  cart: { products: [], size: 0 },
});

const AppContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => useContext(AppContext);

export { AppContextProvider, useAppContext };
