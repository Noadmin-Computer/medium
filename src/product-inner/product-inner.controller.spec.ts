import { Test, TestingModule } from '@nestjs/testing';
import { ProductInnerController } from './product-inner.controller';
import { ProductInnerService } from './product-inner.service';

describe('ProductInnerController', () => {
  let controller: ProductInnerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductInnerController],
      providers: [ProductInnerService],
    }).compile();

    controller = module.get<ProductInnerController>(ProductInnerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
