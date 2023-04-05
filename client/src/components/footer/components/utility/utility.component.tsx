import { FC } from "react";
import styles from "./utility.module.scss";

const Utility: FC = () => (
  <div className={styles.utilityWrapper}>
    <h3 className={styles.name}>Utility Pages</h3>
    <a href="#">Style Guide</a>
    <a href="#">404 Not Found</a>
    <a href="#">Password Protected</a>
    <a href="#">Licences</a>
    <a href="#">Changelog</a>
  </div>
);

export { Utility };
