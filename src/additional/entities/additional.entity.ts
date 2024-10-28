import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export type AdditionalDocument = Additional & Document;
@Schema()
export class Additional {
  @Prop()
  @ApiProperty({ type: String, description: 'title' })
  @IsString()
  title: string;

  @Prop()
  @ApiProperty({ type: String, description: 'sub_title' })
  @IsString()
  sub_title: string;

  @Prop()
  @ApiProperty({ type: String, description: 'external_part' })
  @IsString()
  external_part: string;

  @Prop()
  @ApiProperty({ type: String, description: 'lining' })
  @IsString()
  lining: string;

  @Prop()
  @ApiProperty({ type: String, description: 'care' })
  @IsString()
  care: string;

  @Prop()
  @ApiProperty({ type: String, description: 'made' })
  @IsString()
  made: string;
}

export const AdditionalSchema = SchemaFactory.createForClass(Additional);
