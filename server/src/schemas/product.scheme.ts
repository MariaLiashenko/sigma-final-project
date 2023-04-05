import { Schema } from 'mongoose';
import { Product } from 'src/types';

const ProductScheme = new Schema<Product>({
  type: String,
  name: String,
  briefing: String,
  additionalInfo: String,
  description: String,
  price: {
    old: Number,
    current: Number,
  },
  rating: Number,
  image: String,
});

export { ProductScheme };
