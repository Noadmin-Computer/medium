import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsString } from 'class-validator';

export type CabinetDocument = Cabinet & Document;
@Schema()
export class Cabinet {
  @Prop()
  @ApiProperty({ type: String, description: 'username' })
  @IsString()
  username: string;

  @Prop()
  @ApiProperty({ type: String, description: 'surname' })
  @IsString()
  surname: string;

  @Prop()
  @ApiProperty({ type: String, description: 'date' })
  @IsString()
  date: string;

  @Prop()
  @ApiProperty({ type: String, description: 'phone number' })
  @IsString()
  phone_number: string;

  @Prop()
  @ApiProperty({ type: String, description: 'gender' })
  @IsString()
  gender: string;

  @Prop()
  @ApiProperty({ type: String, description: 'ordered' })
  @IsBoolean()
  ordered: true;

  @Prop()
  @ApiProperty({ type: String, description: 'product_cart' })
  @IsString()
  product_card_local: string;

  @Prop()
  @ApiProperty({ type: String, description: 'product_cart' })
  @IsString()
  product_card_db: string;
}

export const CabinetSchema = SchemaFactory.createForClass(Cabinet);
