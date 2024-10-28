import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateProductInnerDto } from './dto/create-product-inner.dto';
import { UpdateProductInnerDto } from './dto/update-product-inner.dto';
import { ProductInner } from './entities/product-inner.entity';
import { ProductInnerService } from './product-inner.service';

@ApiTags('Product-Inner')
@Controller('product-inner')
export class ProductInnerController {
  constructor(private readonly productInnerService: ProductInnerService) {}

  @Post()
  async create(
    @Body() createProductInnerDto: CreateProductInnerDto,
  ): Promise<ProductInner> {
    return this.productInnerService.create(createProductInnerDto);
  }

  @Get()
  async findAll(): Promise<ProductInner[]> {
    return this.productInnerService.findAll();
  }

  @Get(':id')
  async getById(@Param('id') id: string): Promise<ProductInner> {
    return this.productInnerService.findOne(id);
  }

  @Get(':id/:color')
  async getByColor(
    @Param('id') id: string,
    @Param('color') color: string,
  ): Promise<ProductInner> {
    const product = await this.productInnerService.findOneLean(id); // Используем новый метод
    const variation = product.variations.find((v) => v.color === color);
    if (!variation) {
      throw new NotFoundException(`Product with color ${color} not found`);
    }
    return {
      ...product,
      variations: [variation],
    };
  }

  @Put(':id')
  async updateProductInner(
    @Param('id') id: string,
    @Body() updateProductInnerDto: UpdateProductInnerDto,
  ): Promise<ProductInner> {
    return this.productInnerService.update(id, updateProductInnerDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    return this.productInnerService.remove(id);
  }
}
