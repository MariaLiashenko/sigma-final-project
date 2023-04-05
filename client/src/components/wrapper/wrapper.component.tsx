import classNames from "classnames";
import { FC } from "react";
import styles from "./wrapper.module.scss";
import { WrapperProps } from "./wrapper.types";

const Wrapper: FC<WrapperProps> = ({ children, className, id }) => (
  <section id={id} className={classNames(styles.wrapper, className)}>
    {children}
  </section>
);

export { Wrapper };
