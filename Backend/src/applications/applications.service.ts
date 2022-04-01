import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { GenericCrudService } from '../generic-crud/generic-crud.service';
import { Application, ApplicationDocument } from './schemas/application.schema';

@Injectable()
export class ApplicationsService extends GenericCrudService<
  Application,
  ApplicationDocument
> {
  constructor(
    @InjectModel(Application.name)
    private readonly applicationModel: Model<ApplicationDocument>,
  ) {
    super(applicationModel);
  }
}
