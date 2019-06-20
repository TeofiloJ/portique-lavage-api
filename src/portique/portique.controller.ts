import { Controller, Get, Param, Post, Body, Query, Delete  } from '@nestjs/common';
import { CreatePortiqueDto } from './dto/create-portique.dto';
import { PortiqueService } from './portique.service';
import { Portique as PortiqueInterface } from './interfaces/portique.interface';

@Controller('portique')
export class PortiqueController {
    constructor(private readonly userService: PortiqueService) { }

    @Post()
    async create(@Body() CreatePortiqueDto: CreatePortiqueDto) {
        this.portiqueService.create(CreatePortiqueDto);
    }

    @Get()
    async findAll(): Promise<PortiqueInterface[]> {
        return this.portiqueService.findAll();
    }

    @Get(':portiqueID')
    async find(@Param('portiqueID') portiqueID) {
        const portique = await this.portiqueService.findByID(portiqueID);
        return portique;
    }

    @Delete(':portiqueID')
    async delete(@Param('portiqueID') portiqueID) {
        const portique = await this.portiqueService.delete(portiqueID);
        return portique;
    }
}