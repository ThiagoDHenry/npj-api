import { Document } from 'mongoose'

export class Agendamento extends Document { 
    numeroProntuario: number;
    dataAtendimento: number;
    status: boolean;
}
