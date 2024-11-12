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
import { CreateProductInnerDto } from './dto/create-product-inner.dto';
import { UpdateProductInnerDto } from './dto/update-product-inner.dto';
import { ProductInner } from './entities/product-inner.entity';
import { ProductsInnerService } from './product-inner.service';

@ApiTags('Products')
@Controller('product-inner')
export class ProductsInnerController {
  constructor(private readonly productsService: ProductsInnerService) {}

  @Post()
  async create(
    @Body() createProductDto: CreateProductInnerDto,
  ): Promise<ProductInner> {
    return this.productsService.create(createProductDto);
  }

  @Get()
  async findAll(): Promise<ProductInner[]> {
    return this.productsService.findAll();
  }

  @Get(':id')
  async getById(@Param('id') id: string): Promise<ProductInner> {
    return this.productsService.findOne(id);
  }

  @Put(':id')
  async updateProduct(
    @Param('id') id: string,
    @Body() updateProductDto: UpdateProductInnerDto,
  ): Promise<ProductInner> {
    return this.productsService.update(id, updateProductDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    return this.productsService.remove(id);
  }
}
