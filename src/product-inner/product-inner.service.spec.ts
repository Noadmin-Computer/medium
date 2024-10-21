import { Test, TestingModule } from '@nestjs/testing';
import { ProductInnerService } from './product-inner.service';

describe('ProductInnerService', () => {
  let service: ProductInnerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductInnerService],
    }).compile();

    service = module.get<ProductInnerService>(ProductInnerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
