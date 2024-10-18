import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AdvantagesService } from './advantages.service';
import { CreateAdvantageDto } from './dto/create-advantage.dto';
import { UpdateAdvantageDto } from './dto/update-advantage.dto';

@Controller('advantages')
export class AdvantagesController {
  constructor(private readonly advantagesService: AdvantagesService) {}

  @Post()
  create(@Body() createAdvantageDto: CreateAdvantageDto) {
    return this.advantagesService.create(createAdvantageDto);
  }

  @Get()
  findAll() {
    return this.advantagesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.advantagesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAdvantageDto: UpdateAdvantageDto) {
    return this.advantagesService.update(+id, updateAdvantageDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.advantagesService.remove(+id);
  }
}
