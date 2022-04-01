import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { SectorsModule } from '../sectors/sectors.module';

import {
  SectorAddress,
  SectorAddressSchema,
} from './schemas/sector-address.schema';
import { SectorAddressesService } from './sector-addresses.service';
import { SectorAddressesController } from './sector-addresses.controller';

@Module({
  imports: [
    SectorsModule,
    MongooseModule.forFeature([
      { name: SectorAddress.name, schema: SectorAddressSchema },
    ]),
  ],
  providers: [SectorAddressesService],
  controllers: [SectorAddressesController],
})
export class SectorAddressesModule {}
