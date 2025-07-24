import mongoose, { Document, Schema } from 'mongoose';

export interface IItem extends Document {
  name: string;
  quantity: number;
  price: number;
}

const itemSchema = new Schema<IItem>(
  {
    name: { type: String, required: true, trim: true },
    quantity: { type: Number, required: true, min: 1 },
    price: { type: Number, required: true, min: 0 },
  },
  { timestamps: true }
);

export const Item = mongoose.model<IItem>('Item', itemSchema);
