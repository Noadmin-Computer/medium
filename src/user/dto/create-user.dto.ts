import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ type: String, example: 'username', required: true })
  username: string;

  @ApiProperty({ type: String, example: 'surname', required: true })
  surname: string;

  @ApiProperty({ type: String, example: 'middle name', required: true })
  middle_name: string;

  @ApiProperty({ type: String, example: 'gender', required: true })
  gender: string;

  @ApiProperty({ type: String, example: 'fake@email.com', required: true })
  email: string;

  @ApiProperty({ type: String, example: '+998123456789', required: true })
  phone_number: string;

  @ApiProperty({ type: String, example: 'cart', required: true })
  cart: string;

  @ApiProperty({ type: String, example: 'favorites', required: true })
  favorites: string;
}
