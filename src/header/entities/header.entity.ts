import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export type HeaderDocument = Header & Document;
@Schema()
export class Header {
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

export const HeaderSchema = SchemaFactory.createForClass(Header);
