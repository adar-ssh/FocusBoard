import mongoose, { Document, Schema } from 'mongoose';

export interface ICategory extends Document {
  name: string;
  type: 'productive' | 'distraction' | 'neutral';
  keywords: string[];  
}

const CategorySchema: Schema = new Schema({
  name: { type: String, required: true },
  type: { type: String, enum: ['productive', 'distraction', 'neutral'], required: true },
  keywords: [{ type: String, default: [] }],
}, { timestamps: true });

export const Category = mongoose.model<ICategory>('Category', CategorySchema);