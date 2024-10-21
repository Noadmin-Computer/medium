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
import { CreateHeaderDto } from './dto/create-header.dto';
import { UpdateHeaderDto } from './dto/update-header.dto';
import { Header } from './entities/header.entity';
import { HeaderService } from './header.service';

@ApiTags('Header')
@Controller('header')
export class HeaderController {
  constructor(private readonly headerService: HeaderService) {}

  @Post()
  async create(@Body() createHeaderDto: CreateHeaderDto): Promise<Header> {
    return this.headerService.create(createHeaderDto);
  }

  @Get()
  async findAll(): Promise<Header[]> {
    return this.headerService.findAll();
  }

  @Get(':id')
  async getById(@Param('id') id: string): Promise<Header> {
    return this.headerService.findOne(id);
  }

  @Put(':id')
  async updateHeader(
    @Param('id') id: string,
    @Body() updateHeaderDto: UpdateHeaderDto,
  ): Promise<Header> {
    return this.headerService.update(id, updateHeaderDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    return this.headerService.remove(id);
  }
}
