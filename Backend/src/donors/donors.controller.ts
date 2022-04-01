import { Controller } from '@nestjs/common';

import { GenericCrudController } from '../generic-crud/generic-crud.controller';
import { DonorModel } from './models/donor.model';
import { DonorDocument } from './schemas/donor.schema';
import { DonorsService } from './donors.service';

@Controller('donors')
export class DonorsController extends GenericCrudController<
  DonorModel,
  DonorDocument
> {
  constructor(private readonly donorsService: DonorsService) {
    super(donorsService);
  }
}
