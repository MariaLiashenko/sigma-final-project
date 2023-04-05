import classNames from "classnames";
import { ChangeEvent, FC, MouseEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Input } from "../../..";
import { createOrder } from "../../../../api";
import { useAppContext } from "../../../../context";
import { Order } from "../../../../interfaces";
import inputStyles from "../../../input/input.module.scss";
import styles from "./form.module.scss";

const Form: FC = () => {
  const navigate = useNavigate();
  const { cart, dispatch } = useAppContext();

  const [order, setOrder] = useState<Omit<Order, "_id">>({
    products: cart.products,
    userCredentials: {
      adress: "",
      email: "",
      fullName: "",
      phone: "",
      message: "",
    },
  });

  const handleSubmit = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    const sendForm = async () => {
      try {
        await createOrder(order);
        dispatch({ type: "REMOVE_ALL_PRODUCTS" });
        navigate("/successfull-order");
      } catch (err) {
        console.log(err);
      }
    };

    sendForm();
  };

  return (
    <form className={styles.form}>
      <div className={styles.column}>
        <Input
          value={order?.userCredentials.fullName}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setOrder({
              ...order,
              userCredentials: {
                ...order.userCredentials,
                fullName: e.currentTarget.value,
              },
            })
          }
          type={"text"}
          label={"Full Name*"}
          placeholder={"Your full name"}
          className={styles.inp}
        />
        <Input
          value={order?.userCredentials.email}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setOrder({
              ...order,
              userCredentials: {
                ...order.userCredentials,
                email: e.currentTarget.value,
              },
            })
          }
          type={"email"}
          label={"Your Email*"}
          placeholder={"example@yourmail.com"}
          className={styles.inp}
        />
      </div>
      <div className={styles.column}>
        <Input
          value={order?.userCredentials.adress}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setOrder({
              ...order,
              userCredentials: {
                ...order.userCredentials,
                adress: e.currentTarget.value,
              },
            })
          }
          type={"text"}
          label={"Address*"}
          placeholder={"your company  address"}
          className={styles.inp}
        />
        <Input
          value={order?.userCredentials.phone}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setOrder({
              ...order,
              userCredentials: {
                ...order.userCredentials,
                phone: e.currentTarget.value,
              },
            })
          }
          type={"tel"}
          label={"Phone number*"}
          placeholder={"Enter your phone"}
          className={styles.inp}
        />
      </div>
      <div className={styles.wideColumn}>
        <span className={inputStyles.label}>Message</span>
        <textarea
          value={order?.userCredentials.message}
          onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
            setOrder({
              ...order,
              userCredentials: {
                ...order.userCredentials,
                message: e.currentTarget.value,
              },
            })
          }
          placeholder={"some extra information"}
          className={classNames(styles.wide, inputStyles.input)}
        />
      </div>

      <Button
        variant="darkFilled"
        className={styles.btnSubmit}
        type="submit"
        onClick={handleSubmit}
      >
        Confirm
      </Button>
    </form>
  );
};

export { Form };
