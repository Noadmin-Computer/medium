import { ApiProperty } from '@nestjs/swagger';

export class CreateCabinetDto {
  @ApiProperty({ type: String, example: 'username', required: true })
  username: string;

  @ApiProperty({ type: String, example: 'surname', required: true })
  surname: string;

  @ApiProperty({ type: String, example: 'gender', required: true })
  gender: string;

  @ApiProperty({ type: String, example: 'date', required: true })
  date: string;

  @ApiProperty({ type: String, example: '+998123456789', required: true })
  phone_number: string;

  @ApiProperty({ type: String, example: true, required: true })
  ordered: true;

  @ApiProperty({ type: String, example: 'product_card', required: true })
  product_card_local: string;

  @ApiProperty({ type: String, example: 'product_card', required: true })
  product_card_db: string;
}
