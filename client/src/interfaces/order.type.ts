interface Order {
  _id: string;
  products: {
    id: string;
    quantity: number;
  }[];
  userCredentials: {
    fullName: string;
    email: string;
    adress: string;
    phone: string;
    message?: string;
  };
}

export type { Order };
