import { ApiProperty } from '@nestjs/swagger';

export class CreateAdvantageDto {
  @ApiProperty({ type: String, example: 'title', required: true })
  title: string;

  @ApiProperty({ type: String, example: 'sub_title', required: true })
  sub_title: string;

  @ApiProperty({ type: String, example: 'image', required: true })
  image: string;
}
