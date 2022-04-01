import { Controller } from '@nestjs/common';

import { GenericCrudController } from '../generic-crud/generic-crud.controller';
import { ReceiptModel } from './models/receipt.model';
import { ReceiptDocument } from './schemas/receipt.schema';
import { ReceiptsService } from './receipts.service';

@Controller('receipts')
export class ReceiptsController extends GenericCrudController<
  ReceiptModel,
  ReceiptDocument
> {
  constructor(private readonly receiptsService: ReceiptsService) {
    super(receiptsService);
  }
}
