import { SchemaOptions } from 'mongoose';

const schemaDefaultOptions: SchemaOptions = {
  toJSON: {
    transform: (doc, ret) => {
      ret.id = doc._id;
      Object.keys(ret).forEach((key) => {
        if (key.startsWith('_')) delete ret[key];
      });
    },
  },
};

export const getSchemaOptions = (options?: SchemaOptions) => {
  return { ...schemaDefaultOptions, ...options } as SchemaOptions;
};
