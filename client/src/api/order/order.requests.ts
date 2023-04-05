import axios, { AxiosError } from "axios";
import { Order } from "../../interfaces";
import { BACKEND_URL } from "../../utils/constants";

const createOrder = async (order: Omit<Order, "_id">): Promise<Order> => {
  try {
    const _order = await axios.post(`${BACKEND_URL}/order/create`, order);

    return _order.data;
  } catch (err) {
    alert(err);
    throw new Error((err as AxiosError).message);
  }
};

export { createOrder };
