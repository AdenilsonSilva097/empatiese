import { Controller } from '@nestjs/common';

import { GenericCrudController } from '../generic-crud/generic-crud.controller';
import { DonationProtocolModel } from './models/donation-protocol.model';
import { DonationProtocolDocument } from './schemas/donation-protocol.schema';
import { DonationProtocolsService } from './donation-protocols.service';

@Controller('donation-protocols')
export class DonationProtocolsController extends GenericCrudController<
  DonationProtocolModel,
  DonationProtocolDocument
> {
  constructor(
    private readonly donationProtocolsService: DonationProtocolsService,
  ) {
    super(donationProtocolsService);
  }
}
