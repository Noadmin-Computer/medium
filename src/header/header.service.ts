import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateHeaderDto } from './dto/create-header.dto';
import { UpdateHeaderDto } from './dto/update-header.dto';
import { Header, HeaderDocument } from './entities/header.entity';

@Injectable()
export class HeaderService {
  constructor(
    @InjectModel(Header.name)
    private readonly headerModel: Model<HeaderDocument>,
  ) {}

  async create(createHeaderDto: CreateHeaderDto): Promise<Header> {
    try {
      const createdHeader = new this.headerModel(createHeaderDto);
      return await createdHeader.save();
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async findAll() {
    try {
      const header = await this.headerModel.find();
      if (!header) {
        throw new NotFoundException(`Header not found or empty !`);
      }
      return header;
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  async findOne(id: string): Promise<Header> {
    try {
      const header = await this.headerModel
        .findById(id)
        .populate('header_image')
        .populate('header_title')
        .exec();
      if (!header) {
        throw new NotFoundException(`Header with ID ${id} not found`);
      }
      return header;
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  async findByTitle(title: string): Promise<Header | null> {
    return this.headerModel
      .findOne({ header_title: new RegExp(title, 'i') })
      .exec();
  }

  async update(id: string, updateHeaderDto: UpdateHeaderDto): Promise<Header> {
    try {
      const updatedHeader = await this.headerModel
        .findByIdAndUpdate(id, updateHeaderDto, { new: true })
        .populate('header_image')
        .exec();
      if (!updatedHeader) {
        throw new NotFoundException(`Header with ID ${id} not found`);
      }
      return updatedHeader;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async remove(id: string): Promise<void> {
    try {
      const removedHeader = await this.headerModel.findByIdAndDelete(id).exec();
      if (!removedHeader) {
        throw new NotFoundException(`Header with ID ${id} not found`);
      }
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }
}
