import { Controller } from '@nestjs/common';

import { GenericCrudController } from '../generic-crud/generic-crud.controller';
import { PermissionGroupModel } from './models/permission-group.model';
import { PermissionGroupDocument } from './schemas/permission-group.schema';
import { PermissionGroupsService } from './permission-groups.service';

@Controller('permission-groups')
export class PermissionGroupsController extends GenericCrudController<
  PermissionGroupModel,
  PermissionGroupDocument
> {
  constructor(
    private readonly permissionGroupsService: PermissionGroupsService,
  ) {
    super(permissionGroupsService);
  }
}
