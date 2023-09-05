import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database.module';
import { JuridicoController } from './juridico.controller';
import { JuridicoService } from './shared/juridico.service';


@Module({
  imports: [DatabaseModule],
  controllers: [JuridicoController],
  providers: [JuridicoService],
  exports: [JuridicoService],
})
export class JuridicosModule {}