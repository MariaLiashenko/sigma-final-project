import classNames from "classnames";
import { FC } from "react";
import styles from "./input.module.scss";
import { InputProps } from "./input.types";

const Input: FC<InputProps> = ({
  type,
  placeholder,
  error,
  label,
  className,
  onChange,
  ...rest
}) => (
  <div className={styles.wrapper}>
    {label && <span className={styles.label}>{label}</span>}
    <input
      className={classNames(styles.input, className, error && styles["error"])}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      {...rest}
    />
  </div>
);

export { Input };
