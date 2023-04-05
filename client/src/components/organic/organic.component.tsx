import { FC, useEffect, useState } from "react";
import { Product, Wrapper } from "..";
import styles from "./organic.module.scss";
import { getProductsByType } from "../../api";
import { Product as ProductType } from "../../interfaces";

const Organic: FC = () => {
  const [products, setProducts] = useState<ProductType[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const products = await getProductsByType("Vegetable");
        setProducts(products);
      } catch (error) {
        alert(error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <Wrapper className={styles.organicWrapper}>
      <p className={styles.name}>Offer</p>
      <h2 className={styles.title}>We Offer Organic For You</h2>
      <div className={styles.products}>
        {products.map((product) => (
          <Product key={product._id} {...product} />
        ))}
      </div>
    </Wrapper>
  );
};

export { Organic };
