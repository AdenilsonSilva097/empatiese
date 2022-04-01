import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { GenericCrudService } from '../generic-crud/generic-crud.service';
import { User, UserDocument } from './schemas/user.schema';

@Injectable()
export class UsersService extends GenericCrudService<User, UserDocument> {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<UserDocument>,
  ) {
    super(userModel);
  }

  async findByEmail(email: string) {
    const user = await this.userModel.findOne({ email }).exec();
    if (!user) return undefined;
    return user.toJSON() as any as User;
  }
}
