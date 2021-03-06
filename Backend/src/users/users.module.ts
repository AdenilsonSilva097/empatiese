import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { PermissionGroupsModule } from '../permission-groups/permission-groups.module';

import { User, UserSchema } from './schemas/user.schema';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';

@Module({
  imports: [
    PermissionGroupsModule,
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
