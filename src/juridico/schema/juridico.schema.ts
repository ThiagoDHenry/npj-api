import mongoose from "mongoose";
import { ClienteSchema } from "src/cliente/schema/cliente.schema";
import { VaraSchema } from "src/vara/schema/vara.schema";


export const JuridicoSchema = new mongoose.Schema({
    cliente: ClienteSchema,
    vara: VaraSchema,
    numeroProcesso: Number,
    data: Date,
    informacoes: String,

})