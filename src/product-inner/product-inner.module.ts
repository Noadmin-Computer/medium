import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {
  ProductInner,
  ProductInnerSchema,
} from './entities/product-inner.entity';
import { ProductInnerController } from './product-inner.controller';
import { ProductInnerService } from './product-inner.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: ProductInner.name, schema: ProductInnerSchema },
    ]),
  ],
  controllers: [ProductInnerController],
  providers: [ProductInnerService],
  exports: [ProductInnerService],
})
export class ProductInnerModule {}
