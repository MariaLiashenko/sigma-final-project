import { FC, createContext, useContext, useState } from "react";
import { Wrapper } from "../wrapper";
import { CartButton, Logo, Navbar, SearchInput } from "./components";

import styles from "./header.module.scss";
import { PathnameContextProvider } from "../../context/pathname/pathname.context";

const Header: FC = () => (
  <PathnameContextProvider>
    <Wrapper className={styles.headerWrapper}>
      <div className={styles.header}>
        <Logo />
        <Navbar />
        <SearchInput />
        <CartButton />
      </div>
    </Wrapper>
  </PathnameContextProvider>
);

export { Header };
