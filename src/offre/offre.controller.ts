import { Controller, Get, Param, Post, Body, Query, Delete  } from '@nestjs/common';
import { CreateOffreDto } from './dto/create-offre.dto';
import { OffreService } from './offre.service';
import { Offre as OffreInterface } from './interfaces/offre.interface';
import { ApiUseTags, ApiResponse } from '@nestjs/swagger';

@Controller('offre')
@ApiUseTags('Offre')
export class OffreController {
    constructor(private readonly offreService: OffreService) { }

    @Post()
    @ApiResponse({ status: 201, description: 'The record has been successfully created.'})
    @ApiResponse({ status: 403, description: 'Forbidden.'})
    async create(@Body() createOffreDto: CreateOffreDto) {
        this.offreService.create(createOffreDto);
    }

    @Get()
    async findAll(): Promise<OffreInterface[]> {
        return this.offreService.findAll();
    }

    @Get(':offreID')
    async find(@Param('offreID') offreID): Promise<OffreInterface> {
        const offre = await this.offreService.findByID(offreID);
        return offre;
    }

    @Delete(':offreID')
    async delete(@Param('offreID') offreID) {
        const offre = await this.offreService.delete(offreID);
        return offre;
    }
}