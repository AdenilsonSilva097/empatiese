import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import {
  PermissionGroup,
  PermissionGroupSchema,
} from './schemas/permission-group.schema';
import { PermissionGroupsService } from './permission-groups.service';
import { PermissionGroupsController } from './permission-groups.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: PermissionGroup.name, schema: PermissionGroupSchema },
    ]),
  ],
  providers: [PermissionGroupsService],
  controllers: [PermissionGroupsController],
})
export class PermissionGroupsModule {}
