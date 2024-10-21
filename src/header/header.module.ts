import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Header, HeaderSchema } from './entities/header.entity';
import { HeaderController } from './header.controller';
import { HeaderService } from './header.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Header.name, schema: HeaderSchema }]),
  ],
  controllers: [HeaderController],
  providers: [HeaderService],
  exports: [HeaderService],
})
export class HeaderModule {}
