import { ApiProperty } from '@nestjs/swagger';

export class CreateAdvantageDto {
  @ApiProperty({ type: String, example: 'title', required: true })
  title: string;

  @ApiProperty({ type: String, example: 'sub_title', required: true })
  sub_title: string;

  @ApiProperty({
    type: String,
    description: 'Media ID',
    required: true,
    example: 'Image ID',
  })
  image: string;
}
