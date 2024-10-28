import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateProductInnerDto } from './dto/create-product-inner.dto';
import { UpdateProductInnerDto } from './dto/update-product-inner.dto';
import {
  ProductInner,
  ProductInnerDocument,
} from './entities/product-inner.entity';

@Injectable()
export class ProductInnerService {
  constructor(
    @InjectModel(ProductInner.name)
    private readonly productInnerModel: Model<ProductInnerDocument>,
  ) {}

  async create(
    createProductInnerDto: CreateProductInnerDto,
  ): Promise<ProductInner> {
    try {
      const createdProductInner = new this.productInnerModel(
        createProductInnerDto,
      );
      return await createdProductInner.save();
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async findAll() {
    try {
      const productInner = await this.productInnerModel.find();
      if (!productInner) {
        throw new NotFoundException(`ProductInner not found or empty !`);
      }
      return productInner;
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  async findOne(id: string): Promise<ProductInner> {
    try {
      const productInner = await this.productInnerModel
        .findById(id)
        .populate('productInner_image')
        .populate('productInner_title')
        .exec();
      if (!productInner) {
        throw new NotFoundException(`ProductInner with ID ${id} not found`);
      }
      return productInner;
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  async findByTitle(title: string): Promise<ProductInner | null> {
    return this.productInnerModel
      .findOne({ productInner_title: new RegExp(title, 'i') })
      .exec();
  }

  async update(
    id: string,
    updateProductInnerDto: UpdateProductInnerDto,
  ): Promise<ProductInner> {
    try {
      const updatedProductInner = await this.productInnerModel
        .findByIdAndUpdate(id, updateProductInnerDto, { new: true })
        .populate('productInner_image')
        .exec();
      if (!updatedProductInner) {
        throw new NotFoundException(`ProductInner with ID ${id} not found`);
      }
      return updatedProductInner;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async findOneLean(id: string): Promise<ProductInner> {
    try {
      const productInner = await this.productInnerModel
        .findById(id)
        .lean()
        .exec();
      if (!productInner) {
        throw new NotFoundException(`ProductInner with ID ${id} not found`);
      }
      return productInner;
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  async remove(id: string): Promise<void> {
    try {
      const removedProductInner = await this.productInnerModel
        .findByIdAndDelete(id)
        .exec();
      if (!removedProductInner) {
        throw new NotFoundException(`ProductInner with ID ${id} not found`);
      }
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }
}
