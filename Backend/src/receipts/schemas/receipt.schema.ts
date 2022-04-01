import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

import { getSchemaOptions } from '../../utils/mongoose.utils';
import { ReceiptModel } from '../models/receipt.model';

export type ReceiptDocument = ReceiptModel & Document;

@Schema(getSchemaOptions())
export class Receipt implements ReceiptModel {
  @Prop()
  id: string;

  // @Prop()
  // name: string;

  @Prop({ default: () => new Date() })
  createdAt: Date;
}

export const ReceiptSchema = SchemaFactory.createForClass(Receipt);
