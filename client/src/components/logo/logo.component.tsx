import { FC } from "react";
import { ReactComponent as LogoIcon } from "../../assets/icons/logo.svg";

import styles from "./logo.module.scss";

const Logo: FC = () => <LogoIcon className={styles.logo}></LogoIcon>;

export { Logo };
