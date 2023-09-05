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
import { ClienteService } from './shared/cliente.service';
import { Cliente } from './shared/cliente';
  
  @Controller('clientes')
  export class ClienteController {
    constructor(private clienteService: ClienteService) {}
  
    @Get()
    async getAll(): Promise<Cliente[]> {
      return this.clienteService.getAll();
    }
  
    @Get(':id')
    async getByID(@Param('id') id: string): Promise<Cliente> {
      return this.clienteService.getByID(id);
    }
  
    @Post()
    async create(@Body() cliente: Cliente): Promise<Cliente> {
      return this.clienteService.create(cliente);
    }
    
    @Put(':id')
    async update(@Param('id') id: string, @Body() cliente: Cliente): Promise<Cliente> {
        return this.clienteService.update(id, cliente);
    }
  
    @Delete(':id')
    async delete(@Param('id') id: string) {
      return this.clienteService.delete(id);
    }
  }