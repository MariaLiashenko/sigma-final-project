import { FC, useCallback, useEffect, useState } from "react";
import { Button, Wrapper } from "..";
import { getProductById } from "../../api";
import { useAppContext } from "../../context";
import { Product } from "../../interfaces";
import styles from "./card-content.module.scss";
import { ProductCard } from "./components";
import { Form } from "./components/form";

const CardContent: FC = () => {
  const { cart } = useAppContext();

  const [orders, setOrders] = useState<Product[]>([]);
  const [discount, setDiscount] = useState<number>(0);
  const [cost, setCost] = useState<number>(0);
  const [buttonText, setButtonText] = useState<string>("To order");
  const [formIsOpened, setFormIsOpened] = useState<boolean>(false);

  useEffect(() => {
    let totalCost = 0;
    let totalDiscount = 0;

    const fetchOrders = async () => {
      const newOrders = await Promise.all(
        cart.products.map(async ({ id }) => {
          const product = await getProductById(id);
          let PrId = product._id;
          let quantity = cart.products.find(({ id }) => id === PrId)!.quantity;

          product.price.old &&
            (totalDiscount +=
              quantity * (product.price.old - product.price.current));
          totalCost += quantity * product.price.current;
          return product;
        })
      );
      setOrders(newOrders);
      setCost(totalCost);
      setDiscount(totalDiscount);
    };

    fetchOrders();
  }, [cart]);

  const handleClick = useCallback(() => {
    setFormIsOpened(!formIsOpened);
    setButtonText("Confirm");
  }, [formIsOpened]);

  return (
    <Wrapper className={styles.cardContent}>
      {orders.map((product) => (
        <ProductCard key={product._id} {...product} />
      ))}

      <div className={styles.price}>
        <div>
          <p>Total Cost</p>
          <span>{cost}</span>
        </div>
        <div>
          <p>Discount</p>
          <span>{discount}</span>
        </div>
      </div>

      {!formIsOpened && (
        <Button
          variant="darkFilled"
          className={styles.btn}
          onClick={handleClick}
        >
          {buttonText}
        </Button>
      )}

      {formIsOpened && <Form />}
    </Wrapper>
  );
};

export { CardContent };
