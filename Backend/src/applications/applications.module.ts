import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { Application, ApplicationSchema } from './schemas/application.schema';
import { ApplicationsService } from './applications.service';
import { ApplicationsController } from './applications.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Application.name, schema: ApplicationSchema },
    ]),
  ],
  providers: [ApplicationsService],
  controllers: [ApplicationsController],
})
export class ApplicationsModule {}
