import { Schema } from 'mongoose';
import { Order } from 'src/types';

const OrderScheme = new Schema<Order>({
  products: [
    {
      productId: Number,
      quantity: Number,
    },
  ],
  userCredentials: {
    fullName: String,
    email: String,
    phone: String,
    message: String,
  },
});

export { OrderScheme };
