import { Module } from '@nestjs/common';
import { ProductInnerService } from './product-inner.service';
import { ProductInnerController } from './product-inner.controller';

@Module({
  controllers: [ProductInnerController],
  providers: [ProductInnerService],
})
export class ProductInnerModule {}
