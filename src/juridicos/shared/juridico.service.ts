import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Juridico } from './juridico';


@Injectable()
export class JuridicoService {
  constructor(
    @InjectModel('Juridico') private readonly juridicoModel: Model<Juridico>,
  ) {}

  async getAll() {
    return await this.juridicoModel.find().exec();
  }
  async getByID(id: string) {
    return await this.juridicoModel.findById(id).exec();
  }
  async create(juridico: Juridico) {
    const createdJuridico = new this.juridicoModel(juridico);
    return await createdJuridico.save();
  }
  async update(id: string, juridico: Juridico) {
    await this.juridicoModel.updateOne({ _id: id }, juridico).exec();
    return this.getByID(id);
  }
  async delete(id: string) {
    return await this.juridicoModel.deleteOne({ _id: id }).exec();
  }
}