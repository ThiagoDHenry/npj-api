import mongoose from "mongoose";

export const ClienteSchema = new mongoose.Schema({ 
    numeroProntuario: Number,
    dataAtendimento: Number,
    status: Boolean,

})
