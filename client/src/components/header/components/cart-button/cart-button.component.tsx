import { FC } from "react";
import { Link } from "react-router-dom";
import styles from "./cart-button.module.scss";
import { ReactComponent as CartIcon } from "../../../../assets/icons/cart.svg";
import { useAppContext, usePathnameContext } from "../../../../context";

const CartButton: FC = () => {
  const { cart } = useAppContext();
  const { setPathname } = usePathnameContext();

  const linkClickHandler = (pathname: string) => {
    setPathname(pathname);
  };

  return (
    <Link
      to={"/cart"}
      className={styles.cart}
      onClick={() => linkClickHandler("/cart")}
    >
      <CartIcon className={styles.ico} />
      <span>Card ({cart.size})</span>
    </Link>
  );
};

export { CartButton };
