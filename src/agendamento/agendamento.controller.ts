/* eslint-disable prettier/prettier */
import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
  } from '@nestjs/common';
import { AgendamentoService } from './shared/agendamento.service';
import { Agendamento } from './shared/agendamento';

  
  @Controller('agendamentos')
  export class AgendamentoController {
    constructor(private agendamentoService: AgendamentoService) {}
  
    @Get()
    async getAll(): Promise<Agendamento[]> {
      return this.agendamentoService.getAll();
    }
  
    @Get(':id')
    async getByID(@Param('id') id: string): Promise<Agendamento> {
      return this.agendamentoService.getByID(id);
    }
  
    @Post()
    async create(@Body() agendamento: Agendamento): Promise<Agendamento> {
      return this.agendamentoService.create(agendamento);
    }
    
    @Put(':id')
    async update(@Param('id') id: string, @Body() agendamento: Agendamento): Promise<Agendamento> {
        return this.agendamentoService.update(id, agendamento);
    }
  
    @Delete(':id')
    async delete(@Param('id') id: string) {
      return this.agendamentoService.delete(id);
    }
  }