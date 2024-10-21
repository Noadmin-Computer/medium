import { PartialType } from '@nestjs/swagger';
import { CreateProductInnerDto } from './create-product-inner.dto';

export class UpdateProductInnerDto extends PartialType(CreateProductInnerDto) {}
