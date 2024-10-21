import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductCardService } from './product-card.service';
import { CreateProductCardDto } from './dto/create-product-card.dto';
import { UpdateProductCardDto } from './dto/update-product-card.dto';

@Controller('product-card')
export class ProductCardController {
  constructor(private readonly productCardService: ProductCardService) {}

  @Post()
  create(@Body() createProductCardDto: CreateProductCardDto) {
    return this.productCardService.create(createProductCardDto);
  }

  @Get()
  findAll() {
    return this.productCardService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productCardService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductCardDto: UpdateProductCardDto) {
    return this.productCardService.update(+id, updateProductCardDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productCardService.remove(+id);
  }
}
