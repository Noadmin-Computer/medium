import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AdditionalModule } from './additional/additional.module';
import { AdvantagesModule } from './advantages/advantages.module';
import { BrandsModule } from './brand/brand.module';
import { CabinetModule } from './cabinet/cabinet.module';
import { CartModule } from './cart/cart.module';
import { CategoryModule } from './category/category.module';
import { HeaderModule } from './header/header.module';
import { ProductCardModule } from './product-card/product-card.module';
import { ProductInnerModule } from './product-inner/product-inner.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://gaynutdinovasliddin:codecoffee09@cluster0.j4y7f.mongodb.net/medium?retryWrites=true&w=majority',
    ),
    BrandsModule,
    AdvantagesModule,
    HeaderModule,
    ProductInnerModule,
    ProductCardModule,
    UserModule,
    CabinetModule,
    AdditionalModule,
    CartModule,
    CategoryModule,
  ],
})
export class AppModule {}
