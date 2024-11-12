import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Category, CategoryDocument } from './entities/category.enum';

@Injectable()
export class CategoryService {
  constructor(
    @InjectModel(Category.name)
    private readonly categoryModel: Model<CategoryDocument>,
  ) {}

  async findAll(): Promise<Category[]> {
    return this.categoryModel.find().exec();
  }

  async findByName(name: string): Promise<Category | null> {
    return this.categoryModel.findOne({ category: name }).exec();
  }

  async getCategoryObjectId(name: string): Promise<Types.ObjectId> {
    const category = await this.findByName(name);
    if (category) {
      return category._id;
    } else {
      throw new Error('Category not found');
    }
  }
}
