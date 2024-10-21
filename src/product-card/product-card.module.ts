import { Module } from '@nestjs/common';
import { ProductCardService } from './product-card.service';
import { ProductCardController } from './product-card.controller';

@Module({
  controllers: [ProductCardController],
  providers: [ProductCardService],
})
export class ProductCardModule {}
