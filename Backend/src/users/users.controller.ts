import { Controller, Get, Param, NotFoundException } from '@nestjs/common';

import { GenericCrudController } from '../generic-crud/generic-crud.controller';
import { UserModel } from './models/user.model';
import { UserDocument } from './schemas/user.schema';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController extends GenericCrudController<
  UserModel,
  UserDocument
> {
  constructor(private readonly userService: UsersService) {
    super(userService);
  }

  @Get('email/:email')
  async findByEmail(@Param('email') email: string) {
    const entity = await this.userService.findByEmail(email);
    if (!entity) {
      throw new NotFoundException('Entity does not exist!');
    }
    return entity;
  }
}
