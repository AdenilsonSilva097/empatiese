import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import configuration from './config/configuration';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { PermissionGroupsModule } from './permission-groups/permission-groups.module';
import { ApplicationsModule } from './applications/applications.module';
import { PermissionGroupItemsModule } from './permission-group-items/permission-group-items.module';
import { SectorsModule } from './sectors/sectors.module';
import { SectorAddressesModule } from './sector-addresses/sector-addresses.module';
import { CollaboratorsModule } from './collaborators/collaborators.module';
import { DonorsModule } from './donors/donors.module';
import { ReceiptsModule } from './receipts/receipts.module';
import { DonationProtocolsModule } from './donation-protocols/donation-protocols.module';

@Module({
  imports: [
    MongooseModule.forRoot(configuration().mongoConnectionString),
    UsersModule,
    PermissionGroupsModule,
    ApplicationsModule,
    PermissionGroupItemsModule,
    SectorsModule,
    SectorAddressesModule,
    CollaboratorsModule,
    DonorsModule,
    ReceiptsModule,
    DonationProtocolsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
