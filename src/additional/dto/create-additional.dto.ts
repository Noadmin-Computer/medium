import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export type CreateAdditionalDocument = CreateAdditionalDto & Document;
@Schema()
export class CreateAdditionalDto {
  @Prop()
  @ApiProperty({ type: String, example: 'title' })
  @IsString()
  title: string;

  @Prop()
  @ApiProperty({ type: String, example: 'sub_title' })
  @IsString()
  sub_title: string;

  @Prop()
  @ApiProperty({ type: String, example: 'external_part' })
  @IsString()
  external_part: string;

  @Prop()
  @ApiProperty({ type: String, example: 'lining' })
  @IsString()
  lining: string;

  @Prop()
  @ApiProperty({ type: String, example: 'care' })
  @IsString()
  care: string;

  @Prop()
  @ApiProperty({ type: String, example: 'made' })
  @IsString()
  made: string;
}

export const ADdSchema = SchemaFactory.createForClass(CreateAdditionalDto);
