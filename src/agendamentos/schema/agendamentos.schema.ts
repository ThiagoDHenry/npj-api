import mongoose from "mongoose";

export const AgendamentoSchema = new mongoose.Schema({ 
    numeroProntuario: Number,
    dataAtendimento: Number,
    status: Boolean,

})
