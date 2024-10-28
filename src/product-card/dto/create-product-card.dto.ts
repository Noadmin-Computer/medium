import { ApiProperty } from '@nestjs/swagger';

export class CreateProductCardDto {
  @ApiProperty({ type: String, example: 'color', required: true })
  color: string;

  @ApiProperty({ type: String, example: 'size', required: true })
  size: string;

  @ApiProperty({ type: String, example: 'price', required: true })
  price: string;

  @ApiProperty({ type: String, example: 'who_for', required: true })
  who_for: string;

  @ApiProperty({ type: String, example: 'title', required: true })
  title: string;

  @ApiProperty({ type: String, example: 'category', required: true })
  category: string;

  @ApiProperty({ type: String, example: 'sub_title', required: true })
  sub_title: string;

  @ApiProperty({ type: String, example: 'image', required: true })
  image: string;
}
