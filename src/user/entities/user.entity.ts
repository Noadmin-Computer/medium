import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString } from 'class-validator';

export type UserDocument = User & Document;
@Schema()
export class User {
  @Prop()
  @ApiProperty({ type: String, description: 'username' })
  @IsString()
  username: string;

  @Prop()
  @ApiProperty({ type: String, description: 'surname' })
  @IsString()
  surname: string;

  @Prop()
  @ApiProperty({ type: String, description: 'middle_name' })
  @IsString()
  middle_name: string;

	@Prop()
  @ApiProperty({ type: String, description: 'gender' })
  @IsString()
  gender: string;

  @Prop()
  @ApiProperty({ type: String, description: 'email' })
  @IsEmail()
  email: string;

  @Prop()
  @ApiProperty({ type: String, description: 'phone number' })
  @IsString()
  phone_number: string;

  @Prop()
  @ApiProperty({ type: String, description: 'cart' })
  @IsString()
  cart: string;

  @Prop()
  @ApiProperty({ type: String, description: 'favorites' })
  @IsString()
  favorites: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
