import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export type CartDocument = Cart & Document;
@Schema()
export class Cart {
  @Prop()
  @ApiProperty({ type: String, description: 'count' })
  @IsString()
  count: string;

  @Prop()
  @ApiProperty({ type: String, description: 'title' })
  @IsString()
  title: string;

  @Prop()
  @ApiProperty({ type: String, description: 'size' })
  @IsString()
  size: string;

  @Prop()
  @ApiProperty({ type: String, description: 'color' })
  @IsString()
  color: string;

  @Prop()
  @ApiProperty({ type: String, description: 'price' })
  @IsString()
  price: string;
}

export const CartSchema = SchemaFactory.createForClass(Cart);
