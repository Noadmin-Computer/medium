import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AdditionalService } from './additional.service';
import { CreateAdditionalDto } from './dto/create-additional.dto';
import { UpdateAdditionalDto } from './dto/update-additional.dto';
import { Additional } from './entities/additional.entity';

@ApiTags('Additional')
@Controller('additional')
export class AdditionalController {
  constructor(private readonly additionalService: AdditionalService) {}

  @Post()
  async create(
    @Body() createAdditionalDto: CreateAdditionalDto,
  ): Promise<Additional> {
    return this.additionalService.create(createAdditionalDto);
  }

  @Get()
  async findAll(): Promise<Additional[]> {
    return this.additionalService.findAll();
  }

  @Get(':id')
  async getById(@Param('id') id: string): Promise<Additional> {
    return this.additionalService.findOne(id);
  }

  @Put(':id')
  async updateAdditional(
    @Param('id') id: string,
    @Body() updateAdditionalDto: UpdateAdditionalDto,
  ): Promise<Additional> {
    return this.additionalService.update(id, updateAdditionalDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    return this.additionalService.remove(id);
  }
}
