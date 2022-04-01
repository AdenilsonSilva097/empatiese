import { Controller } from '@nestjs/common';

import { GenericCrudController } from '../generic-crud/generic-crud.controller';
import { PermissionGroupItemModel } from './models/permission-group-item.model';
import { PermissionGroupItemDocument } from './schemas/permission-group-item.schema';
import { PermissionGroupItemsService } from './permission-group-items.service';

@Controller('permission-group-items')
export class PermissionGroupItemsController extends GenericCrudController<
  PermissionGroupItemModel,
  PermissionGroupItemDocument
> {
  constructor(
    private readonly permissionGroupItemsService: PermissionGroupItemsService,
  ) {
    super(permissionGroupItemsService);
  }
}
