import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { IsString, ValidateNested } from 'class-validator';
import { Types } from 'mongoose';
import { Brand } from 'src/brand/entities/brand.entity';
import { CategoryType } from 'src/category/entities/category-type.enum';
import { Type } from 'class-transformer';
import {
  ProductVariationDetails,
  ProductVariationDetailsSchema,
} from './product-variation-details.entity';

export type ProductInnerDocument = ProductInner & Document;

@Schema()
export class ProductInner {
  @Prop({ type: Types.ObjectId, ref: Brand.name })
  @ApiProperty({ type: String, description: 'ID Brand' })
  brand: Types.ObjectId;

  @Prop()
  @ApiProperty({ type: String, description: 'Title' })
  @IsString()
  title: string;

  @Prop({ type: Types.ObjectId, ref: 'Category', required: true })
  @ApiProperty({ type: String, description: 'Category' })
  category: Types.ObjectId;

  @Prop({ type: Map, of: ProductVariationDetailsSchema })
  @ApiProperty({ description: 'Variation', type: Map })
  @ValidateNested({ each: true })
  @Type(() => ProductVariationDetails)
  color: Map<string, ProductVariationDetails>;
}

export const ProductInnerSchema = SchemaFactory.createForClass(ProductInner);
