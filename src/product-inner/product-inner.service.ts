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
import { Brand, BrandDocument } from 'src/brand/entities/brand.entity';

@Injectable()
export class ProductsInnerService {
  constructor(
    @InjectModel(ProductInner.name)
    private readonly productModel: Model<ProductInnerDocument>,
    @InjectModel(Brand.name)
    private readonly brandModel: Model<BrandDocument>,
  ) {}

  async create(
    createProductInnerDto: CreateProductInnerDto,
  ): Promise<ProductInner> {
    const brandExists = await this.brandModel.exists({
      _id: createProductInnerDto.brand,
    });

    if (!brandExists) {
      throw new NotFoundException('Brand not found');
    }

    try {
      const createdProduct = new this.productModel(createProductInnerDto);
      return await createdProduct.save();
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async findAll(): Promise<ProductInner[]> {
    const products = await this.productModel
      .find()
      .populate({
        path: 'brand',
        populate: [
          { path: 'image', model: 'Media' },
          { path: 'background', model: 'Media' },
        ],
      })
      .populate({
        path: 'variations.image',
        model: 'Media',
      })
      .exec();

    if (!products || products.length === 0) {
      throw new NotFoundException('No products found.');
    }
    return products;
  }

  async findOne(id: string): Promise<ProductInner> {
    const product = await this.productModel
      .findById(id)
      .populate({
        path: 'brand',
        populate: [
          { path: 'image', model: 'Media' },
          { path: 'background', model: 'Media' },
        ],
      })
      .populate({
        path: 'variations.image',
        model: 'Media',
      })
      .exec();

    if (!product) {
      throw new NotFoundException(`Product with ID ${id} not found`);
    }
    return product;
  }

  async update(
    id: string,
    updateProductDto: UpdateProductInnerDto,
  ): Promise<ProductInner> {
    const updatedProduct = await this.productModel
      .findByIdAndUpdate(id, updateProductDto, { new: true })
      .populate({
        path: 'brand',
        populate: [
          { path: 'image', model: 'Media' },
          { path: 'background', model: 'Media' },
        ],
      })
      .populate({
        path: 'variations.image',
        model: 'Media',
      })
      .exec();

    if (!updatedProduct) {
      throw new NotFoundException(`Product with ID ${id} not found`);
    }
    return updatedProduct;
  }

  async remove(id: string): Promise<void> {
    const removedProduct = await this.productModel.findByIdAndDelete(id).exec();
    if (!removedProduct) {
      throw new NotFoundException(`Product with ID ${id} not found`);
    }
  }
}
