import { FC } from "react";
import SuccessfullOrderImage from "../../assets/images/successfull-order.png";
import { Footer } from "../../components";
import styles from "./successfull-order.module.scss";

const SuccessfullOrder: FC = () => (
  <>
    <img className={styles.image} src={SuccessfullOrderImage} />
    <Footer />
  </>
);

export { SuccessfullOrder };
