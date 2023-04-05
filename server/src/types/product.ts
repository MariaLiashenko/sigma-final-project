import { Document } from 'mongoose';

interface Product extends Document {
  _id: string;
  type: string;
  name: string;
  briefing: string;
  description?: string;
  additionalInfo?: string;
  price: {
    old?: number;
    current: number;
  };
  rating: 1 | 2 | 3 | 4 | 5;
  image: string;
}

export type { Product };
