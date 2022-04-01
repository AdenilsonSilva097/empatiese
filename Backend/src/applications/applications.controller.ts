import { Controller } from '@nestjs/common';

import { GenericCrudController } from '../generic-crud/generic-crud.controller';
import { ApplicationModel } from './models/application.model';
import { ApplicationDocument } from './schemas/application.schema';
import { ApplicationsService } from './applications.service';

@Controller('applications')
export class ApplicationsController extends GenericCrudController<
  ApplicationModel,
  ApplicationDocument
> {
  constructor(private readonly applicationsService: ApplicationsService) {
    super(applicationsService);
  }
}
