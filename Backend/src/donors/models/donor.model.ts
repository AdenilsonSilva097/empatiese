import { EntityModel } from '../../generic-crud/entity.Model';

export class DonorModel extends EntityModel {
  id: string;
  createdAt: Date;
  bairro: string;
  cep: string;
  cidade: string;
  complemento: string;
  cpf: string;
  dataNascimento: Date;
  endereco: string;
  frequencia: string;
  inicioDoacao: Date;
  melhorData: number;
  nome: string;
  numeroEndereco: string;
  observacoes: string;
  rg: string;
  setor: string;
  telefone: string;
  uf: string;
  valor: number;
  inativo: boolean;
}
