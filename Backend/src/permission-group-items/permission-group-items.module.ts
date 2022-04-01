import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { ApplicationsModule } from '../applications/applications.module';
import { PermissionGroupsModule } from '../permission-groups/permission-groups.module';

import {
  PermissionGroupItem,
  PermissionGroupItemSchema,
} from './schemas/permission-group-item.schema';
import { PermissionGroupItemsService } from './permission-group-items.service';
import { PermissionGroupItemsController } from './permission-group-items.controller';

@Module({
  imports: [
    ApplicationsModule,
    PermissionGroupsModule,
    MongooseModule.forFeature([
      { name: PermissionGroupItem.name, schema: PermissionGroupItemSchema },
    ]),
  ],
  providers: [PermissionGroupItemsService],
  controllers: [PermissionGroupItemsController],
})
export class PermissionGroupItemsModule {}
