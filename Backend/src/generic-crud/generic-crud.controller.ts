import {
  Get,
  Post,
  Body,
  Patch,
  NotFoundException,
  Delete,
  Param,
} from '@nestjs/common';
import { Document } from 'mongoose';

import { IGenericCrudService } from './generic-crud.service';
import { EntityModel } from './entity.Model';

export class GenericCrudController<
  TEntity extends EntityModel,
  TDocument extends Document & TEntity,
> {
  constructor(
    protected readonly genericCrudService: IGenericCrudService<
      TEntity,
      TDocument
    >,
  ) {}

  @Get()
  async list() {
    const entities = await this.genericCrudService.list();
    return entities;
  }

  @Get(':id')
  async findById(@Param('id') id: string) {
    const entity = await this.genericCrudService.findById(id);
    if (!entity) {
      throw new NotFoundException('Entity does not exist!');
    }
    return entity;
  }

  @Post()
  async create(@Body() payload: Partial<TDocument>) {
    const newEntity = await this.genericCrudService.create(payload);
    return newEntity;
  }

  @Patch(':id')
  async update(@Param('id') id, @Body() payload: Partial<TDocument>) {
    const updatedEntity = await this.genericCrudService.update(id, payload);
    if (!updatedEntity) {
      throw new NotFoundException('Entity does not exist!');
    }
    return updatedEntity;
  }

  @Delete(':id')
  async delete(@Param('id') id) {
    const deletedEntity = await this.genericCrudService.delete(id);
    if (!deletedEntity) {
      throw new NotFoundException('Entity does not exist');
    }
    return deletedEntity;
  }
}
