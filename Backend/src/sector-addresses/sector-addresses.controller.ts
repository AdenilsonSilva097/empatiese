import { Controller } from '@nestjs/common';

import { GenericCrudController } from '../generic-crud/generic-crud.controller';
import { SectorAddressModel } from './models/sector-address.model';
import { SectorAddressDocument } from './schemas/sector-address.schema';
import { SectorAddressesService } from './sector-addresses.service';

@Controller('sector-addresses')
export class SectorAddressesController extends GenericCrudController<
  SectorAddressModel,
  SectorAddressDocument
> {
  constructor(private readonly sectorAddressesService: SectorAddressesService) {
    super(sectorAddressesService);
  }
}
