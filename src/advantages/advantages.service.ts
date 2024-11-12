import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateAdvantageDto } from './dto/create-advantage.dto';
import { UpdateAdvantageDto } from './dto/update-advantage.dto';
import { Advantage, AdvantageDocument } from './entities/advantage.entity';

@Injectable()
export class AdvantagesService {
  constructor(
    @InjectModel(Advantage.name)
    private readonly advantageModel: Model<AdvantageDocument>,
  ) {}

  async create(createAdvantageDto: CreateAdvantageDto): Promise<Advantage> {
    try {
      const createdAdvantage = new this.advantageModel(createAdvantageDto);
      return await createdAdvantage.save();
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async findAll() {
    try {
      const advantage = await this.advantageModel.find().populate('image');
      if (!advantage) {
        throw new NotFoundException(`Advantage not found or empty !`);
      }
      return advantage;
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  async findOne(id: string): Promise<Advantage> {
    try {
      const advantage = await this.advantageModel
        .findById(id)
        .populate('image')
        .populate('advantage_title')
        .exec();
      if (!advantage) {
        throw new NotFoundException(`Advantage with ID ${id} not found`);
      }
      return advantage;
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  async findByTitle(title: string): Promise<Advantage | null> {
    return this.advantageModel
      .findOne({ advantage_title: new RegExp(title, 'i') })
      .exec();
  }

  async update(
    id: string,
    updateAdvantageDto: UpdateAdvantageDto,
  ): Promise<Advantage> {
    try {
      const updatedAdvantage = await this.advantageModel
        .findByIdAndUpdate(id, updateAdvantageDto, { new: true })
        .populate('advantage_image')
        .exec();
      if (!updatedAdvantage) {
        throw new NotFoundException(`Advantage with ID ${id} not found`);
      }
      return updatedAdvantage;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async remove(id: string): Promise<void> {
    try {
      const removedAdvantage = await this.advantageModel
        .findByIdAndDelete(id)
        .exec();
      if (!removedAdvantage) {
        throw new NotFoundException(`Advantage with ID ${id} not found`);
      }
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }
}
