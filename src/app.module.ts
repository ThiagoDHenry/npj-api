import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { MotivoSchema } from './motivos/schema/motivo.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { MotivoController } from './motivos/motivo.controller';
import { MotivoService } from './motivos/shared/motivo.service';


@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017:npj'),
    MongooseModule.forFeature([{ name: 'Motivo', schema: MotivoSchema }]),
],
  controllers: [AppController, MotivoController],
  providers: [AppService, MotivoService],
})
export class AppModule {}
