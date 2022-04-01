import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

import { getSchemaOptions } from '../../utils/mongoose.utils';
import { DonorModel } from '../models/donor.model';

export type DonorDocument = DonorModel & Document;

@Schema(getSchemaOptions())
export class Donor implements DonorModel {
  @Prop()
  id: string;

  @Prop()
  createdAt: Date;

  @Prop()
  bairro: string;

  @Prop()
  cep: string;

  @Prop()
  cidade: string;

  @Prop()
  complemento: string;

  @Prop({ unique: true })
  cpf: string;

  @Prop()
  dataNascimento: Date;

  @Prop()
  endereco: string;

  @Prop()
  frequencia: string;

  @Prop()
  inicioDoacao: Date;

  @Prop()
  melhorData: number;

  @Prop()
  nome: string;

  @Prop()
  numeroEndereco: string;

  @Prop()
  observacoes: string;

  @Prop()
  rg: string;

  @Prop()
  setor: string;

  @Prop()
  telefone: string;

  @Prop()
  uf: string;

  @Prop()
  valor: number;

  @Prop()
  inativo: boolean;
}

export const DonorSchema = SchemaFactory.createForClass(Donor);
