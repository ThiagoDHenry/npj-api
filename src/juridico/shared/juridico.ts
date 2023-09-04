import { Document } from 'mongoose'
import { Cliente } from 'src/cliente/shared/cliente';
import { Vara } from 'src/vara/shared/vara';

export class Juridico extends Document {
    cliente: Cliente;
    vara: Vara;
    numeroProcesso: number;
    data: number;
    informacoes: string;
}