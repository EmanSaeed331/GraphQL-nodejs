import { Document, Model, model, Schema } from 'mongoose';

export interface IProduct extends Document {
  name: string;
  price: number;
}

const ProductSchema = new Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
});
export const Product: Model<IProduct> = model<IProduct>(
  'Product',
  ProductSchema
);
