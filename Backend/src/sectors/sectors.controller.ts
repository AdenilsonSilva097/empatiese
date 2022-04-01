import { Controller } from '@nestjs/common';

import { GenericCrudController } from '../generic-crud/generic-crud.controller';
import { SectorModel } from './models/sector.model';
import { SectorDocument } from './schemas/sector.schema';
import { SectorsService } from './sectors.service';

@Controller('sectors')
export class SectorsController extends GenericCrudController<
  SectorModel,
  SectorDocument
> {
  constructor(private readonly sectorsService: SectorsService) {
    super(sectorsService);
  }
}
