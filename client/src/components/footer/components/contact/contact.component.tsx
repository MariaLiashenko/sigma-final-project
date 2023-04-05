import { FC } from "react";
import styles from "./contact.module.scss";

const Contact: FC = () => (
  <address className={styles.contactWrapper}>
    <h3 className={styles.name}>Contact Us</h3>
    <p>Email</p>
    <a href="mailto:needhelp@Organia.com">needhelp@Organia.com</a>
    <p>Phone</p>
    <a href="tel:666 888 888"> 666 888 888</a>
    <p>Address</p>
    <p>88 road, borklyn street, USA</p>
  </address>
);

export { Contact };
