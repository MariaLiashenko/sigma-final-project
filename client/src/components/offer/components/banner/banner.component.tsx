import styles from "./banner.module.scss";
import { BannerProps } from "./banner.types";

const Banner: React.FC<BannerProps> = ({ name, article, background }) => (
  <div
    className={styles.banner}
    style={{ backgroundImage: `url(${background})` }}
  >
    <p className={styles.name}>{name}</p>
    <h3 className={styles.article}>{article}</h3>
  </div>
);

export { Banner };
