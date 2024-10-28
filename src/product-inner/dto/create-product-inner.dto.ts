import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsArray, ValidateNested } from 'class-validator';

class CreateProductVariationDto {
  @ApiProperty({ type: String, example: 'color', required: true })
  color: string;

  @ApiProperty({ type: String, example: 'price', required: true })
  price: string;

  @ApiProperty({ type: String, example: 'size', required: true })
  size: string;

  @ApiProperty({ type: String, example: 'image', required: true })
  image: string;
}

export class CreateProductInnerDto {
  @ApiProperty({ type: String, example: 'brand', required: true })
  brand: string;

  @ApiProperty({ type: String, example: 'title', required: true })
  title: string;

  @ApiProperty({ type: String, example: 'category', required: true })
  category: string;

  @ApiProperty({ type: [CreateProductVariationDto], required: true })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateProductVariationDto)
  variations: CreateProductVariationDto[];
}
