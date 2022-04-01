import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

import { getSchemaOptions } from '../../utils/mongoose.utils';
import { SectorAddressModel } from '../models/sector-address.model';

export type SectorAddressDocument = SectorAddressModel & Document;

@Schema(getSchemaOptions())
export class SectorAddress implements SectorAddressModel {
  @Prop()
  id: string;

  // @Prop()
  // name: string;

  @Prop({ default: () => new Date() })
  createdAt: Date;
}

export const SectorAddressSchema = SchemaFactory.createForClass(SectorAddress);
