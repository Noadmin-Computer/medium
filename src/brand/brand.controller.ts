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
import { BrandsService } from './brand.service';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { Brand } from './entities/brand.entity';

@ApiTags('Brands')
@Controller('brands')
export class BrandsController {
  constructor(private readonly brandService: BrandsService) {}

  @Post()
  async create(@Body() createBrandDto: CreateBrandDto): Promise<Brand> {
    return this.brandService.create(createBrandDto);
  }

  @Get()
  async findAll(): Promise<Brand[]> {
    return this.brandService.findAll();
  }

  @Get(':id')
  async getById(@Param('id') id: string): Promise<Brand> {
    return this.brandService.findOne(id);
  }

  @Put(':id')
  async updateBrand(
    @Param('id') id: string,
    @Body() updateBrandDto: UpdateBrandDto,
  ): Promise<Brand> {
    return this.brandService.update(id, updateBrandDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    return this.brandService.remove(id);
  }
}
