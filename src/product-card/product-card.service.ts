import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateProductCardDto } from './dto/create-product-card.dto';
import { UpdateProductCardDto } from './dto/update-product-card.dto';
import {
  ProductCard,
  ProductCardDocument,
} from './entities/product-card.entity';

@Injectable()
export class ProductCardService {
  constructor(
    @InjectModel(ProductCard.name)
    private readonly productCardModel: Model<ProductCardDocument>,
  ) {}

  async create(
    createProductCardDto: CreateProductCardDto,
  ): Promise<ProductCard> {
    try {
      const createdProductCard = new this.productCardModel(
        createProductCardDto,
      );
      return await createdProductCard.save();
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async findAll() {
    try {
      const productCard = await this.productCardModel.find().populate('image');
      if (!productCard) {
        throw new NotFoundException(`ProductCard not found or empty !`);
      }
      return productCard;
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  async findOne(id: string): Promise<ProductCard> {
    try {
      const productCard = await this.productCardModel
        .findById(id)
        .populate('image')
        .populate('productCard_title')
        .exec();
      if (!productCard) {
        throw new NotFoundException(`ProductCard with ID ${id} not found`);
      }
      return productCard;
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  async findByTitle(title: string): Promise<ProductCard | null> {
    return this.productCardModel
      .findOne({ productCard_title: new RegExp(title, 'i') })
      .exec();
  }

  async update(
    id: string,
    updateProductCardDto: UpdateProductCardDto,
  ): Promise<ProductCard> {
    try {
      const updatedProductCard = await this.productCardModel
        .findByIdAndUpdate(id, updateProductCardDto, { new: true })
        .populate('image')
        .exec();
      if (!updatedProductCard) {
        throw new NotFoundException(`ProductCard with ID ${id} not found`);
      }
      return updatedProductCard;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async findByCategory(category: string): Promise<ProductCard[]> {
    try {
      const productCards = await this.productCardModel
        .find({ category })
        .populate('image')
        .exec();

      if (!productCards.length) {
        throw new NotFoundException(
          `No ProductCards found for category: ${category}`,
        );
      }

      return productCards;
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  async remove(id: string): Promise<void> {
    try {
      const removedProductCard = await this.productCardModel
        .findByIdAndDelete(id)
        .exec();
      if (!removedProductCard) {
        throw new NotFoundException(`ProductCard with ID ${id} not found`);
      }
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }
}
