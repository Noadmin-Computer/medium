import { Test, TestingModule } from '@nestjs/testing';
import { CabinetController } from './cabinet.controller';
import { CabinetService } from './cabinet.service';

describe('CabinetController', () => {
  let controller: CabinetController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CabinetController],
      providers: [CabinetService],
    }).compile();

    controller = module.get<CabinetController>(CabinetController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
