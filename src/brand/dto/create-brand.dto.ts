import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsMongoId } from 'class-validator';
import { Types } from 'mongoose';

export class CreateBrandDto {
  @ApiProperty({ type: String, example: 'title', required: true })
  title: string;

  @ApiProperty({ type: String, example: 'sub_title', required: true })
  sub_title: string;

  @ApiProperty({
    type: String,
    description: 'Media ID',
    required: true,
    example: 'ID',
  })
  @IsMongoId()
  image: string;

  @ApiProperty({
    type: String,
    description: 'Media ID',
    required: true,
    example: 'ID',
  })
  @IsMongoId()
  background: string;
}
