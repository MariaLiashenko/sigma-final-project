import { Document } from 'mongoose';

interface Order extends Document {
  _id: string;
  products: {
    productId: number;
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
