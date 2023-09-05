import { Document } from 'mongoose'

export class Cliente extends Document {
    descricao: string;
    status: boolean
}