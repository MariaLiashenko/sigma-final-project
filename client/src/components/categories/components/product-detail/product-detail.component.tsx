import styles from "./product-detail.module.scss";
import { ProductDetailProps } from "./product-detail.types";
import { ReactComponent as Star } from "../../../../assets/icons/star.svg";

import { ChangeEvent, FC, useState } from "react";
import classNames from "classnames";
import { Button, Input, Wrapper } from "../../..";
import { useAppContext } from "../../../../context";

const ProductDetail: FC<ProductDetailProps> = ({
  _id,
  name,
  type,
  image,
  rating,
  price,
  briefing,
  description,
  additionalInfo,
}) => {
  const { dispatch } = useAppContext();

  const [isClosed, setIsClosed] = useState<boolean>(false);
  const [productQuantity, setProductQuantity] = useState<number>(1);
  const [tab, setTab] = useState<"description" | "info">("description");

  const handleClose = () => {
    setIsClosed(true);
  };

  const tabHandler = () => {
    setTab(tab === "description" ? "info" : "description");
  };

  const quantityHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setProductQuantity(+event.currentTarget.value);
  };

  const addProductHandler = () => {
    dispatch({
      type: "ADD_PRODUCT",
      payload: { id: _id, quantity: productQuantity },
    });
  };

  return (
    <div
      className={classNames(styles.productDetail, isClosed && styles["active"])}
    >
      <section className={styles.pink}>
        <Wrapper>
          <div className={styles.productCard}>
            <p className={styles.category}>{type}</p>
            <div
              className={styles.image}
              style={{ backgroundImage: `url(${image})` }}
            />
            <div className={styles.productText}>
              <h3 className={styles.name}>{name}</h3>
              <div className={styles.stars}>
                {new Array(rating).fill(0).map((_, index) => (
                  <Star key={index} />
                ))}
              </div>
              <div className={styles.rating}>
                {price.old && (
                  <span className={styles.lastPrice}>${price.old}</span>
                )}
                <span className={styles.price}>${price.current}</span>
              </div>
              <p className={styles.content}>{briefing}</p>
              <div className={styles.select}>
                <p>Quantity :</p>
                <Input
                  type="number"
                  min={0}
                  value={productQuantity}
                  onChange={quantityHandler}
                  className={styles.input}
                />
                <Button variant="darkFilled" onClick={addProductHandler}>
                  Add To Cart
                </Button>
              </div>
            </div>
          </div>
        </Wrapper>
        <div className={styles.productInformation}>
          <div className={styles.buttons}>
            <Button
              variant={tab === "info" ? "lightOutline" : "darkFilled"}
              onClick={tabHandler}
            >
              Product Description
            </Button>
            <Button
              variant={tab === "description" ? "lightOutline" : "darkFilled"}
              onClick={tabHandler}
            >
              Additional Info
            </Button>
          </div>
          <p className={classNames(tab === "description" && styles["text"])}>
            {description}
          </p>
          <p className={classNames(tab === "info" && styles["text"])}>
            {additionalInfo}
          </p>
        </div>

        <Button
          variant="darkFilled"
          onClick={handleClose}
          className={styles.cancel}
        >
          X
        </Button>
      </section>
    </div>
  );
};

export { ProductDetail };
