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
import { JuridicoService } from './shared/juridico.service';
import { Juridico } from './shared/juridico';
  
  @Controller('juridicos')
  export class JuridicoController {
    constructor(private juridicoService: JuridicoService) {}
  
    @Get()
    async getAll(): Promise<Juridico[]> {
      return this.juridicoService.getAll();
    }
  
    @Get(':id')
    async getByID(@Param('id') id: string): Promise<Juridico> {
      return this.juridicoService.getByID(id);
    }
  
    @Post()
    async create(@Body() juridico: Juridico): Promise<Juridico> {
      return this.juridicoService.create(juridico);
    }
    
    @Put(':id')
    async update(@Param('id') id: string, @Body() juridico: Juridico): Promise<Juridico> {
        return this.juridicoService.update(id, juridico);
    }
  
    @Delete(':id')
    async delete(@Param('id') id: string) {
      return this.juridicoService.delete(id);
    }
  }