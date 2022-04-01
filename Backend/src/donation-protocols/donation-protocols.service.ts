import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { GenericCrudService } from '../generic-crud/generic-crud.service';
import {
  DonationProtocol,
  DonationProtocolDocument,
} from './schemas/donation-protocol.schema';

@Injectable()
export class DonationProtocolsService extends GenericCrudService<
  DonationProtocol,
  DonationProtocolDocument
> {
  constructor(
    @InjectModel(DonationProtocol.name)
    private readonly donationProtocolModel: Model<DonationProtocolDocument>,
  ) {
    super(donationProtocolModel);
  }
}
