import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { Types } from 'mongoose';

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

  @Prop({ type: Types.ObjectId, ref: 'Media', required: false })
  @ApiProperty({ type: String, description: 'Media ID' })
  image: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: 'Media', required: false })
  @ApiProperty({ type: String, description: 'Media ID' })
  background: Types.ObjectId;
}

export const AdvantageSchema = SchemaFactory.createForClass(Advantage);
