import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { Sector, SectorSchema } from './schemas/sector.schema';
import { SectorsService } from './sectors.service';
import { SectorsController } from './sectors.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Sector.name, schema: SectorSchema }]),
  ],
  providers: [SectorsService],
  controllers: [SectorsController],
})
export class SectorsModule {}
