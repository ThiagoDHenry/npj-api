import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Agendamento } from './agendamento';


@Injectable()
export class AgendamentoService {
  constructor(
    @InjectModel('Agendamento') private readonly AgendamentoModel: Model<Agendamento>,
  ) {}

  async getAll() {
    return await this.AgendamentoModel.find().exec();
  }
  async getByID(id: string) {
    return await this.AgendamentoModel.findById(id).exec();
  }
  async create(agendamento: Agendamento) {
    const createdAgendamento = new this.AgendamentoModel(agendamento);
    return await createdAgendamento.save();
  }
  async update(id: string, agendamento: Agendamento) {
    await this.AgendamentoModel.updateOne({ _id: id }, agendamento).exec();
    return this.getByID(id);
  }
  async delete(id: string) {
    return await this.AgendamentoModel.deleteOne({ _id: id }).exec();
  }
}