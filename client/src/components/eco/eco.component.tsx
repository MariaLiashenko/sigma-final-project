import { FC } from "react";
import { Wrapper } from "../";
import styles from "./eco.module.scss";

const Eco: FC = () => (
  <Wrapper id={"eco"} className={styles.ecoWrapper}>
    <div className={styles.container}>
      <p className={styles.name}>Eco Friendly</p>
      <h2 className={styles.title}>Econis is a Friendly Organic Store</h2>
      <div className={styles.point}>
        <p className={styles.name}>Start with Our Company First</p>
        <p className={styles.description}>
          Sed ut perspiciatis unde omnis iste natus error sit voluptat
          accusantium doloremque laudantium. Sed ut perspiciatis.
        </p>
      </div>
      <div className={styles.point}>
        <p className={styles.name}>Learn How to Grow Yourself</p>
        <p className={styles.description}>
          Sed ut perspiciatis unde omnis iste natus error sit voluptat
          accusantium doloremque laudantium. Sed ut perspiciatis.
        </p>
      </div>
      <div className={styles.point}>
        <p className={styles.name}>Farming Strategies of Today</p>
        <p className={styles.description}>
          Sed ut perspiciatis unde omnis iste natus error sit voluptat
          accusantium doloremque laudantium. Sed ut perspiciatis.
        </p>
      </div>
    </div>
  </Wrapper>
);

export { Eco };
