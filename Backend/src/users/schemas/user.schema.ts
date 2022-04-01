import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

import { PermissionGroupModel } from '../../permission-groups/models/permission-group.model';
import { PermissionGroup } from '../../permission-groups/schemas/permission-group.schema';

import { getSchemaOptions } from '../../utils/mongoose.utils';
import { UserModel } from '../models/user.model';

export type UserDocument = UserModel & Document;

@Schema(getSchemaOptions())
export class User implements UserModel {
  @Prop()
  id: string;

  @Prop()
  name: string;

  @Prop({ unique: true })
  email: string;

  @Prop()
  password: string;

  @Prop()
  birthDate: Date;

  @Prop({ type: Types.ObjectId, ref: PermissionGroup.name, required: true })
  permissionGroup: PermissionGroupModel | string;

  @Prop({ default: () => new Date() })
  createdAt: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);
