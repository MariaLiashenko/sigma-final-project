import classNames from "classnames";
import { FC } from "react";
import styles from "./button.module.scss";
import { ButttonProps } from "./button.types";

const Button: FC<ButttonProps> = ({
  children,
  variant,
  icon,
  className,
  type,
  onClick,
  ...rest
}) => (
  <button
    className={classNames(styles.button, styles[variant], className)}
    type={type}
    onClick={onClick}
    {...rest}
  >
    <span>{children}</span>

    {icon && <div className={styles.icon}>{icon}</div>}
  </button>
);

export { Button };
