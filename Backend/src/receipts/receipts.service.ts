import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { GenericCrudService } from '../generic-crud/generic-crud.service';
import { Receipt, ReceiptDocument } from './schemas/receipt.schema';

@Injectable()
export class ReceiptsService extends GenericCrudService<
  Receipt,
  ReceiptDocument
> {
  constructor(
    @InjectModel(Receipt.name)
    private readonly receiptModel: Model<ReceiptDocument>,
  ) {
    super(receiptModel);
  }
}
