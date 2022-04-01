import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { CollaboratorsModule } from '../collaborators/collaborators.module';
import { DonorsModule } from '../donors/donors.module';

import {
  DonationProtocol,
  DonationProtocolSchema,
} from './schemas/donation-protocol.schema';
import { DonationProtocolsService } from './donation-protocols.service';
import { DonationProtocolsController } from './donation-protocols.controller';

@Module({
  imports: [
    CollaboratorsModule,
    DonorsModule,
    MongooseModule.forFeature([
      { name: DonationProtocol.name, schema: DonationProtocolSchema },
    ]),
  ],
  providers: [DonationProtocolsService],
  controllers: [DonationProtocolsController],
})
export class DonationProtocolsModule {}
