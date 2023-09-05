import mongoose from "mongoose";
import { ClienteSchema } from "src/clientes/schema/clientes.schema";
import { VaraSchema } from "src/varas/schema/varas.schema";


export const JuridicoSchema = new mongoose.Schema({
    cliente: ClienteSchema,
    vara: VaraSchema,
    numeroProcesso: Number,
    data: Date,
    informacoes: String,

})