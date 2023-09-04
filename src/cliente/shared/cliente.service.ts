import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Cliente } from './cliente';


@Injectable()
export class ClienteService {
  constructor(
    @InjectModel('Cliente') private readonly clienteModel: Model<Cliente>,
  ) {}

  async getAll() {
    return await this.clienteModel.find().exec();
  }
  async getByID(id: string) {
    return await this.clienteModel.findById(id).exec();
  }
  async create(cliente: Cliente) {
    const createdCliente = new this.clienteModel(cliente);
    return await createdCliente.save();
  }
  async update(id: string, cliente: Cliente) {
    await this.clienteModel.updateOne({ _id: id }, cliente).exec();
    return this.getByID(id);
  }
  async delete(id: string) {
    return await this.clienteModel.deleteOne({ _id: id }).exec();
  }
}