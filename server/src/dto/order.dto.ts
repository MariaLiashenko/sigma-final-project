class OrderDTO {
  products: Array<{
    productId: number;
    quantity: number;
  }>;
  userCredentials: {
    fullName: string;
    email: string;
    adress: string;
    phone: string;
    message?: string;
  };
}

export { OrderDTO };
