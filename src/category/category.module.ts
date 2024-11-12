import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CategoryController } from './category.controller';
import { CategoryService } from './category.service';
import { Category, CategorySchema } from './entities/category.enum';
import { CategorySeeder } from './seed.generator';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Category.name, schema: CategorySchema },
    ]),
  ],
  providers: [CategoryService, CategorySeeder],
  controllers: [CategoryController],
  exports: [CategoryService, MongooseModule, CategorySeeder],
})
export class CategoryModule {}
