import { Document, Schema, Types } from 'mongoose';

export type CategoryDocument = Category & Document;
export class Category {
  _id: Types.ObjectId;
  category: string;
}

export const CategorySchema = new Schema<Category>({
  category: { type: String, required: true },
});
