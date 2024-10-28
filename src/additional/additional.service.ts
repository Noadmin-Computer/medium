import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateAdditionalDto } from './dto/create-additional.dto';
import { UpdateAdditionalDto } from './dto/update-additional.dto';
import { Additional, AdditionalDocument } from './entities/additional.entity';

@Injectable()
export class AdditionalService {
  constructor(
    @InjectModel(Additional.name)
    private readonly additionalModel: Model<AdditionalDocument>,
  ) {}

  async create(createAdditionalDto: CreateAdditionalDto): Promise<Additional> {
    try {
      const createdAdditional = new this.additionalModel(createAdditionalDto);
      return await createdAdditional.save();
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async findAll() {
    try {
      const additional = await this.additionalModel.find();
      if (!additional) {
        throw new NotFoundException(`Additional not found or empty !`);
      }
      return additional;
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  async findOne(id: string): Promise<Additional> {
    try {
      const additional = await this.additionalModel
        .findById(id)
        .populate('additional_image')
        .populate('additional_title')
        .exec();
      if (!additional) {
        throw new NotFoundException(`Additional with ID ${id} not found`);
      }
      return additional;
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  async findByTitle(title: string): Promise<Additional | null> {
    return this.additionalModel
      .findOne({ additional_title: new RegExp(title, 'i') })
      .exec();
  }

  async update(
    id: string,
    updateAdditionalDto: UpdateAdditionalDto,
  ): Promise<Additional> {
    try {
      const updatedAdditional = await this.additionalModel
        .findByIdAndUpdate(id, updateAdditionalDto, { new: true })
        .populate('additional_image')
        .exec();
      if (!updatedAdditional) {
        throw new NotFoundException(`Additional with ID ${id} not found`);
      }
      return updatedAdditional;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async remove(id: string): Promise<void> {
    try {
      const removedAdditional = await this.additionalModel
        .findByIdAndDelete(id)
        .exec();
      if (!removedAdditional) {
        throw new NotFoundException(`Additional with ID ${id} not found`);
      }
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }
}
