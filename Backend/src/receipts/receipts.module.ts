import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { DonationProtocolsModule } from '../donation-protocols/donation-protocols.module';

import { Receipt, ReceiptSchema } from './schemas/receipt.schema';
import { ReceiptsService } from './receipts.service';
import { ReceiptsController } from './receipts.controller';

@Module({
  imports: [
    DonationProtocolsModule,
    MongooseModule.forFeature([{ name: Receipt.name, schema: ReceiptSchema }]),
  ],
  providers: [ReceiptsService],
  controllers: [ReceiptsController],
})
export class ReceiptsModule {}
