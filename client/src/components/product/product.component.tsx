import { FC } from "react";
import { ReactComponent as Star } from "../../assets/icons/star.svg";
import styles from "./product.module.scss";
import { ProductProps } from "./product.types";

const Product: FC<ProductProps> = ({
  name,
  type,
  image,
  rating,
  price,
  onClick,
}) => (
  <div
    role={"button"}
    tabIndex={0}
    className={styles.product}
    onClick={onClick}
  >
    <p className={styles.category}>{type}</p>
    <div
      className={styles.image}
      style={{ backgroundImage: `url(${image})` }}
    />
    <h3 className={styles.name}>{name}</h3>
    <div className={styles.rating}>
      <div>
        {price.old && <p className={styles.lastPrice}>${price.old}</p>}
        <p className={styles.price}>${price.current}</p>
      </div>
      <div className={styles.stars}>
        {new Array(rating).fill(0).map((_, index) => (
          <Star key={index} />
        ))}
      </div>
    </div>
  </div>
);

export { Product };
