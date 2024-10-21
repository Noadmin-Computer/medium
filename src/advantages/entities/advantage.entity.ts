import { Prop, Schema } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { SchemaFactory } from '@nestjs/mongoose';

export type AdvantageDocument = Advantage & Document;
@Schema()
export class Advantage {
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
}

export const AdvantageSchema = SchemaFactory.createForClass(Advantage);
