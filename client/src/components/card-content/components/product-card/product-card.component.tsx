import styles from "./product-card.module.scss";
import { ProductProps } from "../../../product/product.types";
import { ChangeEvent, FC, useState } from "react";
import { Button, Input } from "../../../";
import { useAppContext } from "../../../../context";

const ProductCard: FC<ProductProps> = ({
  _id,
  name,
  image,
  price,
  onClick,
}) => {
  const { cart, dispatch } = useAppContext();

  const [quantity, setQuantity] = useState(
    cart.products.find(({ id }) => id === _id)!.quantity
  );

  const addProductHandler = () => {
    dispatch({
      type: "REMOVE_PRODUCT",
      payload: _id,
    });
    location.reload();
  };

  const quantityHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setQuantity(+event.currentTarget.value);
    dispatch({
      type: "UPDATE_PRODUCT_QUANTITY",
      payload: { id: _id, quantity: quantity + 1 },
    });
  };

  return (
    <div className={styles.productCard} onClick={onClick}>
      <div
        className={styles.image}
        style={{ backgroundImage: `url(${image})` }}
      />
      <h3 className={styles.name}>{name}</h3>
      {price.old && <p className={styles.lastPrice}>${price.old}</p>}
      <p className={styles.price}>${price.current}</p>
      <div className={styles.container}>
        <p className={styles.quantity}>Quantity :</p>
        <Input
          type="number"
          min={0}
          value={quantity}
          onChange={quantityHandler}
          className={styles.inputCard}
        />

        <Button
          variant="darkFilled"
          className={styles.btn}
          onClick={addProductHandler}
        >
          X
        </Button>
      </div>
    </div>
  );
};

export { ProductCard };
