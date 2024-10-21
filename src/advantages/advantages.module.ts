import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AdvantagesController } from './advantages.controller';
import { AdvantagesService } from './advantages.service';
import { Advantage, AdvantageSchema } from './entities/advantage.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Advantage.name, schema: AdvantageSchema },
    ]),
  ],
  controllers: [AdvantagesController],
  providers: [AdvantagesService],
})
export class AdvantagesModule {}
