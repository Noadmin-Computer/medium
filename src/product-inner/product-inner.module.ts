import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {
  ProductInner,
  ProductInnerSchema,
} from './entities/product-inner.entity';
import { ProductsInnerController } from './product-inner.controller';
import { ProductsInnerService } from './product-inner.service';
import { BrandsModule } from '../brand/brand.module';
@Module({
  imports: [
    MongooseModule.forFeature([
      { name: ProductInner.name, schema: ProductInnerSchema },
    ]),
    BrandsModule,
  ],
  controllers: [ProductsInnerController],
  providers: [ProductsInnerService],
  exports: [ProductsInnerService],
})
export class ProductInnerModule {}
