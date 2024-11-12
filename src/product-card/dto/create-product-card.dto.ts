import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsString } from 'class-validator';
import { CategoryType } from 'src/category/entities/category-type.enum';

export class CreateProductCardDto {
  @IsString()
  @ApiProperty({ type: String, example: 'color', required: true })
  color: string;
  @IsString()
  @ApiProperty({ type: String, example: 'size', required: true })
  size: string;

  @IsString()
  @ApiProperty({ type: String, example: 'price', required: true })
  price: string;

  @IsString()
  @ApiProperty({ type: String, example: 'who_for', required: true })
  who_for: string;

  @IsString()
  @ApiProperty({ type: String, example: 'title', required: true })
  title: string;

  @ApiProperty({ enum: CategoryType, example: CategoryType.DRESS })
  @IsEnum(CategoryType)
  category: CategoryType;

  @IsString()
  @ApiProperty({ type: String, example: 'sub_title', required: true })
  sub_title: string;

  @IsString()
  @ApiProperty({
    type: String,
    description: 'Media ID',
    required: true,
    example: 'Image ID',
  })
  image: string;
}
