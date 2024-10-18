import { Module } from '@nestjs/common';
import { BrandModule } from './brand/brand.module';
import { AdvantagesModule } from './advantages/advantages.module';
import { HeaderModule } from './header/header.module';

@Module({
  imports: [BrandModule, AdvantagesModule, HeaderModule],
})
export class AppModule {}
