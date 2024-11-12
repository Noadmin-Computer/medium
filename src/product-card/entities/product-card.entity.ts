import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document, Types } from 'mongoose';
import { ProductInner } from 'src/product-inner/entities/product-inner.entity';

@Schema()
export class ProductCard {
  @Prop({ type: Types.ObjectId, ref: 'Media', required: false })
  @ApiProperty({ type: String, description: 'Media ID' })
  image: Types.ObjectId;

  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  subtitle: string;

  @Prop({ required: true })
  price: number;

  @Prop({ type: Types.ObjectId, ref: 'Category', required: true })
  category: Types.ObjectId;

  @Prop({ type: [{ type: Types.ObjectId, ref: 'ProductInner' }] })
  productInners: ProductInner[];
}

export type ProductCardDocument = ProductCard & Document;
export const ProductCardSchema = SchemaFactory.createForClass(ProductCard);
