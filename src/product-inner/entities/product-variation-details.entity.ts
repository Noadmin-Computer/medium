import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { Types } from 'mongoose';

@Schema()
export class ProductVariationDetails {
  @Prop()
  @ApiProperty({ type: String, description: 'Size' })
  @IsString()
  size: string;

  @Prop()
  @ApiProperty({ type: String, description: 'Price' })
  @IsString()
  price: string;

  @Prop({ type: Types.ObjectId, ref: 'Media' })
  @ApiProperty({ type: String, description: 'ID Image' })
  image: Types.ObjectId;
}

export const ProductVariationDetailsSchema = SchemaFactory.createForClass(
  ProductVariationDetails,
);
