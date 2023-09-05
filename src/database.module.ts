import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MotivoSchema } from './motivos/schema/motivo.schema';
import { VaraSchema } from './varas/schema/varas.schema';
import { AgendamentoSchema } from './agendamentos/schema/agendamentos.schema';
import { JuridicoSchema } from './juridicos/schema/juridicos.schema';
import { ClienteSchema } from './clientes/schema/clientes.schema';


@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/npj'),
    MongooseModule.forFeature([{ name: 'Motivo', schema: MotivoSchema }]),
    MongooseModule.forFeature([{ name: 'Vara', schema: VaraSchema }]),
    MongooseModule.forFeature([{ name: 'Agendamento', schema: AgendamentoSchema }]),
    MongooseModule.forFeature([{ name: 'Juridico', schema: JuridicoSchema }]),
    MongooseModule.forFeature([{ name: 'Cliente', schema: ClienteSchema }]),
  ],
  exports: [MongooseModule],
})
export class DatabaseModule {}