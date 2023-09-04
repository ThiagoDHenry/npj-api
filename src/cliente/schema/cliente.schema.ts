import mongoose from "mongoose";

export const ClienteSchema = new mongoose.Schema({
    nome: String,
    cpf: Number,
    rg: Number,
    logradouro: String,
    cep: Number,
    bairro: String,
    numero: Number,
    complemento: String,
    cidade: String,
    uf: String,
    telefone: Number,
    whatsapp: Number,
})