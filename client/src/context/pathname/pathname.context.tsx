import { FC, ReactNode, createContext, useContext, useState } from "react";

const PathnameContext = createContext<{
  pathname: string;
  setPathname: (pathname: string) => void;
}>({ pathname: "", setPathname: () => {} });

const PathnameContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [pathname, setPathname] = useState<string>(location.pathname);

  return (
    <PathnameContext.Provider value={{ pathname, setPathname }}>
      {children}
    </PathnameContext.Provider>
  );
};

const usePathnameContext = () => useContext(PathnameContext);

export { PathnameContextProvider, usePathnameContext };
