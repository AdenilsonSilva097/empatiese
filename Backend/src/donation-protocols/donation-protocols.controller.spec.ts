import { Test, TestingModule } from '@nestjs/testing';
import { DonationProtocolsController } from './donation-protocols.controller';

describe('DonationProtocolsController', () => {
  let controller: DonationProtocolsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DonationProtocolsController],
    }).compile();

    controller = module.get<DonationProtocolsController>(
      DonationProtocolsController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
