import { Document } from 'mongoose'
import { Cliente } from 'src/clientes/shared/cliente';
import { Vara } from 'src/varas/shared/vara';

export class Juridico extends Document {
    cliente: Cliente;
    vara: Vara;
    numeroProcesso: number;
    data: number;
    informacoes: string;
}