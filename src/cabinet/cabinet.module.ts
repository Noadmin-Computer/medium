import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CabinetController } from './cabinet.controller';
import { CabinetService } from './cabinet.service';
import { Cabinet, CabinetSchema } from './entities/cabinet.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Cabinet.name, schema: CabinetSchema }]),
  ],
  controllers: [CabinetController],
  providers: [CabinetService],
  exports: [CabinetService],
})
export class CabinetModule {}
