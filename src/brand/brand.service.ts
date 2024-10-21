import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { Brand, BrandDocument } from './entities/brand.entity';

@Injectable()
export class BrandsService {
  constructor(
    @InjectModel(Brand.name)
    private readonly brandModel: Model<BrandDocument>,
  ) {}

  async create(createBrandDto: CreateBrandDto): Promise<Brand> {
    try {
      const createdBrand = new this.brandModel(createBrandDto);
      return await createdBrand.save();
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async findAll() {
    try {
      const brand = await this.brandModel.find();
      if (!brand) {
        throw new NotFoundException(`Brand not found or empty !`);
      }
      return brand;
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  async findOne(id: string): Promise<Brand> {
    try {
      const brand = await this.brandModel
        .findById(id)
        .populate('brand_image')
        .populate('brand_title')
        .exec();
      if (!brand) {
        throw new NotFoundException(`Brand with ID ${id} not found`);
      }
      return brand;
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  async findByTitle(title: string): Promise<Brand | null> {
    return this.brandModel
      .findOne({ brand_title: new RegExp(title, 'i') })
      .exec();
  }

  async update(id: string, updateBrandDto: UpdateBrandDto): Promise<Brand> {
    try {
      const updatedBrand = await this.brandModel
        .findByIdAndUpdate(id, updateBrandDto, { new: true })
        .populate('brand_image')
        .exec();
      if (!updatedBrand) {
        throw new NotFoundException(`Brand with ID ${id} not found`);
      }
      return updatedBrand;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async remove(id: string): Promise<void> {
    try {
      const removedBrand = await this.brandModel.findByIdAndDelete(id).exec();
      if (!removedBrand) {
        throw new NotFoundException(`Brand with ID ${id} not found`);
      }
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }
}
