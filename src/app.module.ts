import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AdvantagesModule } from './advantages/advantages.module';
import { BrandsModule } from './brand/brand.module';
import { HeaderModule } from './header/header.module';
import { ProductInnerModule } from './product-inner/product-inner.module';
import { ProductCardModule } from './product-card/product-card.module';
import { UserModule } from './user/user.module';
import { CabinetModule } from './cabinet/cabinet.module';
import { AdditionalModule } from './additional/additional.module';
import { CartModule } from './cart/cart.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/medium'),
    BrandsModule,
    AdvantagesModule,
    HeaderModule,
    ProductInnerModule,
    ProductCardModule,
    UserModule,
    CabinetModule,
    AdditionalModule,
    CartModule,
  ],
})
export class AppModule {}
