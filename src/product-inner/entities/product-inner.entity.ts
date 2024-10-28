import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsArray, IsString, ValidateNested } from 'class-validator';

export type ProductInnerDocument = ProductInner & Document;

class ProductVariation {
  @Prop()
  @ApiProperty({ type: String, description: 'color' })
  @IsString()
  color: string;

  @Prop()
  @ApiProperty({ type: String, description: 'price' })
  @IsString()
  price: string;

  @Prop()
  @ApiProperty({ type: String, description: 'size' })
  @IsString()
  size: string;

  @Prop()
  @ApiProperty({ type: String, description: 'category' })
  @IsString()
  category: string;

  @Prop()
  @ApiProperty({ type: String, description: 'image' })
  @IsString()
  image: string;
}

@Schema()
export class ProductInner {
  @Prop()
  @ApiProperty({ type: String, description: 'brand' })
  @IsString()
  brand: string;

  @Prop()
  @ApiProperty({ type: String, description: 'title' })
  @IsString()
  title: string;

  @Prop({ type: [ProductVariation] })
  @ApiProperty({ type: [ProductVariation], description: 'variations' })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ProductVariation)
  variations: ProductVariation[];
}

export const ProductInnerSchema = SchemaFactory.createForClass(ProductInner);
