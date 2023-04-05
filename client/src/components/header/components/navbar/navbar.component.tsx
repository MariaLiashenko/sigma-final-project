import { FC, useEffect, useState } from "react";
import styles from "./navbar.module.scss";
import { Link } from "react-router-dom";
import { usePathnameContext } from "../../../../context";

const links: Array<{ name: string; href: string }> = [
  {
    name: "Home",
    href: "#home",
  },
  {
    name: "About",
    href: "#about",
  },
  {
    name: "Pages",
    href: "#pages",
  },
  {
    name: "Shop",
    href: "#shop",
  },
  {
    name: "Projects",
    href: "#projects",
  },
  {
    name: "News",
    href: "#news",
  },
];

const Navbar: FC = () => {
  const { pathname, setPathname } = usePathnameContext();

  const linkClickHandler = (pathname: string) => {
    setPathname(pathname);
  };

  return (
    <nav className={styles.navbar}>
      <ul>
        {links.map((link, index) => (
          <li className={styles.navItem} key={index}>
            {pathname === "/cart" ? (
              <Link
                to={`/${link.href}`}
                onClick={() => linkClickHandler(link.href)}
              >
                {link.name}
              </Link>
            ) : (
              <a href={link.href} onClick={() => linkClickHandler(link.href)}>
                {link.name}
              </a>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export { Navbar };
