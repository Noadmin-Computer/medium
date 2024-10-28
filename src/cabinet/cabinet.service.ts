import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCabinetDto } from './dto/create-cabinet.dto';
import { UpdateCabinetDto } from './dto/update-cabinet.dto';
import { Cabinet, CabinetDocument } from './entities/cabinet.entity';

@Injectable()
export class CabinetService {
  constructor(
    @InjectModel(Cabinet.name)
    private readonly cabinetModel: Model<CabinetDocument>,
  ) {}

  async create(createCabinetDto: CreateCabinetDto): Promise<Cabinet> {
    try {
      const createdCabinet = new this.cabinetModel(createCabinetDto);
      return await createdCabinet.save();
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async findAll() {
    try {
      const cabinet = await this.cabinetModel.find();
      if (!cabinet) {
        throw new NotFoundException(`Cabinet not found or empty !`);
      }
      return cabinet;
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  async findOne(id: string): Promise<Cabinet> {
    try {
      const cabinet = await this.cabinetModel
        .findById(id)
        .populate('cabinet_image')
        .populate('cabinet_title')
        .exec();
      if (!cabinet) {
        throw new NotFoundException(`Cabinet with ID ${id} not found`);
      }
      return cabinet;
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  async findByTitle(title: string): Promise<Cabinet | null> {
    return this.cabinetModel
      .findOne({ cabinet_title: new RegExp(title, 'i') })
      .exec();
  }

  async update(
    id: string,
    updateCabinetDto: UpdateCabinetDto,
  ): Promise<Cabinet> {
    try {
      const updatedCabinet = await this.cabinetModel
        .findByIdAndUpdate(id, updateCabinetDto, { new: true })
        .populate('cabinet_image')
        .exec();
      if (!updatedCabinet) {
        throw new NotFoundException(`Cabinet with ID ${id} not found`);
      }
      return updatedCabinet;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async remove(id: string): Promise<void> {
    try {
      const removedCabinet = await this.cabinetModel
        .findByIdAndDelete(id)
        .exec();
      if (!removedCabinet) {
        throw new NotFoundException(`Cabinet with ID ${id} not found`);
      }
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }
}
