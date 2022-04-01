import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

import { getSchemaOptions } from '../../utils/mongoose.utils';
import { CollaboratorModel } from '../models/collaborator.model';

export type CollaboratorDocument = CollaboratorModel & Document;

@Schema(getSchemaOptions())
export class Collaborator implements CollaboratorModel {
  @Prop()
  id: string;

  // @Prop()
  // name: string;

  @Prop({ default: () => new Date() })
  createdAt: Date;
}

export const CollaboratorSchema = SchemaFactory.createForClass(Collaborator);
