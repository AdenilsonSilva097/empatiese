import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { GenericCrudService } from '../generic-crud/generic-crud.service';
import {
  Collaborator,
  CollaboratorDocument,
} from './schemas/collaborator.schema';

@Injectable()
export class CollaboratorsService extends GenericCrudService<
  Collaborator,
  CollaboratorDocument
> {
  constructor(
    @InjectModel(Collaborator.name)
    private readonly collaboratorModel: Model<CollaboratorDocument>,
  ) {
    super(collaboratorModel);
  }
}
