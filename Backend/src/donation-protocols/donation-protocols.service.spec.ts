import { Test, TestingModule } from '@nestjs/testing';
import { DonationProtocolsService } from './donation-protocols.service';

describe('DonationProtocolsService', () => {
  let service: DonationProtocolsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DonationProtocolsService],
    }).compile();

    service = module.get<DonationProtocolsService>(DonationProtocolsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
