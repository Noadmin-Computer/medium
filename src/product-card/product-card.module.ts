import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductCard, ProductCardSchema } from './entities/product-card.entity';
import { ProductCardController } from './product-card.controller';
import { ProductCardService } from './product-card.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: ProductCard.name, schema: ProductCardSchema },
    ]),
  ],
  controllers: [ProductCardController],
  providers: [ProductCardService],
  exports: [ProductCardService],
})
export class ProductCardModule {}
