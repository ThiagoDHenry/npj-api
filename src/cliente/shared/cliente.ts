import { Document } from 'mongoose'

export class Cliente extends Document {

    nome: string;
    cpf: number;
    rg: number;
    logradouro: string;
    cep: number;
    bairro: string;
    numero: number;
    complemento: string;
    cidade: string;
    uf: string;
    telefone: number;
    whatsapp: number;
}