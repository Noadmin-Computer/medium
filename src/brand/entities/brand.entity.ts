import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Types } from 'mongoose';

export type BrandDocument = Brand & Document;

@Schema()
export class Brand {
  @Prop()
  @ApiProperty({ type: String, description: 'Title' })
  title: string;

  @Prop()
  @ApiProperty({ type: String, description: 'Subtitle' })
  sub_title: string;

  @Prop({ type: Types.ObjectId, ref: 'Media', required: false })
  @ApiProperty({ type: String, description: 'Media ID' })
  image?: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: 'Media', required: true })
  @ApiProperty({ type: String, description: 'Background Media ID' })
  background: Types.ObjectId;
}

export const BrandSchema = SchemaFactory.createForClass(Brand);
