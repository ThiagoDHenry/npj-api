import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database.module';
import { ClienteController } from './cliente.controller';
import { ClienteService } from './shared/cliente.service';


@Module({
  imports: [DatabaseModule],
  controllers: [ClienteController],
  providers: [ClienteService],
  exports: [ClienteService],
})
export class ClientesModule {}