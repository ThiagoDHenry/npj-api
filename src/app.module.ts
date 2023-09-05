import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MotivosModule } from './motivos/motivo.module';
import { VarasModule } from './varas/varas.module';
import { AgendamentosModule } from './agendamentos/agendamentos.module';
import { JuridicosModule } from './juridicos/juridicos.module';
import { ClientesModule } from './clientes/clientes.module';

@Module({
  imports: [MotivosModule, VarasModule, AgendamentosModule, JuridicosModule, ClientesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}