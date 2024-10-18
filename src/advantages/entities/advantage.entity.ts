import { Prop } from '@nestjs/mongoose';
import { IsString } from 'class-validator';

export class Advantage {
  @Prop()
  @IsString()
  title: string;
}
