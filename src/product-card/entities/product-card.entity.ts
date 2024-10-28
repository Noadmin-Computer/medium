import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { ProductInner } from 'src/product-inner/entities/product-inner.entity';

@Schema()
export class ProductCard {
  @Prop({ required: true })
  productCard_title: string;

  @Prop({ required: true })
  productCard_subtitle: string;

  @Prop({ required: true })
  productCard_price: number;

  @Prop({ required: true })
  productCard_category: string;

  @Prop({ type: [{ type: Types.ObjectId, ref: 'ProductInner' }] })
  productInners: ProductInner[];
}

export type ProductCardDocument = ProductCard & Document;
export const ProductCardSchema = SchemaFactory.createForClass(ProductCard);
