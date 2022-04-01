import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { GenericCrudService } from '../generic-crud/generic-crud.service';
import {
  PermissionGroup,
  PermissionGroupDocument,
} from './schemas/permission-group.schema';

@Injectable()
export class PermissionGroupsService extends GenericCrudService<
  PermissionGroup,
  PermissionGroupDocument
> {
  constructor(
    @InjectModel(PermissionGroup.name)
    private readonly permissionGroupModel: Model<PermissionGroupDocument>,
  ) {
    super(permissionGroupModel);
  }
}
