// category.seeder.ts
import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CategoryType } from './entities/category-type.enum';
import { Category, CategoryDocument } from './entities/category.enum';

@Injectable()
export class CategorySeeder {
  private readonly logger = new Logger(CategorySeeder.name);

  constructor(
    @InjectModel(Category.name)
    private readonly categoryModel: Model<CategoryDocument>,
  ) {}

  async seed(): Promise<void> {
    try {
      const categories: CategoryType[] = [
        CategoryType.COAT,
        CategoryType.DRESS,
        CategoryType.HOODIE,
        CategoryType.JACKET,
        CategoryType.PANTS,
        CategoryType.SHIRT,
        CategoryType.SKIRT,
        CategoryType.SWEATER,
        CategoryType.T_SHIRT,
      ];

      for (const category of categories) {
        const existingCategory = await this.categoryModel
          .findOne({ category })
          .exec();
        if (!existingCategory) {
          const createdCategory = await this.categoryModel.create({ category });
          if (!createdCategory._id) {
            throw new Error(
              `Failed to create category document for ${category}`,
            );
          }
          this.logger.log(`Inserted category: ${category}`);
        } else {
          this.logger.log(`Category ${category} already exists`);
        }
      }
    } catch (error) {
      this.logger.error('Error seeding categories', error.stack);
    }
  }
}
