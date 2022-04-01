import { Test, TestingModule } from '@nestjs/testing';
import { SectorAddressesService } from './sector-addresses.service';

describe('SectorAddressesService', () => {
  let service: SectorAddressesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SectorAddressesService],
    }).compile();

    service = module.get<SectorAddressesService>(SectorAddressesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
