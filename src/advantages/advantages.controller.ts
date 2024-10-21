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
import { AdvantagesService } from './advantages.service';
import { CreateAdvantageDto } from './dto/create-advantage.dto';
import { UpdateAdvantageDto } from './dto/update-advantage.dto';
import { Advantage } from './entities/advantage.entity';

@ApiTags('Advantages')
@Controller('advantages')
export class AdvantagesController {
  constructor(private readonly advantageService: AdvantagesService) {}

  @Post()
  async create(
    @Body() createAdvantageDto: CreateAdvantageDto,
  ): Promise<Advantage> {
    return this.advantageService.create(createAdvantageDto);
  }

  @Get()
  async findAll(): Promise<Advantage[]> {
    return this.advantageService.findAll();
  }

  @Get(':id')
  async getById(@Param('id') id: string): Promise<Advantage> {
    return this.advantageService.findOne(id);
  }

  @Put(':id')
  async updateAdvantage(
    @Param('id') id: string,
    @Body() updateAdvantageDto: UpdateAdvantageDto,
  ): Promise<Advantage> {
    return this.advantageService.update(id, updateAdvantageDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    return this.advantageService.remove(id);
  }
}
