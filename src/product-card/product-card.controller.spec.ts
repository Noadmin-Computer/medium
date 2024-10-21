import { Test, TestingModule } from '@nestjs/testing';
import { ProductCardController } from './product-card.controller';
import { ProductCardService } from './product-card.service';

describe('ProductCardController', () => {
  let controller: ProductCardController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductCardController],
      providers: [ProductCardService],
    }).compile();

    controller = module.get<ProductCardController>(ProductCardController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
