import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { GenericCrudService } from '../generic-crud/generic-crud.service';
import { Sector, SectorDocument } from './schemas/sector.schema';

@Injectable()
export class SectorsService extends GenericCrudService<Sector, SectorDocument> {
  constructor(
    @InjectModel(Sector.name)
    private readonly sectorModel: Model<SectorDocument>,
  ) {
    super(sectorModel);
  }
}
