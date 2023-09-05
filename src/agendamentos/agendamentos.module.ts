import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database.module';
import { AgendamentoController } from './agendamento.controller';
import { AgendamentoService } from './shared/agendamento.service';

@Module({
  imports: [DatabaseModule],
  controllers: [AgendamentoController],
  providers: [AgendamentoService],
  exports: [AgendamentoService],
})
export class AgendamentosModule {}