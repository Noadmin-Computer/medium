import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductInnerService } from './product-inner.service';
import { CreateProductInnerDto } from './dto/create-product-inner.dto';
import { UpdateProductInnerDto } from './dto/update-product-inner.dto';

@Controller('product-inner')
export class ProductInnerController {
  constructor(private readonly productInnerService: ProductInnerService) {}

  @Post()
  create(@Body() createProductInnerDto: CreateProductInnerDto) {
    return this.productInnerService.create(createProductInnerDto);
  }

  @Get()
  findAll() {
    return this.productInnerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productInnerService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductInnerDto: UpdateProductInnerDto) {
    return this.productInnerService.update(+id, updateProductInnerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productInnerService.remove(+id);
  }
}
