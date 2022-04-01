import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

import { getSchemaOptions } from '../../utils/mongoose.utils';
import { SectorModel } from '../models/sector.model';

export type SectorDocument = SectorModel & Document;

@Schema(getSchemaOptions())
export class Sector implements SectorModel {
  @Prop()
  id: string;

  // @Prop()
  // name: string;

  @Prop({ default: () => new Date() })
  createdAt: Date;
}

export const SectorSchema = SchemaFactory.createForClass(Sector);
