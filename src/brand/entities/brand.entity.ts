import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export type BrandDocument = Brand & Document;
@Schema()
export class Brand {
  @Prop()
  @ApiProperty({ type: String, description: 'title' })
  @IsString()
  title: string;

  @Prop()
  @ApiProperty({ type: String, description: 'sub_title' })
  @IsString()
  sub_title: string;

  @Prop()
  @ApiProperty({ type: String, description: 'image' })
  @IsString()
  image: string;

  @Prop()
  @ApiProperty({ type: String, description: 'image' })
  @IsString()
  background: string;
}

export const BrandSchema = SchemaFactory.createForClass(Brand);
