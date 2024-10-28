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
import { CabinetService } from './cabinet.service';
import { CreateCabinetDto } from './dto/create-cabinet.dto';
import { UpdateCabinetDto } from './dto/update-cabinet.dto';
import { Cabinet } from './entities/cabinet.entity';

@ApiTags('Cabinet')
@Controller('cabinet')
export class CabinetController {
  constructor(private readonly cabinetService: CabinetService) {}

  @Post()
  async create(@Body() createCabinetDto: CreateCabinetDto): Promise<Cabinet> {
    return this.cabinetService.create(createCabinetDto);
  }

  @Get()
  async findAll(): Promise<Cabinet[]> {
    return this.cabinetService.findAll();
  }

  @Get(':id')
  async getById(@Param('id') id: string): Promise<Cabinet> {
    return this.cabinetService.findOne(id);
  }

  @Put(':id')
  async updateCabinet(
    @Param('id') id: string,
    @Body() updateCabinetDto: UpdateCabinetDto,
  ): Promise<Cabinet> {
    return this.cabinetService.update(id, updateCabinetDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    return this.cabinetService.remove(id);
  }
}
