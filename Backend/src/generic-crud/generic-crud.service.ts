import { Injectable } from '@nestjs/common';
import { Model, Document } from 'mongoose';

import { EntityModel } from './entity.Model';

export interface IGenericCrudService<
  TEntity extends EntityModel,
  TDocument extends Document & TEntity,
> {
  findById(id: string): Promise<TEntity>;
  list(): Promise<TEntity[]>;
  create(entity: Partial<TDocument>): Promise<TEntity>;
  update(id: string, entity: Partial<TDocument>): Promise<TEntity>;
  delete(id: string): Promise<TEntity>;
}

@Injectable()
export class GenericCrudService<
  TEntity extends EntityModel,
  TDocument extends Document & TEntity,
> implements IGenericCrudService<TEntity, TDocument>
{
  constructor(protected readonly entityModel: Model<TDocument>) {}

  async findById(id: string) {
    const entity = await this.entityModel.findById(id).exec();
    if (!entity) return undefined;
    return entity.toJSON() as TEntity;
  }

  async list() {
    const entity = await this.entityModel.find().exec();
    return entity.map((t) => t.toJSON() as TEntity);
  }

  async create(entity: Partial<TDocument>) {
    const model = new this.entityModel(entity);
    const newEntity = await model.save();
    return newEntity.toJSON() as TEntity;
  }

  async update(id: string, entity: Partial<TDocument>) {
    const updatedEntity = await this.entityModel
      .findByIdAndUpdate(id, entity, { new: true })
      .exec();
    return updatedEntity.toJSON() as TEntity;
  }

  async delete(id: string) {
    const entity = await this.entityModel.findByIdAndDelete(id).exec();
    if (!entity) return undefined;

    const deleted = entity.toJSON() as TEntity;
    return deleted;
  }
}
