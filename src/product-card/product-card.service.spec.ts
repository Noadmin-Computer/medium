import { Test, TestingModule } from '@nestjs/testing';
import { ProductCardService } from './product-card.service';

describe('ProductCardService', () => {
  let service: ProductCardService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductCardService],
    }).compile();

    service = module.get<ProductCardService>(ProductCardService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
