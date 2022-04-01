import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

import { ApplicationModel } from '../../applications/models/application.model';
import { Application } from '../../applications/schemas/application.schema';
import { PermissionGroupModel } from '../../permission-groups/models/permission-group.model';
import { PermissionGroup } from '../../permission-groups/schemas/permission-group.schema';

import { getSchemaOptions } from '../../utils/mongoose.utils';
import { PermissionGroupItemModel } from '../models/permission-group-item.model';

export type PermissionGroupItemDocument = PermissionGroupItemModel & Document;

@Schema(getSchemaOptions())
export class PermissionGroupItem implements PermissionGroupItemModel {
  @Prop()
  id: string;

  @Prop({ type: Types.ObjectId, ref: Application.name, required: true })
  application: ApplicationModel | string;

  @Prop({ type: Types.ObjectId, ref: PermissionGroup.name, required: true })
  permissionGroup: PermissionGroupModel | string;

  @Prop()
  crud: string;

  @Prop({ default: () => new Date() })
  createdAt: Date;
}

export const PermissionGroupItemSchema =
  SchemaFactory.createForClass(PermissionGroupItem);
