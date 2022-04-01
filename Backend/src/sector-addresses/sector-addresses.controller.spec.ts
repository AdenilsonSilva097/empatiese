import { Test, TestingModule } from '@nestjs/testing';
import { SectorAddressesController } from './sector-addresses.controller';

describe('SectorAddressesController', () => {
  let controller: SectorAddressesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SectorAddressesController],
    }).compile();

    controller = module.get<SectorAddressesController>(
      SectorAddressesController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
