import { Injectable } from '@nestjs/common';
import { CreateProductInnerDto } from './dto/create-product-inner.dto';
import { UpdateProductInnerDto } from './dto/update-product-inner.dto';

@Injectable()
export class ProductInnerService {
  create(createProductInnerDto: CreateProductInnerDto) {
    return 'This action adds a new productInner';
  }

  findAll() {
    return `This action returns all productInner`;
  }

  findOne(id: number) {
    return `This action returns a #${id} productInner`;
  }

  update(id: number, updateProductInnerDto: UpdateProductInnerDto) {
    return `This action updates a #${id} productInner`;
  }

  remove(id: number) {
    return `This action removes a #${id} productInner`;
  }
}
