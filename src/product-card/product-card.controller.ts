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
import { CreateProductCardDto } from './dto/create-product-card.dto';
import { UpdateProductCardDto } from './dto/update-product-card.dto';
import { ProductCard } from './entities/product-card.entity';
import { ProductCardService } from './product-card.service';

@ApiTags('Product-Card')
@Controller('product-card')
export class ProductCardController {
  constructor(private readonly productCardService: ProductCardService) {}

  @Post()
  async create(
    @Body() createProductCardDto: CreateProductCardDto,
  ): Promise<ProductCard> {
    return this.productCardService.create(createProductCardDto);
  }

  @Get()
  async findAll(): Promise<ProductCard[]> {
    return this.productCardService.findAll();
  }

  @Get(':id')
  async getById(@Param('id') id: string): Promise<ProductCard> {
    return this.productCardService.findOne(id);
  }

  @Put(':id')
  async updateProductCard(
    @Param('id') id: string,
    @Body() updateProductCardDto: UpdateProductCardDto,
  ): Promise<ProductCard> {
    return this.productCardService.update(id, updateProductCardDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    return this.productCardService.remove(id);
  }
}
