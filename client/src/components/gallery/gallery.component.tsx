import { FC } from "react";
import styles from "./gallery.module.scss";
import { Button } from "../";

const Gallery: FC = () => (
  <section className={styles.galleryWrapper}>
    <div className={styles.card}>
      <Button className={styles.button} variant="lightOutline">
        Organic Juice
      </Button>
    </div>
    <div className={styles.card}>
      <Button className={styles.button} variant="lightOutline">
        Organic Food
      </Button>
    </div>
    <div className={styles.card}>
      <Button className={styles.button} variant="lightOutline">
        Nuts Cookies
      </Button>
    </div>
  </section>
);

export { Gallery };
