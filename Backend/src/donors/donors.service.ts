import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { GenericCrudService } from '../generic-crud/generic-crud.service';
import { Donor, DonorDocument } from './schemas/donor.schema';

@Injectable()
export class DonorsService extends GenericCrudService<Donor, DonorDocument> {
  constructor(
    @InjectModel(Donor.name)
    private readonly donorModel: Model<DonorDocument>,
  ) {
    super(donorModel);
  }
}
