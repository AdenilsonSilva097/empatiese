import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

import { getSchemaOptions } from '../../utils/mongoose.utils';
import { ApplicationModel } from '../models/application.model';

export type ApplicationDocument = ApplicationModel & Document;

@Schema(getSchemaOptions())
export class Application implements ApplicationModel {
  @Prop()
  id: string;

  @Prop()
  name: string;

  @Prop({ default: () => new Date() })
  createdAt: Date;
}

export const ApplicationSchema = SchemaFactory.createForClass(Application);
