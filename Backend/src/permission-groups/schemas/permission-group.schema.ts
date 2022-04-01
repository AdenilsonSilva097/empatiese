import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

import { getSchemaOptions } from '../../utils/mongoose.utils';
import { PermissionGroupModel } from '../models/permission-group.model';

export type PermissionGroupDocument = PermissionGroupModel & Document;

@Schema(getSchemaOptions())
export class PermissionGroup implements PermissionGroupModel {
  @Prop()
  id: string;

  @Prop()
  name: string;

  @Prop({ default: () => new Date() })
  createdAt: Date;
}

export const PermissionGroupSchema =
  SchemaFactory.createForClass(PermissionGroup);
