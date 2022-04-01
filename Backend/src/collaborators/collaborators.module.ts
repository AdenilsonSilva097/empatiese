import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { SectorsModule } from '../sectors/sectors.module';
import { UsersModule } from '../users/users.module';

import {
  Collaborator,
  CollaboratorSchema,
} from './schemas/collaborator.schema';
import { CollaboratorsService } from './collaborators.service';
import { CollaboratorsController } from './collaborators.controller';

@Module({
  imports: [
    SectorsModule,
    UsersModule,
    MongooseModule.forFeature([
      { name: Collaborator.name, schema: CollaboratorSchema },
    ]),
  ],
  providers: [CollaboratorsService],
  controllers: [CollaboratorsController],
})
export class CollaboratorsModule {}
