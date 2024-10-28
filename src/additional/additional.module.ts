import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AdditionalController } from './additional.controller';
import { AdditionalService } from './additional.service';
import { Additional, AdditionalSchema } from './entities/additional.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Additional.name, schema: AdditionalSchema },
    ]),
  ],
  controllers: [AdditionalController],
  providers: [AdditionalService],
  exports: [AdditionalService],
})
export class AdditionalModule {}
