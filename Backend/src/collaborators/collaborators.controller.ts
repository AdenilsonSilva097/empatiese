import { Controller } from '@nestjs/common';

import { GenericCrudController } from '../generic-crud/generic-crud.controller';
import { CollaboratorModel } from './models/collaborator.model';
import { CollaboratorDocument } from './schemas/collaborator.schema';
import { CollaboratorsService } from './collaborators.service';

@Controller('collaborators')
export class CollaboratorsController extends GenericCrudController<
  CollaboratorModel,
  CollaboratorDocument
> {
  constructor(private readonly collaboratorsService: CollaboratorsService) {
    super(collaboratorsService);
  }
}
