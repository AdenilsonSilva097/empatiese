import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { GenericCrudService } from '../generic-crud/generic-crud.service';
import {
  PermissionGroupItem,
  PermissionGroupItemDocument,
} from './schemas/permission-group-item.schema';

@Injectable()
export class PermissionGroupItemsService extends GenericCrudService<
  PermissionGroupItem,
  PermissionGroupItemDocument
> {
  constructor(
    @InjectModel(PermissionGroupItem.name)
    private readonly permissionGroupItemModel: Model<PermissionGroupItemDocument>,
  ) {
    super(permissionGroupItemModel);
  }
}
