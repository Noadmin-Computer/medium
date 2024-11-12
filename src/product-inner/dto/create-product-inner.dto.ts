import { ApiProperty } from '@nestjs/swagger';
import { IsString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { CategoryType } from 'src/category/entities/category-type.enum';
import { IsEnum } from 'class-validator';

class ProductVariationDetailsDto {
  @ApiProperty({ type: String, example: 'size', required: true })
  @IsString()
  size: string;

  @ApiProperty({ type: String, example: 'price', required: true })
  @IsString()
  price: string;

  @ApiProperty({ type: String, example: 'ID image', required: true })
  @IsString()
  image: string;
}

export class CreateProductInnerDto {
  @ApiProperty({ type: String, example: 'ID brand', required: true })
  @IsString()
  brand: string;

  @ApiProperty({ type: String, example: 'title', required: true })
  @IsString()
  title: string;

  @ApiProperty({ enum: CategoryType, example: CategoryType.DRESS })
  @IsEnum(CategoryType)
  category: CategoryType;

  @ApiProperty({
    type: Map,
    example: {
      blue: { size: 'M', price: '1000', image: 'ID' },
      red: { size: 'L', price: '1200', image: 'ID' },
    },
    description: 'Variation',
  })
  @ValidateNested({ each: true })
  @Type(() => ProductVariationDetailsDto)
  color: Map<string, ProductVariationDetailsDto>;
}
