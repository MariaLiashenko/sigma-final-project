import axios, { Axios, AxiosError } from "axios";
import { BACKEND_URL } from "../../utils/constants";
import { Product } from "../../interfaces";

const getProductsByPage = async (page: number): Promise<Product[]> => {
  try {
    const products = await axios.get(`${BACKEND_URL}/product?page=${page}`);

    return products.data;
  } catch (err) {
    alert(err);
    throw new Error((err as AxiosError).message);
  }
};

const getProductsByType = async (type: string): Promise<Product[]> => {
  try {
    const products = await axios.get(`${BACKEND_URL}/product?type=${type}`);

    return products.data;
  } catch (err) {
    alert(err);
    throw new Error((err as AxiosError).message);
  }
};

const getProductById = async (id: string): Promise<Product> => {
  try {
    const product = await axios.get(`${BACKEND_URL}/product/${id}`);

    return product.data;
  } catch (err) {
    alert(err);
    throw new Error((err as AxiosError).message);
  }
};

export { getProductsByPage, getProductsByType, getProductById };
