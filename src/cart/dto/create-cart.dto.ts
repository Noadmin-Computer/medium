import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export type CartDocument = CreateCartDto & Document;
@Schema()
export class CreateCartDto {
  @Prop()
  @ApiProperty({ type: String, example: 'count' })
  @IsString()
  count: string;

  @Prop()
  @ApiProperty({ type: String, example: 'username' })
  @IsString()
  username: string;

  @Prop()
  @ApiProperty({ type: String, example: 'size' })
  @IsString()
  size: string;

  @Prop()
  @ApiProperty({ type: String, example: 'color' })
  @IsString()
  color: string;

  @Prop()
  @ApiProperty({ type: String, example: 'price' })
  @IsString()
  price: string;
}

export const CartSchema = SchemaFactory.createForClass(CreateCartDto);
